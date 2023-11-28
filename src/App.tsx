import { useState } from 'react'
import viteLogo from './assets.chest.png'
import './App.css'
var rooms = [
  {
    description: "There is 2 rooms you will spawn in Room 1 and move to Room 2"
  },
  {
    description: "Room 2"
  }
  ]


function App() {
  const [screen,setScreen] = useState(0);
  function changeScreen() {
    if (screen == 0){
      setScreen(1);
    } 
    else if (screen == 1)
    {
      setScreen(0);
    }
  }

  return (
    <>
    <div className='intro'>
      

      <div>
        
          <img src={viteLogo} className="logo logo-spin" alt="Vite logo" />
        
        
      </div>
      { 
        (screen == 0)
        ?
          (<h1>Find the Treasure</h1>)
          : null
      }

      <div className='description'>
        {rooms[screen].description}
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
  