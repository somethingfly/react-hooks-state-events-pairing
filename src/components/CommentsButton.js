import React from "react";

function CommentsButton({toggleComments, showComments}) {
  
  return (
    <button onClick={toggleComments}>
      {showComments ? "Hide Comments" : "Show Comments"}
    </button>
  );
}

export default CommentsButton;