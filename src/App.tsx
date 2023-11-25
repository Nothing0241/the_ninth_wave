import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
var rooms = [
  {
    description: "hello room 1",
  },
  {
    description: "hello room 2"
  }
  ]
function App() {
  const [count, setCount] = useState(0)
  const room =useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Find the treasure</h1>
      <div>
  {rooms[0].description}
   </div>
   <div>
     {rooms[1].description}
     </div>
      <div className="card">
      <button onClick={() => setroom((room) => 1 )}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos 
      </p>
    </>
  )
}

export default App
