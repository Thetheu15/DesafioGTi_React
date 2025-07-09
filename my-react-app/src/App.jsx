import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import HomePage from './HomePage.jsx'; 
import Login from './login.jsx';       
import MinhaConta from './MinhaConta.jsx'; 
import Cadastro from './cadastro.jsx';   


const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken'); 

    useEffect(() => {
        if (!token) {
          
            navigate('/login');
        }
    }, [token, navigate]);


    return token ? children : null;
};

function App() {


  return (
    <Router>
      {}
      {} {}

      <Routes>
        {}
        <Route path="/" element={<HomePage />} /> {}

        {}
        <Route path="/login" element={<Login />} />

        {}
        <Route path="/cadastro" element={<Cadastro />} />

        {}
        {}
        <Route
          path="/minha-conta"
          element={
            <PrivateRoute>
              <MinhaConta />
            </PrivateRoute>
          }
        />

        {}
        {}
      </Routes>
    </Router>
  );
}

export default App;