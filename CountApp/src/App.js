import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const[value, setValue]= useState(0);
  function increment(){
    setValue(value +1)
  }
  function decrement(){
    setValue(value -1)
  }
  function reset(){
    setValue(0)
  }

  return (
    <>
    <div>
      <h1>Count</h1>
      <p>this is a simple count app</p>
      <input type="text"  value={value}/>
    </div>
    <div className='input'>
    <input type='button' value="increse" onClick={increment}/>
    <input type='button' value="reset" onClick={reset}/>
    <input type='button' value="decrese" onClick={decrement}/>
    </div>
    </>
  )
}

export default App