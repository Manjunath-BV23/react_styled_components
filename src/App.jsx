import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import { Button } from './components/Button';

function App() {
  // const [count, setCount] = useState(0)
  // const ref = useRef(null) //{current: "Manju"}
  
  // useEffect(() => {
  //   startTimer()
  // }, [])

  // const startTimer = () => {
  //   ref.current = setInterval(() => {
  //     setCount((prev) => prev+1)
  //   }, 300)
  // }

  const [theme, setTheme] = useState("light")

  return (
    <div className="App">

      <Button theme = {theme}> Stop</Button>
      <Button theme = {theme}> Start</Button>

      <br/>
      <button onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}>Change Theme</button>


      {/* <h2>Counter: {count}</h2>

      <button onClick={() => {
        clearInterval(ref.current)
      }}>Stop</button>

      <button onClick = {startTimer}>
        Start</button>

        <button onClick={() => {
        clearInterval(ref.current);
        setCount(0)
      }}>Reset</button> */}

    </div>
  );
}

export default App;
