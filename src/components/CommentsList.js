import React from "react";
import Comment from "./Comment";

function CommentsList({comments}) {

  const listOfComments = comments.map((item) => {
    return (
      <Comment
        key={item.id}
        user={item.user}
        comment={item.comment}
      />
    )
  }) 
  
  return (
    <div className="commentList">
       <h2>{comments.length} Comments</h2>
       {listOfComments}
    </div>
  );
}

export default CommentsList;