import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const FavCoinContext = createContext();

const FavCoinContextProvider = (props) => {
  const { activeUser } = useContext(UserContext);
  //for rendering favorite coins on Profile page
  const [userFavCoin, setUserFavCoin] = useState([]);

  useEffect(() => {
    if (activeUser) {
      getFavCoinsByUserId(activeUser._id);
    }
  }, [activeUser]);

  const storeFavCoin = async (favToSave) => {
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

  const deleteFavCoin = async (coinId) => {
    let result = await fetch(`/api/v1/favorite/deletefavcoin/${coinId}`, {
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
    let coins = await fetch(`api/v1/favorite/user-favcoins?userId=${userId}`);
    coins = await coins.json();
    setUserFavCoin(coins);
  };

  const values = {
    storeFavCoin,
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
