import React, {useState} from "react";
import SignUpForm from "./SignUpForm";


function LoginForm() {
    const [formData,setFormData] = useState ({
        username: "",
        password: "",
        password_confirmation: "",
    })

    function handleSubmit(e) {
        e.preventDefault();
        
    }

    return (
        <div className= "container">
        <form>
            <h3>Login</h3>
            <input
            type="text"
            name="name"
            value={formData.username}
            placeholder="Enter username..."
            />
            <br/> <br/>
            <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password..."
            />
             <br/> <br/>
             <input
            type="password"
            name="password"
            value={formData.password_confirmation}
            placeholder="Re-enter password..."
            />
            <br/><br/>
             <input
            type="submit"
            name="submit"
            value="Login"
            className="submit"
                />
        </form>
    </div>
    )
}

export default LoginForm