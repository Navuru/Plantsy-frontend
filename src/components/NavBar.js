import React from 'react';
import { useNavigate } from "react-router-dom";


function NavBar ({user, setUser}) {
  const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            navigate("/")
          }
        });
      }

      return (
        <div id = "display">
        <div>

        </div>
        
        <button onClick={handleLogoutClick}>
          Logout
        </button>
        </div>
      )
}
export default NavBar