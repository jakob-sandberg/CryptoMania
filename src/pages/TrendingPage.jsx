import React from "react";
import TrendingList from "../components/TrendingList";
import "../css/Trending.css";

function TrendingPage() {
  return (
    <div className="trending-container">
      <div className="trend-content">
        <h2 className="trend-rubrik">trending coins over the last 7 days</h2>
        <TrendingList />
      </div>
    </div>
  );
}

export default TrendingPage;
