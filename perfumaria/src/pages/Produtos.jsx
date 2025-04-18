import React, { useEffect, useState } from 'react'
import CardPerfume from '../components/CardPerfume'
import axios from 'axios'
import './Produtos.css'

export default function Produtos() {
    const [perfumes, setPerfumes] = useState([])

    useEffect(()=>{
        try{
            axios.get("http://localhost:3000/perfumes")
            .then(response => {
                setPerfumes(response.data)
            })
        }catch(error){
            console.log(error)
        }
       
    },[])


  return (
    <div className='container'>
       
        {(perfumes) ? (
            perfumes.map((perfume, index)=>
            <CardPerfume 
                key={index}
                id={perfume.id} 
                nome={perfume.nome} 
                preco={perfume.preco}
                imagem={perfume.imagem}
            />
        )):(
            <p>Carregando...</p>
        )}
    </div>
  )
}
