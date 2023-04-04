import "./Login.css";
import Button from "../../common/Button/index";

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
        </form>
      </div>
    </div>
  );
}

export default Login;
