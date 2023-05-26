import React, { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () =>{
      setCounter(counter+1)
    }

  return (<>
    <h1>{counter}</h1>
    <button className={classes.button} onClick={handleClick}>Counter</button>
    </>)
}

export default Counter