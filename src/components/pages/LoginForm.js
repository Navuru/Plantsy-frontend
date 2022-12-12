import React, {useState} from "react";
import "../pages/login.css"
import Error from "./Error";
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    
    const navigate = useNavigate();
    // const to_home = () => {
    //     navigate("/home");
    //   };

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("https://plantsy-production-7d90.up.railway.app/login",{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({username,password}),
        }).then((r) => {
            if (r.status === 201) {
                // console.log("We are logged in")
                r.json().then(user => {
                    navigate('/home')
                });
                // to_home()
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });

    }

    return (
        <div className= "container">
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <br/><br/>
             <input
             id="input"
            type="submit"
            name="submit"
            value="Login"
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

export default LoginForm