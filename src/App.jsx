import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Démo CI : le flux des tests !!! Hello !!</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>Chaque push lance le linter et les tests sur GitHub Actions.</p>
    </div>
  )
}

export default App
