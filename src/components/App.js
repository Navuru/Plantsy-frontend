import React, { useState, useEffect } from 'react';
import BaseRouter from "../routes";
import {BrowserRouter as BrowserRouter} from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   //auto login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser}/>
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
  
  return (
    <>
    <Router>
    <BaseRouter user={user} setUser={setUser} autologin={autologin} />
    </Router>
    </>
    
  );
}

export default App;
