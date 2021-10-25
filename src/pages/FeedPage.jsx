import React from "react";
import Tweet from "../components/Tweet";
import "../App.css";

const FeedPage = () => {
  return (
    <div>
      <p className="feed-header">Some of the top tweets about our Coins!</p>
      <div className="feed-container">
        <Tweet />
      </div>
    </div>
  );
};

export default FeedPage;
