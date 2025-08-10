import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/> */}
   <Counter/>
    </>
  )
}

export default App
