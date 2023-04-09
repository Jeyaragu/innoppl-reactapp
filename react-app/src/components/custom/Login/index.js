import { useState } from "react";
import Button from "../../common/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [logInPayload, setlogInPayload] = useState({
    user_email_addr: "",
    password: "",
  });
  const handleChanges = (value, data) => {};
  const loginUser = async () => {
    const loginResponse = await axios.post(
      "http://localhost:4000/api/login",
      logInPayload
    );
    console.log(loginResponse);
  };
  return (
    <div id="login">
      <div className="form-wrap">
        <h1>Login Up</h1>
        {/* <form> */}
        <div className="form-group">
          <label>E-Mail Address *</label>
          <input
            type="text"
            placeholder="Enter E-Mail name"
            name="user_email_addr"
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
    </div>
  );
}

export default Login;
