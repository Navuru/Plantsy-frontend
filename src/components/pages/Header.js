import React from "react";

function Header({handleSearch}) {

  return (
    <div id="header" class ="img">
      <nav>
        <div>
          <form role = "search" id = "display">
            <input
            type = "text"
            placeholder="Search plant...">
            </input>
            <br /> <br />
            <button type="submit" onClick={handleSearch}>Search</button>
          </form>
        </div>
      </nav>
    </div>
    
  );
}

export default Header;