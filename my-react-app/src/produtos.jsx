import React, { Component } from 'react';
import "./produtos.css";

import imagemModelagem3D from "./assets/Bonecos-header-2.webp";
import imagemProgramacao from "./assets/images.jpg";
import imagemDesigner from "./assets/Belas-Artes-Designer-de-games.jpg";

class Produtos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container_principal">
          
          <div className="produtos">
            <div className="img_produtos">
              <img src={imagemModelagem3D} alt="Curso Modelagem 3D" />
            </div>
            <div className="titulo_produtos">
              <h4>Curso de modelagem 3D para jogos!</h4>
            </div>
            <div className="descricao_produtos">
              <p>
                Aprenda modelagem 3D e crie cenários e personagens incríveis para os seus jogos!
              </p>
            </div>
          </div>

          <div className="produtos">
            <div className="img_produtos">
              <img src={imagemProgramacao} alt="Curso Programação" />
            </div>
            <div className="titulo_produtos">
              <h4>Curso de programação para jogos!</h4>
            </div>
            <div className="descricao_produtos">
              <p>
                Dê vida às suas criações com programação e crie jogos incríveis!
              </p>
            </div>
          </div>

          <div className="produtos">
            <div className="img_produtos">
              <img src={imagemDesigner} alt="Curso Designer" />
            </div>
            <div className="titulo_produtos">
              <h4>Curso de designer para jogos!</h4>
            </div>
            <div className="descricao_produtos">
              <p>
                Crie artes incríveis para os seus jogos!
              </p>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Produtos;
