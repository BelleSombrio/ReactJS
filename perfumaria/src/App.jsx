import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Produtos from './pages/Produtos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Perfume from './pages/Perfume';

function App() {


  return (
    <>
      <div className="container">
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/perfume/:id' element={<Perfume />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
