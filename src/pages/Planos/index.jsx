import React from "react";
import './style.css';
import Plano from '../../assets/images/planos.svg';
import CardPlano from "../../components/Card-Plano";
import Plano1 from '../../assets/images/bronze.png';
import Plano2 from '../../assets/images/silver.png';
import Plano3 from '../../assets/images/gold.png';

import Check from '../../assets/images/check2.svg';
import X from '../../assets/images/x.svg';
 function Planos(){
    return(
        <div>
            <section className="home" id="home">
                <div className="content">
                    <h3>Planos</h3>
                    <p>Venha fazer parte da Treete.</p>
                </div>
                <div className="image">
                    <img src={Plano} alt="" />
                </div>
            </section>
            <h1 className="heading">Nossos Serviços</h1>
            <div className="row">
                <CardPlano
                image={Plano1}
                plano="Plano Bronze:"
                price="9,90"
                text="Conteúdo exclusivo"
                check={Check}
                text2="Leitura sem ads"
                ximage={X}
                />
                <CardPlano
                image={Plano2}
                plano="Plano Bronze:"
                price="15,90"
                text="Conteúdo exclusivo"
                check={Check}
                text2="Leitura sem ads"
                ximage={X}
                />
                <CardPlano
                image={Plano3}
                plano="Plano Bronze:"
                price="19,90"
                text="Conteúdo exclusivo"
                check={Check}
                text2="Leitura sem ads"
                ximage={Check}
                />
            </div>
        </div>
    )
 }

 export default Planos;