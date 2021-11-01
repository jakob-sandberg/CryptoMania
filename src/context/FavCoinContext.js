import React, { createContext, useState } from "react";

export const FavCoinContext = createContext();

const FavCoinContextProvider = (props) => {
  //for rendering favorite coins on Profile page
  const [favCoin, setFavCoin] = useState(false);

  const values = { favCoin, setFavCoin };

  return (
    <FavCoinContext.Provider value={values}>
      {props.children}
    </FavCoinContext.Provider>
  );
};

export default FavCoinContextProvider;
