import React, { Component } from "react";
import "./projetos.css";
import imagemBlasphemous from "./assets/Blasphemous_(video_game).jpg";
import imagemDantes from "./assets/MV5BMjJjNmM0ZDEtMTA4YS00ZGJiLWI2YTUtNDY0MmUzNGE0YzJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
import imagemZelda from "./assets/poster-the-legend-of-zelda-tears-of-the-kingdom-a-5d718770.webp";

class Projetos extends Component {
  render() {
    return (
      <React.Fragment>
            <p className = "titulo">
                Um pouco do que os nossos alunos já fizeram! 
            </p>
        <div className="container_jogos">
          <div className="jogos">
            <div className="img_jogo">
              <img src={imagemBlasphemous} alt="Blasphemous" />
            </div>
            <div className="img_texto">
              <p className="texto_img">
                Blasphemous é um jogo de ação em estilo metroidvania com temática sombria e religiosa. O jogador controla o Penitente em uma jornada por Cvstodia, enfrentando monstros e expiando pecados. O jogo se destaca pela arte em pixel detalhada e ambientação inspirada no folclore e na iconografia espanhola.
              </p>
            </div>
          </div>

          <div className="jogos">
            <div className="img_jogo">
              <img src={imagemDantes} alt="Dante's Inferno" />
            </div>
            <div className="img_texto">
              <p className="texto_img">
                Dante's Inferno é um jogo de ação e aventura inspirado na obra "A Divina Comédia", de Dante Alighieri. O jogador assume o papel de Dante, que desce aos nove círculos do inferno para resgatar a alma de sua amada. Com combates intensos e cenários grotescos, o jogo explora temas de culpa, pecado e redenção.
              </p>
            </div>
          </div>

          <div className="jogos">
            <div className="img_jogo">
              <img src={imagemZelda} alt="The Legend of Zelda: Tears of the Kingdom" />
            </div>
            <div className="img_texto">
              <p className="texto_img">
                The Legend of Zelda: Tears of the Kingdom é um jogo de ação e aventura em mundo aberto. Link explora terras e céus de Hyrule para enfrentar uma nova ameaça e desvendar mistérios antigos. O jogo traz novas mecânicas que ampliam a criatividade e a liberdade do jogador.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projetos;