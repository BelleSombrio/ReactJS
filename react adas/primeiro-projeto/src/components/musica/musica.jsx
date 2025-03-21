import React from 'react'

export default function Musica({dados}) {
    return (
        <>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>{dados.titulo}</p>
                    <p>{dados.artista}</p>
                    <p>{dados.visualizacoes}</p>
                </div>
            </div>
        </>
    )
}

