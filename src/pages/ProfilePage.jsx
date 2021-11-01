import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ProfilePage = () => {
  const { activeUser } = useContext(UserContext);

  return (
    <div>
      <h1>Hi {activeUser.name}</h1>
    </div>
  );
};

export default ProfilePage;
