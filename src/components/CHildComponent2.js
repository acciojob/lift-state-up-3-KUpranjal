import React from "react";
const ChildComponent2=({setSelectedOption})=>{
     return (
    <div>
      <p>Child Component 1</p>
      <button onClick={() => setSelectedOption("Option 2")}>
        Option 2
      </button>
    </div>
  );
}
export default ChildComponent2