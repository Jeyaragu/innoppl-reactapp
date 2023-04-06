import React from "react";

const Profile = (props) => {
  let data = sessionStorage.getItem("userID");
  return (
    <>
      Profile page
      <label>ID</label>
      <p>{data}</p>
    </>
  );
};

export default Profile;
