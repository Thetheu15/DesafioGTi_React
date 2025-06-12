import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./header.jsx";
import Projetos from "./projetos.jsx";
import Produtos from "./produtos.jsx";
import Equipe from "./equipe.jsx";
import Apoiadores from "./apoiadores.jsx";
import Contato from "./contato.jsx"
import Footer from "./footer.jsx";
import Linha_do_tempo from "./linha_do_tempo.jsx";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.Fragment>
    <Header />,
    <Produtos />,
    <Projetos />,
    <Linha_do_tempo />,
    <Equipe />,
    <Apoiadores />,
    <Contato />,
    <Footer />
  </React.Fragment>
);