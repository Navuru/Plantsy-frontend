import React, { useState, useEffect } from 'react';
import Login from "./login/Login";
import BaseRouter from "../routes";
import {BrowserRouter as Router} from "react-router-dom";
import {BrowserRouter as Route} from "react-router-dom";
import PlantContainer from './pages/PlantContainer';


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
  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <Router>
   
    <BaseRouter user={user} setUser={setUser} autologin={autologin} />
    </Router>
    <div>
      {/* <Home/>
    <Route path="/home "/> */}
    
    </div>

    </>
    
  );
}

export default App;
