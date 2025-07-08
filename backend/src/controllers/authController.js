const { PrismaClient } = require('@prisma/client'); // Ou importe 'prisma' do server.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient(); // Instancie o PrismaClient aqui ou passe ele como argumento

exports.register = async (req, res) => {
  const { name, email, password, bio } = req.body;
  try {
    // 1. Validar entrada (simplificado)
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email já registrado.' });
    }

    // 2. Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Criar usuário no DB
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        bio: bio || null, // bio é opcional
        dataEntrada: new Date(),
        cursosConcluidos: [], // Inicializa como array vazio
        cursosEmProgresso: [], // Inicializa como array vazio
      },
      select: { id: true, name: true, email: true, bio: true, dataEntrada: true }, // Não retorne a senha
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // 1. Validar entrada
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    // 2. Encontrar usuário
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    // 3. Comparar senhas
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    // 4. Gerar token JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token válido por 1 hora
    );

    res.status(200).json({ message: 'Login bem-sucedido!', token, userId: user.id });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};