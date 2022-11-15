import React from "react";
import './style.css';

function Donation({image,text}){
    return(
                <div className="box-donation">
                    <img src={image} alt={text} />
                    <div className="content">
                        <h4>{text}</h4>
                        <a className="btni text-white">Doar</a>
                    </div>
                </div>
    )
}
export default Donation;