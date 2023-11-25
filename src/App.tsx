import { useState } from 'react'

import viteLogo from './assets/chest.png'
import './App.css'
var rooms = [
  {
    description: "There is 2 rooms you will spawn in Room 1 and move to Room 2"
  },
  {
    description: "Room 2"
  }
  ]

function changeScreen() {
alert('Change screen')
}

function App() {

  return (
    <>
    <div className='intro'>
      
      <div>
        
          <img src={viteLogo} className="logo logo-spin" alt="Vite logo" />
        
        
      </div>
      <h1>Find the Treasure</h1>
      <div className='description'>
        {rooms[0].description}
      </div>
      
          <div className="card">
          <button onClick={() => changeScreen()}>

              Play now! 
            </button>
            <p>
            </p>
          </div>
          <p className="read-the-docs">

          </p>
          </div>
    </>
  )
}

export default App
