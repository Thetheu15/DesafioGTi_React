import React, { Component } from 'react';
import './contato.css';

class Contato extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container_principal_contato">
          <p className="titulo_contato">Entre em contato</p>
          <div className="informacoes">
            <div className="informacoes_left">
              <input className="input_left" placeholder="Seu nome" />
              <input className="input_left" placeholder="Seu e-mail" />
              <input className="input_left" placeholder="Seu telefone" />
            </div>
            <div className="informacoes_right">
              <textarea className="mensagem" placeholder="Mensagem"></textarea>
            </div>
          </div>
          <div className="container_botao">
            <button className="botao">Enviar</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contato;
