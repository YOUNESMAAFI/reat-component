import React from "react";
import Avatar from "./younes.png";

function ProfilePhoto() {
  return (
    <div className="profilePhoto">
      <img src={Avatar} className="Avatar" alt="Profile"></img>
    </div>
  );
}

export default ProfilePhoto;
