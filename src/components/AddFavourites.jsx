import React, { useContext } from "react";

import "../css/Coins.css";
import { UserContext } from "../context/UserContext";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FavCoinContext } from "../context/FavCoinContext";

const AddFavourites = (coin) => {
  const { activeUser } = useContext(UserContext);
  const { favCoin, setFavCoin } = useContext(FavCoinContext);

  const handleFavCoin = (coin) => {
    if (!favCoin) {
      setFavCoin(true);
    } else if (favCoin) {
      setFavCoin(!favCoin);
    }
  };

  return (
    <div className="coin-fav">
      {activeUser ? (
        favCoin ? (
          <AiFillHeart onClick={() => handleFavCoin()} size={25} />
        ) : (
          <AiOutlineHeart onClick={() => handleFavCoin()} size={25} />
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default AddFavourites;
