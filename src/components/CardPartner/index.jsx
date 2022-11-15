import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function CardPartner({ image, name, link,github, text }) {
  return (
    <div className="partner-card">
      <img className="mx-auto d-block" src={image} alt="" />
      <div className="description">
        <h3>{name}</h3>
        <p>{text}</p>
        <div className="share">
                <a href="/" className="fas fa-light fa-link"></a>
        </div>
      </div>
    </div>
  );
}
export default CardPartner;
