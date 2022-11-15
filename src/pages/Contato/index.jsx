import React from "react";
import ContatoImg from "../../assets/images/contato.png";
import './style.css';

function Contato() {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>Contato</h3>
          <p>A Treete preza pela comunicação.</p>
        </div>
        <div className="image">
          <img src={ContatoImg} alt="" />
        </div>
      </section>
      <section className="form-container">
        <form>
            <div className="inputbox">
                <span>Nome:</span>
                <input type="text" placeholder="Digite seu nome" />
                <span>Email:</span>
                <input type="text" placeholder="Digite seu email" />
                <span>Motivo do contato:</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
                <input type="submit" value="Enviar" className="btn"/>
            </div>
        </form>
      </section>
    </div>
  );
}
export default Contato;
