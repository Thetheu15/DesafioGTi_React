import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

import "./header.css";


function Header() {
  
  const [menuAberto, setMenuAberto] = useState(false);

  
  const navigate = useNavigate();

  
  const toggleMenu = () => {
    setMenuAberto((prevState) => !prevState);
  };

  
  const handleLoginClick = () => {
    
    console.log('Botão de Login clicado! Tentando navegar para /login...');
    
    navigate('/login');
  };

  return (
    <React.Fragment>
      <div className="header_fulano">
        <div className="header">
          <div className="nome_empresa">
            <h1>GameForge Academy</h1>
          </div>

          {}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuAberto}
          >
            <div className={`bar ${menuAberto ? "open" : ""}`}></div>
            <div className={`bar ${menuAberto ? "open" : ""}`}></div>
            <div className={`bar ${menuAberto ? "open" : ""}`}></div>
          </button>

          {}
          <div className={`botoes ${menuAberto ? "ativo" : ""}`}>
            <button className="botoes_header">Cursos</button>
            <button className="botoes_header">Quem somos</button>
            <button className="botoes_header">Parceiros</button>
            {}
            <button id="botao_login_header" onClick={handleLoginClick}>Login</button>
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

export default Header;
