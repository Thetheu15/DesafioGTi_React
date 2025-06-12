import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div 
          className="header_fulano"
        >
          <div className="header">
            <div className="nome_empresa">
              <h1>GameForge Academy</h1>
            </div>
            <div className="botoes">
              <button className="botoes_header">Cursos</button>
              <button className="botoes_header">Quem somos</button>
              <button className="botoes_header">Parceiros</button>
              <button id="botao_login_header">Login</button>
            </div>
          </div>

          <div className="texto_apresentacao">
            <p>Bem-vindo à Gameforge Academy!</p>
            <p>Transforme sua paixão por jogos em habilidades profissionais com nossos cursos de programação, design, 3D e narrativa</p>
            <p>Junte-se à nossa comunidade e construa o seu futuro na indústria de games!</p>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Header;