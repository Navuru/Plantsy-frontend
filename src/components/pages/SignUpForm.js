import React, { useState } from "react";
import "../pages/login.css"
import Error from "./Error";
import { useNavigate } from 'react-router-dom';

function SignUpForm () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("plantsy-production-7d90.up.railway.app/plants/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then(user => {
                    navigate('/home')
                });
            } else {
                r.json().then((err) => setErrors(err));
            }
        });

    }


    return ( 
        <div className= "container">
        <form onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <input
            type="text"
            name="name"
            value={username}
            placeholder="Enter username..."
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/> <br/>
            <input 
            type="password"
            name="password"
            value={password}
            placeholder="Enter password..."
            onChange={(e) => setPassword(e.target.value)}
            />
             <br/> <br/>
             <input
            id = "pasword"
            type="password"
            name="password"
            value={passwordConfirmation}
            placeholder="Re-enter password..."
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br/><br/>
             <input
             id ="input"
            type="submit"
            name="submit"
            value="Create Account"
            className="submit"
            />
            <div>
            {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
            </div>
        </form>
    </div>
    )
}

export default SignUpForm