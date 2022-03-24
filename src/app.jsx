import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Somepage from './pages/Somepage'

import Home from './pages/home/Home'

export default function App() {
  // const [someInput, setSomeInput] = useState('')
  // const [someArray, setSomeArray] = useState([])

  // function clickHandler() {}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        (// put all the paths here)
      </Routes>
    </Router>
  )
}
