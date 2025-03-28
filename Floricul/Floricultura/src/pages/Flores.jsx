import React, { useEffect, useState } from 'react'
import CardProduto from '../components/CardProduto'
import axios from 'axios'
import "./Flores.css"


export default function Flores() {
    const [flores, setFlores] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/flores')
            .then(response => setFlores(response.data))
    }, []);


    return (
        <div>
            <div className="listaFlores">
                {flores.length === 0 ?
                    (<p>Carregando Produtos</p>) :
                    flores.map(flores =>
                        <CardProduto
                            key={flores.id}
                            img={flores.image}
                            nome={flores.name}
                            preco={flores.nome}
                            cor={flores.cor}
                            descricao={flores.descricao}
                        />)}
            </div>
        </div>
    )
}
