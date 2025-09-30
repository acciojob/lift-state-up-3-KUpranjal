
import  { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./CHildComponent2";


import React from 'react'

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <ChildComponent1
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ChildComponent2
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default App