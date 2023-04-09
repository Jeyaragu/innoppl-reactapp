import { React, useState } from "react";

import "./Signup.css";
import Button from "../../common/Button/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [signupPayload, setSignUpPayload] = useState({
    user_name: "",
    user_email_addr: "",
    password: "",
  });
  const [error, setError] = useState();

  const handleChange = (value, data) => {
    setSignUpPayload({ ...signupPayload, [data]: value });
  };

  const createUser = async (e) => {
    console.log("create user");
    const res = await axios.post(
      "http://localhost:4000/api/signin",
      signupPayload
    );
    console.log("res", res);
    if (res.status === 200) {
      sessionStorage.setItem("userID", res?.data?.data?._id);
      navigate("/profile");
    } else {
      setError("Please check username and password");
    }
  };

  return (
    <div id="signup">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        {/* <form> */}
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="user_name"
            value={signupPayload.user_name}
            onChange={(e) => handleChange(e.target.value, "user_name")}
          ></input>
        </div>
        <div className="form-group">
          <label>E-Mail Address *</label>
          <input
            type="text"
            placeholder="Enter E-Mail name"
            name="user_email_addr"
            value={signupPayload.user_email_addr}
            onChange={(e) => handleChange(e.target.value, "user_email_addr")}
          ></input>
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={signupPayload.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          ></input>
        </div>
        <Button
          text="Sign Up"
          disabled={
            signupPayload.user_name &&
            signupPayload.user_email_addr &&
            signupPayload.password
              ? false
              : true
          }
          onClick={createUser}
        />
        <p>
          Already having an account <Link to="/">Login</Link>
          <hr />
        </p>
        {error && <p>{error}</p>}
        {/* </form> */}
      </div>
    </div>
  );
}

export default SignUp;
