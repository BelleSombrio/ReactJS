import React from 'react'
import "./CardAnimal.css"
function CardAnimal({id, specie, taxonomy, img}) {
    return (
        <>

            <div className="card-animal">
                <div className="img-animal">
                    <img src={img} alt="" />
                </div>

                <div className="info-animal">
                    <div className="specie">{specie}</div>
                    <div className="taxonomy">{taxonomy}</div>
                </div>
            </div>



        </>
    )
}

export default CardAnimal
