import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [value, setValue] = useState(0)
    const upDateNumber = () => {
        setValue(value + 1)
    }
  return (
    <div>
      shahbaz
        <div className="counter">{value}
        </div>
        <button onClick={upDateNumber}>Click Me</button>
    </div>
  )
}

export default Counter
