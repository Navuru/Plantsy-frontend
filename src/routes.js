import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.js";
// import SignUp from "./components/SignUp.js";
import Home from "./components/home/Home";
// import Header from "./components/pages/Header.js";
// import PlantForm from "./components/pages/PlantForm.js";
// import PlantContainer from "./components/pages/PlantContainer.js";
// import NavBar from "./components/NavBar.js";


const BaseRouter = ({setUser,user, autologin}) => (
  <div>
    <Routes>
      <Route exact path="/home" element={<Home user={user} setUser={setUser} />} />
      <Route exact path="/" element={<Login autologin={autologin} />} />
    </Routes>
  </div>
  
);
export default BaseRouter;