import React from "react";
import "../css/Coins.css";
import { Link } from "react-router-dom";

const TrendingCoins = ({ name, symbol, price, image, id, market_cap_rank }) => {
  return (
    <div className="coin-container">
      <Link
        to={`/crypto/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">Btc {price.toFixed(5)}</p>
            <p className="coin-marketcap">Rank:{market_cap_rank}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default TrendingCoins;
