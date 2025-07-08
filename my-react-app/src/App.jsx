import React, { useState, useEffect } from 'react'; // Importe useState e useEffect
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Importar seus componentes (ajuste os caminhos conforme sua estrutura de pastas)
import HomePage from './HomePage.jsx'; // Sua página inicial que contém Header, Produtos, etc.
import Login from './login.jsx';       // Seu componente de Login
import MinhaConta from './MinhaConta.jsx'; // Seu componente de Minha Conta
import Cadastro from './cadastro.jsx';   // Seu componente de Cadastro

// Você pode criar um componente AuthWrapper para proteger rotas
// ou integrar a lógica diretamente aqui no App.js para rotas mais simples.
// Vamos criar um componente simples para proteger rotas.

// Componente para rotas protegidas
const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken'); // Verifica se há um token

    useEffect(() => {
        if (!token) {
            // Se não houver token, redireciona para a página de login
            navigate('/login');
        }
    }, [token, navigate]);

    // Renderiza os filhos (componente da rota protegida) apenas se houver token
    return token ? children : null;
};

function App() {
  // Estado para controlar se o Header deve ser exibido
  // Normalmente, o Header é exibido em todas as páginas, mas você mencionou
  // "a homepage deve fechar". A forma mais comum de "fechar" é simplesmente
  // navegar para outra rota que não inclui o Header como parte de sua estrutura.
  // No entanto, se o Header for global, ele sempre estará lá.
  // Vamos usar o exemplo mais comum: Header está SEMPRE lá,
  // mas as rotas mudam o CONTEÚDO abaixo dele.

  // Se você realmente quiser esconder o Header na página de Login/Cadastro/MinhaConta,
  // a lógica é mais complexa ou você renderiza o Header dentro da HomePage APENAS.
  // Vamos seguir a abordagem de ter o Header global e as rotas alterando o conteúdo.

  return (
    <Router>
      {/* O Header é renderizado fora das rotas. Ele sempre estará visível.
          Se você quiser que ele SUMA em certas rotas (login, cadastro),
          você teria que passar o estado da rota para ele ou renderizá-lo
          condicionalmente DENTRO das rotas.
          Para este cenário, vamos manter o Header separado e as rotas
          controlam o conteúdo principal. */}
      {/* <Header /> */} {/* REMOVA ISSO SE VOCÊ QUER O HEADER APENAS NA HOMEPAGE */}

      <Routes>
        {/* Rota para a Página Inicial */}
        <Route path="/" element={<HomePage />} /> {/* Sua página inicial COMPLETA */}

        {/* Rota para a Página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Rota para a Página de Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota para a Página "Minha Conta" (Protegida) */}
        {/* Usamos PrivateRoute para garantir que só usuários logados acessem */}
        <Route
          path="/minha-conta"
          element={
            <PrivateRoute>
              <MinhaConta />
            </PrivateRoute>
          }
        />

        {/* Adicione outras rotas aqui */}
        {/* <Route path="/cursos" element={<CursosPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;