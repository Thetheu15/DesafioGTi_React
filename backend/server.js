const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client'); 

dotenv.config();

const app = express();
const prisma = new PrismaClient(); 

app.use(cors()); 
app.use(express.json()); 

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/auth', authRoutes); 
app.use('/users', userRoutes); 

app.get('/', (req, res) => {
  res.send('API Backend do Desafio GTI Engenharia Jr. está funcionando!');
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = { app, prisma };