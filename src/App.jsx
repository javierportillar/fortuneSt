import { useState } from 'react'
import {Nav} from './components/nav'
import { NavActive } from './components/navActive'

import './App.css'

function App() {
  const [isActive, setActive] = useState(false)

  return (
    <div>
      <Nav isActive={isActive} setActive={setActive}></Nav>
      <NavActive isActive={isActive} setActive={setActive}></NavActive>
    </div>
  )
}

export default App
