import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  }

  const doubleTheNumber = () => {
    setCount(count * 2);
  }

  const resetCount = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <div className="number">{count}</div>
      <div className="buttons-container">
        <div className="counter-button" onClick={addOne}>+1</div>
        <div className="counter-button blue" onClick={doubleTheNumber}>x2</div>
        <div className="reset-button" onClick={resetCount}>Resest</div>
      </div>
    </div>
  );
}

export default App;
