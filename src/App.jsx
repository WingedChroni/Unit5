import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Homepage from './Components/Pages/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Homepage />
      
    </div>
  )
}

export default App
