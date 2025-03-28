import React from 'react'
import "./CardProduto.css"



export default function CardProduto({img, nome,cor, preco,descricao}) {
  return (
    <div ClassName="card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="infos">
        <p className="nome"> {nome}</p>
        <p className="preco"> {preco}</p>
        <button className="btn">Comprar</button>
      </div>
    </div>
  )
}
