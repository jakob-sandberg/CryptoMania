import React, { useContext, useEffect } from "react";
import { FavCoinContext } from "../context/FavCoinContext";
import { UserContext } from "../context/UserContext";
import FavCoinCard from "../components/FavCoinCard";

import "../css/ProfilePage.css";

const FavCoins = () => {
  const { activeUser } = useContext(UserContext);
  const { userFavCoin, getFavCoinsByUserId } = useContext(FavCoinContext);

  useEffect(() => {
    getFavCoinsByUserId(activeUser._id);
    // eslint-disable-next-line
  }, [activeUser]);

  return (
    <div>
      {activeUser && (
        <div>
          <div>
            {userFavCoin &&
              userFavCoin.map((userCoins, i) => (
                <FavCoinCard userCoins={userCoins} key={i} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavCoins;
