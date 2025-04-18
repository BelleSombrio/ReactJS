import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Perfume.css'

export default function Perfume() {
    const [perfume, setPerfume] = useState()
    const { id } = useParams()
    const [fundo, setFundo] = useState()


    useEffect(() => {
        try {
            axios.get('http://localhost:3000/perfumes/' + id)
                .then(response => {
                    setPerfume(response.data)
                    setFundo(response.data.tipo)

                })

        } catch (error) {
            console.log(error)
        }


    }, [])


    if (!perfume) return <div>Carregando...</div>

    return (
        <div className={"container-perfume " + fundo} >
            
            <div className='img-perfume'>
                <img src={perfume.imagem} alt="" />
            </div>


            <div className='infos'>
                <div className='dados1'>
                    <h2>{perfume.nome}</h2>
                    <p className='paragrafo'>Descrição: {perfume.descricao}</p>
                    <p className='paragrafo notas'>Notas Aromáticas: {perfume.notasAromaticas}</p>
                </div>

                <div className='dados2'>
                    <p>{perfume.preco}</p>
                </div>
                <div className='botao'>
                    <button>Comprar</button>
                </div>
            </div>
        </div>

    )
}
