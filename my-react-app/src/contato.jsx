import React, {Component} from 'react';
import './contato.css';


class Contato extends Component{
    render(){
        return(
            <React.Fragment>
                <div class = "container_principal_contato">
                    <p class = "titulo_contato">Entre em contato</p>
                    <div class = "informacoes">
                    <div class = "informacoes_left">
                        <input class = "input_left" value = "Seu nome"></input>
                        <input class = "input_left" value = "Seu e-mail"></input>
                        <input class = "input_left" value = "Seu telefone"></input>
                    </div>
                    <div class = "informacoes_right">
                        <input class = "mensagem" value = "Mensagem"></input>
                    </div>
                    </div>
                    <div class = "container_botao"><button class = "botao">Enviar</button></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contato;