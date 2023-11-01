import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h1>Back Ground Color Change:</h1>
      <input type='color' onChange={
        (e)=>(
         document.body.style.background=e.target.value
        )
      }/>
    </div>
  )
}

export default App