import { React, useState } from "react";

import "./Signup.css";
import Button from "../../common/Button/index";

function SignUp() {
  const [sigupPayload, setSignUpPayload] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e, data) => {
    if (data === "name") {
      setSignUpPayload({ ...sigupPayload, name: e.target.value });
    }
    if (data === "email") {
      setSignUpPayload({ ...sigupPayload, email: e.target.value });
    }
    if (data === "password") {
      setSignUpPayload({ ...sigupPayload, password: e.target.value });
    }
  };
  return (
    <div id="signup">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={sigupPayload.name}
              onChange={(e) => handleChange(e, "name")}
            ></input>
          </div>
          <div className="form-group">
            <label>E-Mail Address *</label>
            <input
              type="text"
              placeholder="Enter E-Mail name"
              name="email"
              value={sigupPayload.email}
              onChange={(e) => handleChange(e, "email")}
            ></input>
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={sigupPayload.password}
              onChange={(e) => handleChange(e, "password")}
            ></input>
          </div>
          <Button
            text="Sign Up"
            disabled={
              sigupPayload.name && sigupPayload.email && sigupPayload.password
                ? false
                : true
            }
          />
        </form>
      </div>
      <p>
        Already registered <a href="/login">Login</a>
        <hr />
      </p>
    </div>
  );
}

export default SignUp;
