import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.js";
// import SignUp from "./components/SignUp.js";
import Home from "./components/home/Home";
// import NavBar from "./components/NavBar.js";


const BaseRouter = ({setUser,user, autologin}) => (
  <div>
    <Routes>
      
      <Route path="/home" element={<Home user={user} setUser={setUser} />} />
      <Route path="/" element={<Login autologin={autologin} />} />
      {/* <Route path="/signup" element={<SignUp autologin={autologin}/>} /> */}
    </Routes>
  </div>
  
);
export default BaseRouter;