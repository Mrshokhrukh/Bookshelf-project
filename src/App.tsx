import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Myself from "./pages/myself/Myself";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="myself" element={<Myself />}></Route>
            <Route path="*" element={<Navigate to={"/"} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
