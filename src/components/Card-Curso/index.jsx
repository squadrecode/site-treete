import React from "react";
import './style.css';

function CardCurso({image,name,nivel,text}){
    return(
        <div className="box-prof">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <span>{nivel}</span>
            <p>{text}</p>
            <button class="btni">Saiba mais</button>
        </div>
    )
}
export default CardCurso;