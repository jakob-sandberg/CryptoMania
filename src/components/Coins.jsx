import React, { useContext } from "react";
import "../css/Coins.css";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FavCoinContext } from "../context/FavCoinContext";

const Coins = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  id,
}) => {
  const { activeUser } = useContext(UserContext);
  const { favCoin, setFavCoin } = useContext(FavCoinContext);

  const handleFavCoin = (id) => {
    if (!favCoin) {
      setFavCoin(true);
      console.log("jaha", id);
    } else if (favCoin) {
      setFavCoin(!favCoin);
    }
  };

  return (
    <div className="coin-container" key={id}>
      <div className="coin-fav">
        {activeUser ? (
          favCoin ? (
            <div>
              <AiFillHeart onClick={() => handleFavCoin(id)} size={25} />
            </div>
          ) : (
            <div>
              <AiOutlineHeart onClick={() => handleFavCoin(id)} size={25} />
            </div>
          )
        ) : (
          ""
        )}
      </div>
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
            <p className="coin-price">${price.toFixed(2)}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>

            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}

            <p className="coin-marketcap">Cap:${marketcap.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Coins;
