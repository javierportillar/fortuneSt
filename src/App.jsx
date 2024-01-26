import { useState } from 'react'
import {Nav} from './components/nav'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav></Nav>
    </div>
  )
}

export default App
