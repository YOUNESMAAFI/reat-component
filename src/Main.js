import React from "react";
import "./App.css";
import ProfilePhoto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Adress from "./profile/Address";

function Profile() {
  return (
    <div className="Profile">
      <div className="Row">
        <ProfilePhoto></ProfilePhoto>
      </div>
      <div className="Row">
        <FullName></FullName>
        <Adress></Adress>
      </div>
    </div>
  );
}

export default Profile;
