import React from "react";
import Header from "../components/Header";
import "../css/Homepage.css";
import CoinList from "../components/CoinList";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header">
        <Header />
      </div>
      <div className="homePage-container">
        <div className="coinList">
          <CoinList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
