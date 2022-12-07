import { Button } from "bootstrap";
import React, { useState } from "react";

function SignUpForm () {

    const [formData,setFormData] = useState({
        username: "",
        password: "",
        password_confirmation: "",
    });



    return ( 
        <div className= "container">
        <form>
            <h3>SignUp</h3>
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
            value="Create Account"
            className="submit"
                />
        </form>
    </div>
    )
}

export default SignUpForm