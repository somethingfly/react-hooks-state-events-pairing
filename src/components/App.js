import React, { useState } from "react";
import SentimentButton from "./SentimentButton";
import CommentsButton from "./CommentsButton";
import CommentsList from "./CommentsList";

import video from "../data/video.js";


function App() {
  console.log("Here's your data:", video);

  const [videoData, setVideoData] = useState(video);
  const [showComments, setShowComments] = useState(true);

  function incrementSentiment(sentimentType) {
    const newVideoData = {...videoData};
    newVideoData[sentimentType]++;
    setVideoData(newVideoData);
  }

  function toggleComments() {
    const newShowComments = !showComments;
    setShowComments(newShowComments);
  }

  console.log("showComments:", showComments);
  console.log("videoData:", videoData);

  return (
    <div className="App">
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        allowFullScreen
        title={videoData.title}
      />
      <h1>{videoData.title}</h1>
      <p>{videoData.views} Views | Uploaded {videoData.createdAt}</p>
      <SentimentButton
        incrementSentiment={incrementSentiment}
        sentimentNumber = {videoData.upvotes}
        sentimentType="upvotes"
        sentimentIcon="👍"
      />
      <SentimentButton
        incrementSentiment={incrementSentiment}
        sentimentNumber = {videoData.downvotes}
        sentimentType="downvotes"
        sentimentIcon="👎"
      />
      <br />
      <br />
      <CommentsButton
        toggleComments={toggleComments}
        showComments={showComments}
      />
      {
        showComments ? (
          <CommentsList
            comments={videoData.comments}
          />
        ) : null
      }
    </div>
  );
}

export default App;
