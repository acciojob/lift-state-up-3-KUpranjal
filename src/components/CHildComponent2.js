import React from "react";
const CHildComponent2=({setSelectedOption})=>{
     return (
    <div>
      <p>Child Component 1</p>
      <button onClick={() => setSelectedOption("Option 2")}>
        Option 2
      </button>
    </div>
  );
}
export default CHildComponent2