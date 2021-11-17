import React, { useContext } from "react";
import FavCoins from "../components/FavCoins";
import { UserContext } from "../context/UserContext";
import "../css/ProfilePage.css";

const ProfilePage = () => {
  const { activeUser } = useContext(UserContext);

  return (
    <div className="profilePage-container">
      <div className="profilePage-header">
        <h1>Hi {activeUser.name}!</h1>
        <p>All your favorite coins in one place!</p>
      </div>
      <div className="profile-favCoin">
        <FavCoins />
      </div>
    </div>
  );
};

export default ProfilePage;
