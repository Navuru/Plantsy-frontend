import React, { useState, useEffect } from 'react';
// import {BrowserRouter} from "react-router-dom";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
import Header from "./Header";
// import SignUp from "./SignUp";
import Login from "./Login"
import PlantContainer from './PlantContainer';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //auto login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser}/>
  
  return (
    <Router>
    <div>
      <Routes>  

      <Route exact path="/plants" element={<PlantContainer/>}></Route>
    </Routes>
    
    </div>
    <Header/>
    </Router>
    
  );
}

export default App;
