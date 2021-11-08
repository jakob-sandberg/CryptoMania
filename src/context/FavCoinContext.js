import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const FavCoinContext = createContext();

const FavCoinContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);
  //for rendering favorite coins on Profile page
  const [userFavCoin, setUserFavCoin] = useState([]);

  useEffect(() => {
    console.log("userFavCoins context", userFavCoin);
  }, [userFavCoin]);

  const storeFavCoin = async (favToSave) => {
    console.log(favToSave.coinId);
    let fav = await fetch("/api/v1/favorite/savefavcoin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favToSave),
    });
    fav = await fav.json();
    localStorage.setItem("userFavCoin", JSON.stringify(fav));
    setUserFavCoin([...userFavCoin, fav]);

    return fav;
  };

  //

  const getUserFavCoin = async () => {
    let fav = await fetch(`/api/v1/favorite/getfavcoins`);
    fav = await fav.json();
    setUserFavCoin(fav);
    console.log("getfavcoin", fav);
  };

  /*   const deleteFavCoin = async (coinId, userId) => {
    await fetch(`/api/v1/favorite/deletefavcoin/${coinId}/${userId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  }; */

  const deleteFavCoin = async (coinId, userId) => {
    let result = await fetch(`/api/v1/favorite/deletefavcoin/$${coinId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    getFavCoinsByUserId(userId);
    result = await result.json();
    return result;
  };

  const getFavCoinsByUserId = async (userId) => {
    let fav = await fetch(`api/v1/favorite/user-favcoins?${userId}`);
    fav = await fav.json();
    setUserFavCoin(fav);
    console.log("context", userFavCoin);
  };

  const values = {
    storeFavCoin,
    getUserFavCoin,
    deleteFavCoin,
    userFavCoin,
    setUserFavCoin,
    getFavCoinsByUserId,
  };

  return (
    <FavCoinContext.Provider value={values}>
      {props.children}
    </FavCoinContext.Provider>
  );
};

export default FavCoinContextProvider;
