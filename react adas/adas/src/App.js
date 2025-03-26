import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import CardAnimal from './components/CardAnimal';

function App() {
  const [Animal, setNome] = useState("Ganso")

  const mudarNomeHandler = () => {
    setNome("Vaca")
  }

  return (
    <div className="App">
      <h1>Nome: {Animal}</h1>
      <button onClick={mudarNomeHandler}>Mudar o valor do animal!</button>
      <CardAnimal />

    </div>
  );
}

export default App;
