const { PrismaClient } = require('@prisma/client'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient(); 

exports.register = async (req, res) => {
  const { name, email, password, bio } = req.body;
  try {
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email já registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        bio: bio || null, 
        dataEntrada: new Date(),
        cursosConcluidos: [], 
        cursosEmProgresso: [], 
      },
      select: { id: true, name: true, email: true, bio: true, dataEntrada: true }, 
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
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    res.status(200).json({ message: 'Login bem-sucedido!', token, userId: user.id });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};