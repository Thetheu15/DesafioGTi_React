import React, { Component } from "react";
import "./pagina.css"; // importação correta de CSS
import imagemBlasphemous from './assets/Blasphemous_(video_game).jpg';

// depois, no JSX:
<img src={imagemBlasphemous} alt="Blasphemous" />


class Pagina extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="header_fulano">
            <div class = "header">
            <div class = "nome_empresa">
                <h1>GameForge Academy</h1>
            </div>
            <div class = "botoes">
                <button class = "botoes_header">Cursos</button>
                <button class = "botoes_header">Quem somos</button>
                <button class = "botoes_header">Parceiros</button>
                <button id = "botao_login_header">Login</button>
            </div>
            </div>
            <div>
                <p>Oi</p>
            </div>
        </div>

        <div class = "container_jogos">
            <div class = "jogos">
                <div class = "img_jogo">
                    <img src={imagemBlasphemous} alt="Blasphemous" />
                </div>
                <div class = "img_texto"></div>
            </div>
            <div class = "jogos">
                <div class = "img_jogo"></div>
                <div class = "img_texto"></div>
            </div>
            <div class = "jogos">
                <div class = "img_jogo"></div>
                <div class = "img_texto"></div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Pagina;
