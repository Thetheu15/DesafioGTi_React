import React, { Component } from 'react';
import './footer.css'

import instagramVetor from "./assets/14414683-logotipo-preto-do-instagram-em-fundo-transparente-gratis-vetor.jpg"
import xVetor from "./assets/novo-vetor-do-logotipo-do-twitter-x_768467-92.avif"
import youtubeVetor from "./assets/8385631-youtube-social-media-icon-logo-symbol-design-vector-illustration-gratis-vetor.jpg"
import linkedinVetor from "./assets/27654482-linkedin-glifo-icone-para-pessoal-e-comercial-usar-gratis-vetor.jpg"

class Footer extends Component{
    render(){
        return (
            <React.Fragment>
                <div class = "container_principal_footer">
                    <div class = "sub_container_principal_footer">
                    <div class = "container1">
                        <div><p class = "nome_empresa_footer">GameForge Academy</p></div>
                        <div class = "icones_footer">
                            <img class = "img_icones_footer" src={xVetor}></img>
                            <img class = "img_icones_footer" src={instagramVetor}></img>
                            <img class = "img_icones_footer" src={youtubeVetor}></img>
                            <img class = "img_icones_footer" src={linkedinVetor}></img>
                        </div>
                    </div>
                    <div class = "container2">
                        <h5>Informações legais</h5>
                        <a>Politica de privacidade</a>
                        <a>Termos de uso</a>
                        <a>Politica de cookies</a>                        
                    </div>
                    <div class = "container3">
                        <h5>Explore</h5>
                        <a>Sobre nós</a>
                        <a>Cursos</a>
                        <a>Instrutores</a>
                        <a>Projetos de alunos</a>                          
                    </div>
                    </div>
                    <div class = "direitos_footer"><h4>© 2025 Gameforge Academy. Todos os direitos reservados.</h4></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;