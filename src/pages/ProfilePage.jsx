import React, { useContext } from "react";
import FavCoins from "../components/FavCoins";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
  const { activeUser } = useContext(UserContext);

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
