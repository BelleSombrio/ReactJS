import { useState } from 'react'
import './App.css'
import Musica from './components/musica/musica'
import axios from 'axios'

function App() {

  const [musicas, setMusica] = useState([])

  const pegarUmaMusica = () => {
    axios.get("http://localhost:3000/Musica/").then(response => {
      setMusica(response.data)

      musicas.forEach(Musica => console.log(Musica))
    })

    .catch(error => {
      console.error("Erro ao bujscar as músicas", error)
    })
  }

  return (
    <>
     <button onClick={pegarUmaMusica}>Pegar uma música</button>
      
      {/* Renderizando as músicas */}
      {musicas.length > 0 ? (
        <div>
          {musicas.map((musica, index) => (
            <Musica key={index} dados={musica} />
          ))}
        </div>
      ) : (
        <p>Não há músicas para exibir</p> // Mensagem caso não haja músicas
      )}
    </>
  )
}

export default App
