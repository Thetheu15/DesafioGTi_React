import React, { useState } from "react"; // Importe useState para gerenciar o estado
import { useNavigate } from "react-router-dom"; // Importe useNavigate para a navegação

import "./header.css";

// Convertendo o componente de classe para um componente de função
function Header() {
  // Use useState para gerenciar o estado 'menuAberto'
  const [menuAberto, setMenuAberto] = useState(false);

  // Instancie o hook useNavigate para ter acesso à função de navegação
  const navigate = useNavigate();

  // Função para alternar o estado do menu (para o hambúrguer)
  const toggleMenu = () => {
    setMenuAberto((prevState) => !prevState);
  };

  // Função para lidar com o clique no botão de Login
  const handleLoginClick = () => {
    // Adicione um console.log para verificar se a função está sendo chamada
    console.log('Botão de Login clicado! Tentando navegar para /login...');
    // Use a função navigate para mudar a rota para '/login'
    navigate('/login');
  };

  return (
    <React.Fragment>
      <div className="header_fulano">
        <div className="header">
          <div className="nome_empresa">
            <h1>GameForge Academy</h1>
          </div>

          {/* Botão Hamburger (para mobile) */}
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

          {/* Menu de botões (visível no desktop, condicional no mobile) */}
          <div className={`botoes ${menuAberto ? "ativo" : ""}`}>
            <button className="botoes_header">Cursos</button>
            <button className="botoes_header">Quem somos</button>
            <button className="botoes_header">Parceiros</button>
            {/* Botão de Login: Adicione o onClick para chamar a função de navegação */}
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
