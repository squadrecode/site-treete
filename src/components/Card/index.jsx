import React from "react";
import './style.css';

function Card({image,name,profissao,text}){
    return(
        <div className="box-prof">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <span>{profissao}</span>
            <p>{text}</p>
            <div className="share">
                <a href="/" className="fab fa-brands fa-github"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="/" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
            </div>
        </div>
    )
}
export default Card;