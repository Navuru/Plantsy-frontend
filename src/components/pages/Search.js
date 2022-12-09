import React from "react";


function Search({ search, setSearch }) {
    
  return (
    <div className="search">
      <br />
      <input
        type="text"
        placeholder="Search for a plant"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <br />
    </div>
  );
}

export default Search;