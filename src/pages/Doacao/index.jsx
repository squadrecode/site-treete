import React from "react";
import { Link } from "react-router-dom";
import Donation from "../../components/Donation";
import DoacaoImg from "../../assets/images/doacao.svg";
import Infraestrutura from "../../assets/images/infraestrutura.jpg";
import Notebook from "../../assets/images/notebook.jpg";
import Wifi from "../../assets/images/wifi.jpg";
import Celular from "../../assets/images/celular.jpeg";
import Credito from "../../assets/images/credito.jpg";
import Livro from "../../assets/images/livro.jpeg";
import "./style.css";

function Doacao() {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>Doação</h3>
          <p>Doar é um ato de amor.</p>
        </div>
        <div className="image">
          <img src={DoacaoImg} alt="" />
        </div>
      </section>
      <section className="doacao">
        <div className="container3">
        <Donation
        image={Infraestrutura}
        text="Doar para infraestruturas, um melhor acesso no campo."
        />
        <Donation
        image={Notebook}
        text="Notebooks para os alunos ter um melhor desempenho."
        />
        <Donation
        image={Wifi}
        text="Doe para novas instalações de wifi para casa e escola."
        />
        <div className="container3">
        <Donation
        image={Celular}
        text="Doar para os alunos adquirir aparelhos celulares integrados com a escola."
        />
        <Donation
        image={Credito}
        text="Doar para recarga de celular."
        />
        <Donation
        image={Livro}
        text="Doar para novos livros para os alunos."
        />
        </div>
        </div>
      </section>
    </div>
  );
}

export default Doacao;
