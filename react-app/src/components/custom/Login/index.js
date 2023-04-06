import "./Login.css";
import Button from "../../common/Button/index";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div id="login">
      <div className="form-wrap">
        <h1>Login Up</h1>
        <form>
          <div className="form-group">
            <label>E-Mail Address *</label>
            <input
              type="text"
              placeholder="Enter E-Mail name"
              name="email"
            ></input>
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
            ></input>
          </div>
        </form>
      </div>
      <p>
        New User <Link to="/signup">Signup</Link>
        <hr />
      </p>
    </div>
  );
}

export default Login;
