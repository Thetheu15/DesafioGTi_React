import React, { Component } from 'react';
import './linha_do_tempo.css';

import imagem1 from './assets/Gemini_Generated_Image_ixeh8aixeh8aixeh.png';
import imagem2 from './assets/Gemini_Generated_Image_fw52e8fw52e8fw52.png';
import imagem3 from './assets/dois-empresarios-felizes-apertando-as-maos-em-uma-reuniao-enquanto-outros-colegas-os-aplaudem-no-escritorio-1-scaled.jpg';

class Linha_do_tempo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container_principal_linha_do_tempo">
                    <p className="cabecalho_linha_do_tempo">Sua jornada na GameForge Academy!</p>
                    <div className="timeline-wrapper">
                        <div className="timeline-axis"></div>

                        <div className="timeline-item-new content-right-new">
                            <div className="imagem_redonda-new">
                                <img className="imagens_linha_do_tempo" src={imagem1} alt="Estudante estudando" />
                                <div className="timeline-dot-new"></div>
                            </div>
                            <div className="texto-new">
                                Inicie seus estudos com um conteúdo moderno e feito por profissionais que atuam no mercado de jogos eletrônicos!
                            </div>
                        </div>

                        <div className="timeline-item-new content-left-new">
                            <div className="texto-new">
                                Tenha experiência com desenvolvimento trabalhando em projetos com outros alunos. Sinta-se no ambiente trabalho!
                            </div>
                            <div className="imagem_redonda-new">
                                <img className="imagens_linha_do_tempo" src={imagem2} alt="Pessoas trabalhando em computadores" />

                                <div className="timeline-dot-new"></div>
                            </div>
                        </div>

                        <div className="timeline-item-new content-right-new">
                            <div className="imagem_redonda-new">
                                <img className="imagens_linha_do_tempo" src={imagem3} alt="Empresários apertando as mãos" />

                                <div className="timeline-dot-new"></div>
                            </div>
                            <div className="texto-new">
                                Garantimos a sua vaga de emprego ou devolvemos o seu dinheiro de volta!
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Linha_do_tempo;