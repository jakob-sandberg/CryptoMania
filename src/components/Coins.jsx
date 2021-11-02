import React, { useContext } from "react";
import "../css/Coins.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FavCoinContext } from "../context/FavCoinContext";

const Coins = (coin) => {
  const { activeUser } = useContext(UserContext);
  const { favCoin, setFavCoin } = useContext(FavCoinContext);

  const handleFavCoin = (coin) => {
    if (!favCoin) {
      setFavCoin(true);
    } else if (favCoin) {
      setFavCoin(!favCoin);
    }
  };

  console.log("COIN", coin.coin);

  return (
    <div className="coin-container">
      <div className="coin-fav">
        {activeUser ? (
          favCoin ? (
            <AiFillHeart onClick={() => handleFavCoin(coin)} size={25} />
          ) : (
            <AiOutlineHeart onClick={() => handleFavCoin(coin)} size={25} />
          )
        ) : (
          ""
        )}
      </div>
      <Link
        to={`/crypto/${coin.coin.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="coin-row">
          <div className="coin">
            <img src={coin.coin.image} alt="crypto" />
            <h1>{coin.coin.name}</h1>
            <p className="coin-symbol">{coin.coin.symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${coin.coin.current_price.toFixed(2)}</p>
            <p className="coin-volume">
              ${coin.coin.market_cap.toLocaleString()}
            </p>{" "}
            {coin.coin.price_change_percentage_24h < 0 ? (
              <p className="coin-percent red">
                {coin.coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="coin-percent green">
                {coin.coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
            <p className="coin-marketcap">
              Cap:${coin.coin.total_volume.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>{" "}
    </div>
  );
};
export default Coins;
