import React, { useEffect, useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log("Rendering Profile");

  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  );
};

export default Profile;
