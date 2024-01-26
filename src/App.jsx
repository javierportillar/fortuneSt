import { useState } from 'react'
import {Nav} from './components/nav'
import {MainLanding} from './components/mainLanding'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <div>
     <Nav></Nav>
      <MainLanding></MainLanding>
    </div>
  )
}

export default App
