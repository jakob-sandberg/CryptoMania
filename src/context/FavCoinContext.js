import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const FavCoinContext = createContext();

const FavCoinContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);
  //for rendering favorite coins on Profile page
  const [userFavCoin, setUserFavCoin] = useState();
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    if (activeUser) {
      getFavCoinsByUserId(activeUser._id);
    }
  }, [activeUser]);

  useEffect(() => {});

  const getAllCoins = async () => {
    let coins = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    coins = await coins.json();

    setCoins(coins.coins);
  };

  const storeFavCoin = async (favToSave) => {
    let fav = await fetch("/api/v1/favorite/savefavcoin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favToSave),
    });
    fav = await fav.json();
    setUserFavCoin([...userFavCoin, fav]);

    return fav;
  };
  //

  const deleteFavCoinFromUser = async (userId, coinId) => {
    let result = await fetch(`/api/v1/favorite/${userId}/${coinId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    getFavCoinsByUserId(activeUser._id);
    result = await result.json();
    return result;
  };

  const getFavCoinsByUserId = async (userId) => {
    let coins = await fetch(`api/v1/favorite/userfavcoins?userId=${userId}`);
    coins = await coins.json();
    setUserFavCoin(coins.userCoins);
  };

  const values = {
    getAllCoins,
    storeFavCoin,
    deleteFavCoinFromUser,
    userFavCoin,
    setUserFavCoin,
    getFavCoinsByUserId,
    coins,
  };

  return (
    <FavCoinContext.Provider value={values}>
      {props.children}
    </FavCoinContext.Provider>
  );
};

export default FavCoinContextProvider;
