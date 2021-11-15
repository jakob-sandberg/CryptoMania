import React, { useContext, useEffect } from "react";
import FavCoins from "../components/FavCoins";
import { UserContext } from "../context/UserContext";
import { FavCoinContext } from "../context/FavCoinContext";

const ProfilePage = () => {
  const { activeUser } = useContext(UserContext);
  const { getFavCoinsByUserId } = useContext(FavCoinContext);

  useEffect(() => {
    if (activeUser) {
      getFavCoinsByUserId();
    }
    // eslint-disable-next-line
  }, [activeUser]);

  return (
    <div>
      <h1>Hi {activeUser.name}</h1>
      <div>
        <FavCoins />
      </div>
    </div>
  );
};

export default ProfilePage;
