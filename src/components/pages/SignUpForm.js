// import { Button } from "bootstrap";
import React, { useState } from "react";
import "../pages/login.css"

function SignUpForm ({onLogin}) {

    // const [formData,setFormData] = useState({
    //     username: "",
    //     password: "",
    //     password_confirmation: "",
    // });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
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
                r.json().then((user) => onLogin(user));
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
            id = "pasword"
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
            {/* <div>
            {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
            </div> */}
        </form>
    </div>
    )
}

export default SignUpForm