import React from "react";
import './style.css';
import HomeImg from '../../assets/images/home.svg';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.png';
import Image4 from '../../assets/images/4.png';
import Image6 from '../../assets/images/6.png';
import Itau from '../../assets/images/itau.png';
import Objetivo from '../../assets/images/objetivo-logo.jpg';
import Colegio from '../../assets/images/colegio-adventista.png'
import Card from "../../components/Card";
import CardPartner from "../../components/CardPartner";


function Home(){
    return(
        <div>
            <section className="home" id="home">
                <div className="image">
                    <img src={HomeImg} alt="" />
                </div>
                <div className="content">
                <h3>Acesso a equipamentos e pacotes de dados de internet para possibilitar o estudo de alunos em vulnerabilidade social!</h3>
                <a href="/" className="btni">Saiba mais</a>
                </div>
            </section>
            <h1 className="heading">Nossos Professores</h1>
            <section className="prof">
                <Card
                image={Image4}
                name="Ana Julia"
                profissao="ux/ui designer"
                text="Você aprenderá como projetar interfaces amigáveis para ambientes digitais com foco na experiência do usuário e criar designs incríveis e eficientes para navegação. Torne-se um Designer que entende as necessidades do seu público, traga soluções visuais inovadoras para o usuário e ótimos resultados para os negócios.."
                />
                <Card
                image={Image2}
                name="João Silva"
                profissao="banco de dados"
                text="Banco de dados é a organização e armazenagem de informações sobre um domínio específico. De forma mais simples, é o agrupamento de dados que tratam do mesmo assunto, e que precisam ser armazenados para segurança ou conferência futura. Venha conhecer na prática!"
                />
                <Card
                image={Image3}
                name="Clara Mendes"
                profissao="ciência da computação"
                text="Ciência da Computação é a área do conhecimento que atua no desenvolvimento de programas para diferentes dispositivos, a exemplo de celulares e computadores.
                Se você tem interesse em ciências exatas e programação, esse curso pode ser a sua opção."
                />
                <Card
                image={Image6}
                name="Alex Santos"
                profissao="engenharia da computação"
                text="O engenheiro da computação é aquele que projeta e cria hardwares e softwares, ou seja, os equipamentos digitais físicos (como computadores, smartphones, tablets, entre outros) e os sistemas e programas utilizados neles, respectivamente.
                Este profissional também pode atuar no gerenciamento da automação de máquinas, como máquinas industriais, o que também o coloca à frente na atuação em robótica."
                />
            </section>
            <h1 className="heading">Empresas Parceiras</h1>
            <section className="box-partner">
                <CardPartner
                name="Colégio Adventista"
                image={Colegio}
                text="Educação"
                />
                <CardPartner
                name="Leia para uma criança"
                image={Itau}
                text="Itau"
                />
                <CardPartner
                name="Colégio Objetivo"
                image={Objetivo}
                text="Educação"
                />
            </section>

        </div>
    )
}

export default Home;