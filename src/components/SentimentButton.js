import React from "react";

function SentimentButton({incrementSentiment, sentimentNumber, sentimentType, sentimentIcon}) {
  
  return (
    <button className="sentimentButton" onClick={() => incrementSentiment(sentimentType)}>
      {sentimentNumber} {sentimentIcon}
    </button>
  );
}

export default SentimentButton;