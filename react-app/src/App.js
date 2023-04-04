import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/custom/SignUp";
import Login from "./components/custom/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
