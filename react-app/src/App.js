import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/custom/SignUp";
import Login from "./components/custom/Login";
import Profile from "./components/custom/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
