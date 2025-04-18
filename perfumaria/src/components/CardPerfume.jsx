import React from 'react'
import { useNavigate } from 'react-router-dom'

import './CardPerfume.css'


export default function CardPerfume({id,nome,preco,imagem}) {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/perfume/'+id)
    }

  return (
    <div className='card-perfume' onClick={handleClick}>
        
        <div className="image">
            <img src={imagem} alt=""  />
        </div>
        
        <div className="infos">
            <p className="nome">{nome.toLowerCase()}</p>
            <p className="preco">{preco}</p>
        </div>
    
    </div>
  )
}
