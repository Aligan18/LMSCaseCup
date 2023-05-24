import React, { useState } from 'react'
import './Counter.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () =>{
      setCounter(counter+1)
    }

  return (<>
    <h1>{counter}</h1>
    <button className='button' onClick={handleClick}>Counter</button>
    </>)
}

export default Counter