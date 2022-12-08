import React from 'react';
import LoginForm from '../pages/LoginForm';
import SignUpForm from '../pages/SignUpForm';
import { useState } from 'react';

function Login ({onLogin}) {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
        {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <p>Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </p>
            </>
        ) : (
            <>
          <SignUpForm onLogin={onLogin} />
          {/* <Divider /> */}
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
        )}
        </div>
    );
}
export default Login;