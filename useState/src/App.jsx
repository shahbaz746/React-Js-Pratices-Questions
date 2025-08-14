import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [sh, setSh] = useState("Hello Shahbaz");
  // const [isVisible, setIsVisible] = useState(false);
  const [isColur, setIsColur] = useState(false);

  // const handleToggle = () => {
  //   setIsVisible((prev) => !prev);
  // };
  const handleToggle = () => {
    setIsColur((prev) => !prev);
  };

  return (
    <>
     {/* <h2>The Number is{count}</h2>
     <button onClick={()=>{setCount(count+1)}}>Increment</button>
     <button onClick={()=>{setCount(count-1)}}>Decrement</button> */}

       {/* <div>
        <button onClick={handleToggle}>
          {isVisible ? "Hide" : "Show"} Text
        </button>

        {isVisible && <p>Hello! I’m toggled on. 👋</p>} */}

      {/* </div> */}

      <div style={{width: "100px", height: "100px", backgroundColor: "red"}}>
        shahbaz
      </div>



    </>
  )
}

export default App