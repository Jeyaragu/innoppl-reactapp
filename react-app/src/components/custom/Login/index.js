import { React, useState } from "react";
import Button from "../../common/Button";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [logInPayload, setlogInPayload] = useState({
    user_email_addr: "",
    password: "",
  });
  const [loginError, setLoginError] = useState();

  const handleChanges = (value, data) => {
    setlogInPayload({ ...logInPayload, [data]: value });
  };

  const loginUser = async () => {
    const loginResponse = await axios.post(
      "http://localhost:4000/api/login",
      logInPayload
    );
    if (loginResponse.status === 200) {
      sessionStorage.setItem("userInfo", loginResponse?.data?.data);
      navigate("/profile");
    } else {
      setLoginError(loginResponse.data.message);
    }
  };

  return (
    <div id="login">
      <div className="form-wrap">
        <h1>Login Up</h1>
        {/* <form> */}
        <div className="form-group">
          <label>E-Mail Address *</label>
          <input
            type="email"
            placeholder="Enter E-Mail name"
            name="user_email_addr"
            value={logInPayload.user_name}
            onChange={(e) => {
              handleChanges(e.target.value, "user_email_addr");
            }}
          ></input>
        </div>
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={logInPayload.password}
            onChange={(e) => {
              handleChanges(e.target.value, "password");
            }}
          ></input>
        </div>
        <Button
          text="Login Up"
          disabled={
            logInPayload.user_email_addr && logInPayload.password ? false : true
          }
          onClick={loginUser}
        />
        {/* </form> */}
      </div>
      <p>
        New User <Link to="/signup">Signup </Link>
        <hr />
      </p>
      {loginError && <p>{loginError}</p>}
    </div>
  );
}

export default Login;
