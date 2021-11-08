import React, { useContext } from "react";
import { FavCoinContext } from "../context/FavCoinContext";
import { UserContext } from "../context/UserContext";

const FavCoins = () => {
  const { activeUser } = useContext(UserContext);
  //const { storeFavCoin, getUserFavCoin, deleteFavCoin } =
  useContext(FavCoinContext);

  return (
    <div>
      <h1>{activeUser.name}s favorite Coins</h1>
    </div>
  );
};

export default FavCoins;
