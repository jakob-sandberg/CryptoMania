import React, { createContext, useState } from "react";

export const FavCoinContext = createContext();

const FavCoinContextProvider = (props) => {
  //for rendering favorite coins on Profile page
  const [userFavCoin, setUserFavCoin] = useState(null);

  const storeFavCoin = async (favToSave) => {
    let fav = await fetch("/api/v1/favorite/savefavcoin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favToSave),
    });
    fav = await fav.json();

    return fav;
  };

  //

  //
  const getUserFavCoin = async () => {
    let fav = await fetch(`/api/v1/favorite/getfavcoin`);
    fav = await fav.json();
    setUserFavCoin(fav);
  };

  const deleteFavCoin = async (coinId, userId) => {
    await fetch(`/api/v1/favorite/deletefavcoin/${coinId}/${userId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    getUserFavCoin(userId);
  };

  const values = {
    storeFavCoin,
    getUserFavCoin,
    deleteFavCoin,
  };

  return (
    <FavCoinContext.Provider value={values}>
      {props.children}
    </FavCoinContext.Provider>
  );
};

export default FavCoinContextProvider;
