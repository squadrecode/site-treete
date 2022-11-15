import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import Curso from '../../assets/images/cursos.svg';
import Curso1 from '../../assets/images/cardcurso1.png';
import Curso2 from '../../assets/images/cardcurso2.png';
import Curso3 from '../../assets/images/cardcurso3.png';
import CardCurso from "../../components/Card-Curso";



function Cursos(){
    return(
        <div>
            <section className="home" id="home">
                <div className="content">
                    <h3>Cursos</h3>
                    <p>Abaixo a lista de cursos.</p>
                </div>
                <div className="image">
                    <img src={Curso} alt="" />
                </div>
            </section>
            <section className="prof">
                <CardCurso
                image={Curso1}
                name="Pacote Office"
                nivel="iniciante"
                text="Neste curso online, os estudantes poderão aprender e entender melhor o office. Curso de aperfeiçoamento profissional que tem como objetivo desenvolver competências relacionadas ao Pacote Office."
                />
                <CardCurso
                image={Curso2}
                name="Programação Básica em HTML"
                nivel="iniciante"
                text="Neste curso online de HTML os estudantes poderão aprender e entender melhor como funciona a
                linguagem HTML. O curso conta com 21 aulas em alta definição.
                Introdução leve e básica ao HTML, de forma bastante interativa, recomendada para quem não sabe
                nada de HTML."
                />
                <CardCurso
                image={Curso3}
                name="Programação CSS"
                nivel="iniciante"
                text="Neste curso online de CSS os estudantes poderão aprender e entender melhor como funciona a
                linguagem CSS.
                O CSS define como serão exibidos os elementos contidos no código de uma página da internet e sua
                maior vantagem é efetuar a separação entre o formato e o conteúdo de um documento."
                />
            </section>
        </div>
    )
}

export default Cursos;