import React from "react";

function Header({setSearch}) {

  return (
    <div id="header" class ="img">
      <nav>
        <div>
          <form role = "search" id = "display">
            <input 
            type = "text"
            placeholder="Search plant..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            >
           
            </input>
            <br /> <br />
            <button type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
    
  );
}

export default Header;