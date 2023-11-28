import { useState } from 'react'

import viteLogo from './assets/chest.png'
import cartoonRoom from './assets/Old Cartoon Room.jpeg'

import './App.css'
var rooms = [
  {
    description: "There is 2 rooms you will spawn in Room 1 and move to Room 2"
  },
  {
    description: "Room 1 - Level 1"
  },
  {
    description: "How do you get out of this room without dying?"
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
      setScreen(2);
    }
  }

  return 
    <div className='intro'>
    

      <div>
        
      { (screen == 1) ?
      (
        <img src={viteLogo} className="logo logo-spin" alt="Vite logo" />
      ) : null
      }

      { (screen == 1) ?
        (
          <img src={cartoonRoom} className="logo" alt="Cartoon Room" />
        ) : null 
      } 
        
        
        
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
         { (screen == 0 ) ?
          <div className="card">
          <button onClick={() => changeScreen()}>
              Play now! 
            </button>
          </div>
          : null 
         }

      { (screen == 1) ?
          <div className="card">
            <button onClick={() => changeScreen('A')}>
              Option A!
            </button>
            <button onClick={() => changeScreen('B')}>
              Option B!
            </button>
          </div>
          : null
      }
         
     <p className="read-the-docs">

     </p> 


