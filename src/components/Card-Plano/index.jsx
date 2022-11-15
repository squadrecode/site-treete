import React from "react";
import Card from 'react-bootstrap/Card';
import './style.css';

function CardPlano({check,image,text,text2,plano,price,ximage}){
    return(
        <div className="card cards-style">
            <img src={image} alt={plano} />
            <table>
                <tbody>
                    <tr>
                        <th scope="row" colSpan="3">{plano}</th>
                        <td className="negrito">R${price}</td>
                    </tr>
                    <tr>
                        <th scope="row" colSpan="3">{text}</th>
                        <td><img src={check} alt={plano} /></td>
                    </tr>
                    <tr>
                        <th scope="row" colSpan="3">{text2}</th>
                        <td><img src={ximage} alt=""/></td>
                    </tr>
                </tbody>
            </table>
            <a className="btn text-white">Assinar</a>
        </div>
    )
}
export default CardPlano;