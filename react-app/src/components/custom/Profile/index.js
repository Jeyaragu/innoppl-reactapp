import React from "react";

const Profile = (props) => {
  const data = sessionStorage.getItem("userInfo");
  console.log(JSON.parse(data));
  return (
    <div>
      Profile page
      <p>Name: {data.user_name}</p>
      <p>E-MailAddress: {data.user_email_addr}</p>
    </div>
  );
};

export default Profile;
