import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { StartingPage } from './StartingPage/StartingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StartingPage></StartingPage>
  )
}

export default App
