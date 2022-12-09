import React, { useState, useEffect } from 'react';
import BaseRouter from "../routes";
import {BrowserRouter as Router} from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from "./NavBar"


function App() {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    // auto-login
    autologin();
  }, []);
  const autologin = () => {
    fetch("https://plantsy-production-7d90.up.railway.app/plants/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // navigate("/home")
      }
    });
  };
  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <Router>
    <NavBar user={user} setUser={setUser}/>
    <BaseRouter user={user} setUser={setUser} autologin={autologin} />
    </Router>
    <Footer/>
    
    </>
    
  );
}

export default App;
