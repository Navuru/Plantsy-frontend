import React, { useState, useEffect } from 'react';
import Login from "./login/Login";
import LoginForm from './pages/LoginForm';
import Home from './home/Home';
import BaseRouter from "../routes";
import {BrowserRouter as Router} from "react-router-dom";
import { Route} from "react-router-dom";
import { Routes } from "react-router-dom";
// import PlantContainer from './pages/PlantContainer';
import NavBar from './NavBar';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    autologin();
  }, []);
  const autologin = () => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  };
  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <Router>
    <NavBar user={user} setUser={setUser}/>
    <BaseRouter user={user} setUser={setUser} autologin={autologin} />
    </Router>
    
    </>
    
  );
}

export default App;
