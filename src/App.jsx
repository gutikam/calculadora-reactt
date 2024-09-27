import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay(display + value);
  }

  const clearDisplay = () => {
    setDisplay("");
  }

  const calculate = () => {
    try{
      setDisplay(eval(display).toString());
    }catch{
      setDisplay("Error");
    }
  }

  return (
    <>
      <div className="calculator">
        <input type="text" value={display} className='display' disabled />
        <div className="buttons">
          <button onClick={clearDisplay}>C</button>
          <button onClick={() => appendToDisplay("/")}>/</button>
          <button onClick={() => appendToDisplay("*")}>x</button>
          <button onClick={() => appendToDisplay("-")}>-</button>
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("+")}>+</button>
          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("0")}>0</button>
        </div>
      </div>
    </>
  )
}

export default App
