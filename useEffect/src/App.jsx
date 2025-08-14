import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert('Welcome to the React App!')
  }, [])
  useEffect(() => {
    alert('Count was updated')
  }, [count])
  


  return (
    <>
     <p>{count}</p>
     <button onClick={()=>{
      setCount(count + 1)
     }}>Count</button>
    </>
  )
}

export default App
