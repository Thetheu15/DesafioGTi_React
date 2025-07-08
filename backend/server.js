const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client'); // Importe o PrismaClient

// Carregar variáveis de ambiente do .env
dotenv.config();

const app = express();
const prisma = new PrismaClient(); // Instancie o PrismaClient

// Middlewares
app.use(cors()); // Permite requisições de outras origens (seu frontend)
app.use(express.json()); // Permite que o Express leia JSON do corpo das requisições

// Importar e usar as rotas (você vai criá-las em breve)
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/auth', authRoutes); // Ex: /auth/register, /auth/login
app.use('/users', userRoutes); // Ex: /users/me, /users/:id

// Rota de teste simples
app.get('/', (req, res) => {
  res.send('API Backend do Desafio GTI Engenharia Jr. está funcionando!');
});

const PORT = process.env.PORT || 3000; // Define a porta do servidor, 3000 como padrão

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exporte o prisma para poder usá-lo nos controllers
module.exports = { app, prisma };