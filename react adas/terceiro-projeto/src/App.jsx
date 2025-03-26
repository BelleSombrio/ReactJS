import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CardAnimal from './components/Animal/CardAnimal'
import { BrowserRouter as Router, Rotes, Route } from 'react-router-dom'

import Home from './components/Pages/Home'
import Animais from './components/Pages/Animais'
import sobre from './components/Pages/sobre'



const animais = [
  {
    id: "1",
    specie: "Baleia",
    taxonomy: "Megaptera novaeangliae",
    img: "https://revistapesquisa.fapesp.br/wp-content/uploads/2022/01/SITE_BaleiasJubarte-0-1140.jpg"
  },
  {
    id: "2",
    specie: "Gato",
    taxonomy: "Felis catus",
    img: "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_1200/public/2024-09/gato-preto.jpg.webp?itok=VI-YbRBa"
  }
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <CardAnimal specie={animais[0].specie}
          taxonomy={animais[0].taxonomy}
          img={animais[0].img} />
      </div>
      <br /> <br />
      <div className="container">
        <CardAnimal specie={animais[1].specie}
          taxonomy={animais[1].taxonomy}
          img={animais[1].img} />


        <Router>
          <Route path="/" />
          <Route path="/sobre" />
          <Route path="/animais" />
        </Router>




      </div>
    </>
  )
}

export default App
