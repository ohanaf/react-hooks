import React, {useState} from "react";

const StartCount = 0;

function App() {

  const [count, setCount] = useState(StartCount);

  function increase() {
      setCount(count+1);
  }

  function decrease() {
    setCount(count-1);
  }

  
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
	  </div>
  )
}

export default App;
