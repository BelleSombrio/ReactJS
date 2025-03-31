import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Flores from "./pages/Flores"
import About from "./pages/About"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <p>💐</p>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/flores">Flores</a>
              </li>
              <li>
                <a href="/about">Sobre</a>
              </li>
            </ul>
          </nav>
        </header>
        <Router>
          <Routes>
<Route path="/" Component={Home}></Route>
<Route path="/flores" Component={Flores}></Route>
<Route path="/about" Component={About}></Route>
          </Routes>
        </Router>




      </div>
    </>
  )
}

export default App
