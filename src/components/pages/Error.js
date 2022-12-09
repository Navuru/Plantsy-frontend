import React from "react";

function Error({ children }) {
    return (
      <div>
        {/* <span>!</span> */}
        <p>{children} !</p>
      </div>
    );
  }

  export default Error;