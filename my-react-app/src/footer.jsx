import React, { Component } from 'react';
import './footer.css';

import instagramVetor from "./assets/14414683-logotipo-preto-do-instagram-em-fundo-transparente-gratis-vetor.jpg";
import xVetor from "./assets/novo-vetor-do-logotipo-do-twitter-x_768467-92.avif";
import youtubeVetor from "./assets/8385631-youtube-social-media-icon-logo-symbol-design-vector-illustration-gratis-vetor.jpg";
import linkedinVetor from "./assets/27654482-linkedin-glifo-icone-para-pessoal-e-comercial-usar-gratis-vetor.jpg";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container_principal_footer">
          <div className="sub_container_principal_footer">
            <div className="container1">
              <div><p className="nome_empresa_footer">GameForge Academy</p></div>
              <div className="icones_footer">
                <img className="img_icones_footer" src={xVetor} alt="X logo" />
                <img className="img_icones_footer" src={instagramVetor} alt="Instagram logo" />
                <img className="img_icones_footer" src={youtubeVetor} alt="YouTube logo" />
                <img className="img_icones_footer" src={linkedinVetor} alt="LinkedIn logo" />
              </div>
            </div>
            <div className="container2">
              <h5>Informações legais</h5>
              <a href="#">Política de privacidade</a>
              <a href="#">Termos de uso</a>
              <a href="#">Política de cookies</a>
            </div>
            <div className="container3">
              <h5>Explore</h5>
              <a href="#">Sobre nós</a>
              <a href="#">Cursos</a>
              <a href="#">Instrutores</a>
              <a href="#">Projetos de alunos</a>
            </div>
          </div>
          <div className="direitos_footer">
            <h4>© 2025 Gameforge Academy. Todos os direitos reservados.</h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
