import React from "react";


var count = 0;

function clickFunction(){
	count++;
}

function App() {
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={clickFunction}>+</button>
	  </div>
  )
}

export default App;
