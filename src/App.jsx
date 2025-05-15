import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button id="counterButton" onClick={() => setCount((count) => count + 123456789)}>
          Count now 
        </button>
        
        <p id = "countText">You clicked {count} times</p>

        <p id = "lindos">
          Olá meus amigos, tudo bem?
        </p>
      </div>
    </>
  )
}

export default App
