import React from "react";
import './style.css';

function Footer(){
    return(
        <footer>
            <section className="footer">
                <div className="footer-container">
                    <div className="box-footer">
                        <h4>Nossa Missão</h4>
                        <p>
                            Obtenha acesso a um conjunto de ferramentas integradas que preparam você para lidar com qualquer desafio de projeto, agora e no futuro. Use os avançados fluxos de estudo com a Treete, possibilitando por um conjunto abrangente de cursos, vídeos e serviços para aprendizadoo e se manter competitivo no mercado de trabalho.
                        </p>
                    </div>
                    <div className="box-footer">
                        <h4>Cursos mais acessados</h4>
                        <a><i className="fas fa-chevron-right">Pacote Office</i></a>
                        <a><i className="fas fa-chevron-right">Html e Css</i></a>
                        <a><i className="fas fa-chevron-right">Javascript</i></a>
                        <a><i className="fas fa-chevron-right">Java</i></a>
                    </div>
                    <div className="box-footer">
                        <h4>Contate-nos</h4>
                        <a><i className="fas fa-phone">(21) 91111-2222</i></a>
                        <a><i className="fas fa-phone">(21) 1111-2222</i></a>
                        <a><i className="fas fa-envelope">treete@email.com</i></a>
                        <a>
                            <i className="fas fa-map-marker-alt">
                               Praça Sen. Salgado Filho, s/n - Centro, Rio de Janeiro - RJ, 20021-340
                            </i>
                        </a>
                    </div>
                </div>
                <div className="copyright">&copy; 2022 Copyright - Todos os direitos reservados. Treete Tecnologia</div>
            </section>
        </footer>
    )
}

export default Footer;