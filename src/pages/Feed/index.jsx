import React from "react";
import { Link } from "react-router-dom";
import FeedImg from "../../assets/images/feed.svg";

function Feed() {
  return (
    <div>
      <section className="home" id="home">
        <div className="image">
          <img src={FeedImg} alt="" />
        </div>
        <div className="content">
          <h3>Feed</h3>
          <p>Acesse os nossos vídeos e ganhe Treets.</p>
        </div>
      </section>
      <h1 className="heading">Conteúdos</h1>
      <div class="row">
        <div class="col-md-7">
          <div class="card text-center">
            <div class="card-header embed-responsive embed-responsive-21by9">
              <iframe
                className="img-fluid"
                width="470"
                height="255"
                src="https://www.youtube.com/embed/-0uAI2r3CWs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="card-body">
              <h5 class="card-title">Programação em HTML</h5>
              <p class="card-text">
                Uma página de website contém algumas tags principais que compõem
                o que chamamos de documentos HTML, que é tudo o que está entre
                as tags html. Tudo o que está dentro dessa tag faz parte do
                documento.
              </p>
            </div>
            <a href="#" class="btni">
              Receber 100 Treets
            </a>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <br />
          <br />
          <br />
          <br /> <br />
          <h5> Sugerir-um-Conteúdo</h5>
          <p>
            Entre em <a href="contato.html">Contato</a> e sugira um conteúdo.
          </p>
          <button class="btn btn-primary">Sugerir Conteúdo</button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div class="col-md-7 espaçofeed">
          <div class="card text-center">
            <div class="card-header embed-responsive embed-responsive-21by9">
              <iframe
                className="img-fluid embed-responsive-item"
                width="470"
                height="255"
                src="https://www.youtube.com/embed/CTjUpZqTJDg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="card-body">
              <h5 class="card-title">Estilização com CSS</h5>
              <p class="card-text">
                O Cascading Style Sheets (CSS) é uma "folha de estilo" composta
                por “camadas” e utilização para definir a apresentação
                (aparência) em páginas da internet que adotam o desenvolvimento
                de linguagens de marcação (como XML, HTML e XHTML). O CSS define
                como serão exibidos os elementos contidos no código de uma
                página da internet e sua maior vantagem é efetuar a separação
                entre o formato e o conteúdo de um documento.{" "}
              </p>
            </div>
            <a href="#" class="btni">
              Receber 100 Treets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
