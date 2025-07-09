import React from 'react';
import Header from "./header.jsx";
import Produtos from "./produtos.jsx";
import Projetos from "./projetos.jsx";
import Linha_do_tempo from "./linha_do_tempo.jsx";
import Equipe from "./equipe.jsx";
import Apoiadores from "./apoiadores.jsx";
import Contato from "./contato.jsx";
import Footer from "./footer.jsx"; 
import "./home.css"

function HomePage() {
  return (
    <React.Fragment>
      <Header /> 
      <Produtos />
      <Projetos />
      <Linha_do_tempo />
      <Equipe />
      <Apoiadores />
      <Contato />
      <Footer /> 
    </React.Fragment>
  );
}

export default HomePage;