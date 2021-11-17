import React, { useContext } from "react";
import "../css/FavCoinCard.css";
import { Link } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";

import { FavCoinContext } from "../context/FavCoinContext";
import { UserContext } from "../context/UserContext";

const FavCoinCard = ({ userCoins }) => {
  const { deleteFavCoinFromUser } = useContext(FavCoinContext);
  const { activeUser } = useContext(UserContext);

  const userId = activeUser._id;

  const handleDeleteCoin = (coinId) => {
    deleteFavCoinFromUser(userId, coinId);
  };

  return (
    <div>
      <div className="main-container">
        {userCoins.coins.map((coin, coinId) => (
          <div key={coinId} className="favCoin-container">
            <div className="Coincard">
              <div className="card__content">
                <Link
                  to={`/crypto/${coin.coinId}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img
                    className="favCoin-image"
                    src={coin.coinUrl}
                    alt="coin"
                  />
                  <h3 className="card__header">{coin.coinName}</h3>
                </Link>
                <div>
                  <VscTrash
                    size={25}
                    onClick={() => handleDeleteCoin(coin.coinId, userId)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavCoinCard;
