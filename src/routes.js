import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
// import Plants from "./Plant.js";
import Signup from "./components/SignUp.js";
import Header from "./components/Header";


const BaseRouter = ({setUser,user, autologin}) => (
  <div>
    <Routes>
      <Route path="/home" element={<Header user={user} setUser={setUser} />} />
      <Route path="/signup" element={<Signup autologin={autologin}/>} />
      <Route path="/" element={<Login autologin={autologin} />} />

    </Routes>
  </div>
);
export default BaseRouter;