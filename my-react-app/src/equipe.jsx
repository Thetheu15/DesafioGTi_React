import React, { Component } from 'react';
import './equipe.css';
import imagemAnya from "./assets/download.jpg";
import imagemKenji from "./assets/67fd2a40512277a04662dd4f_Design sem nome (40).webp";
import imagemDavid from "./assets/download (1).jpg";
import imagemFemi from "./assets/portrait-3157821_640.jpg";

// Importe o componente FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importe os ícones específicos que você vai usar do pacote de marcas
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


class Equipe extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="titulo_equipe">
                    Nossa equipe!
                </p>
                <div className="container_principal_equipe">
                    <div className="equipe">
                        <div className="img_equipe">
                            <img src={imagemAnya} alt="Ms. Anya Sharma" />
                        </div>
                        <div className="descricao_equipe">
                            Ms. Anya Sharma, nossa visionária do Game Design, transforma conceitos criativos em mecânicas envolventes.
                            <div class = "icones_redes_socias_equipe">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                    </div>

                    <div className="equipe">
                        <div className="img_equipe">
                            <img src={imagemKenji} alt="Mr. Kenji Ito" />
                        </div>
                        <div className="descricao_equipe">
                            Mr. Kenji Ito, nosso especialista em Modelagem 3D, ensina a esculpir personagens e cenários impressionantes.
                            <div class = "icones_redes_socias_equipe">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                    </div>

                    <div className="equipe">
                        <div className="img_equipe">
                            <img src={imagemDavid} alt="Mr. David Lee" />
                        </div>
                        <div className="descricao_equipe">
                            <p>
                                Mr. David Lee é o arquiteto de histórias e universos, guiando na criação de narrativas ricas.
                             </p>
                            <div class = "icones_redes_socias_equipe">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                           
                        </div>
                    </div>

                    <div className="equipe">
                        <div className="img_equipe">
                            <img src={imagemFemi} alt="Mr. Femi Adebayo" />
                        </div>
                        <div className="descricao_equipe">
                            <p>
                                Mr. Femi Adebayo, mestre da lógica e códigos, desmistifica algoritmos complexos. Ele te guiará para transformar linhas de código em pura magia interativa.
                            </p>
                            <div class = "icones_redes_socias_equipe">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            
                          
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Equipe;