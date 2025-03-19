import { useState } from 'react'

import './App.css'

function App() {
let animal = {
  nome: "Silvino",
  especie: "Marreco",
  Cor: "branco",
  imagem: "https://aventurasnahistoria.com.br/media/uploads/curiosidades/leao.jpg "

}

let animal2 = {
  nome: "Paulinho",
  especie: "Pato",
  Cor: "Preto",
  imagem: "https://i1.sndcdn.com/artworks-i9mDLzfHHOx9F8mQ-D8MRkg-t500x500.jpg"

}

  return (
    <>
  <h1>Nome: {animal.nome}</h1>
  <h2>Espécie: {animal.especie}</h2>
  <h2>Cor: {animal.Cor}</h2>
  <img src={animal.imagem} alt="" height={"300px"} width={"400px"}/>
<br></br>

<h1>Nome: {animal2.nome}</h1>
<h2>Espécie: {animal2.especie}</h2>
<h2>Cor: {animal2.Cor}</h2>
<img src={animal2.imagem} height={"300px"} width={"400px"}></img>

    </>
  )
}

export default App
