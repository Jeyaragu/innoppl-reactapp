import React from "react";

const Profile = (props) => {
  let data = sessionStorage.getItem("userID");
  return (
    <div>
      Profile page
      <label>Name: {data.user_name}</label>
      <label>E-MailAddress: {data.user_email_addr}</label>
    </div>
  );
};

export default Profile;
