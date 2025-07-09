const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

exports.getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId }, 
      select: { id: true, name: true, email: true, bio: true, dataEntrada: true, cursosConcluidos: true, cursosEmProgresso: true }
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar perfil do usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Atualizar dados do próprio usuário logado
exports.updateMe = async (req, res) => {
  const { name, email, bio } = req.body;
  try {
    // Validação básica (pode ser mais robusta)
    if (!name || !email) {
      return res.status(400).json({ message: 'Nome e email são obrigatórios.' });
    }
    // Excluímos campos que não devem ser atualizados diretamente (como dataEntrada, cursos)
    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: { name, email, bio },
      select: { id: true, name: true, email: true, bio: true, dataEntrada: true, cursosConcluidos: true, cursosEmProgresso: true }
    });
    res.status(200).json({ message: 'Perfil atualizado com sucesso!', user: updatedUser });
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Alterar senha do próprio usuário logado
exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    // 1. Validar entrada
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Preencha todos os campos de senha.' });
    }
    if (newPassword.length < 6) { // Exemplo de validação de senha
        return res.status(400).json({ message: 'A nova senha deve ter no mínimo 6 caracteres.' });
    }

    // 2. Encontrar usuário e verificar senha atual
    const user = await prisma.user.findUnique({ where: { id: req.user.userId } });
    if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
      return res.status(400).json({ message: 'Senha atual inválida.' });
    }

  
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);


    await prisma.user.update({
      where: { id: req.user.userId },
      data: { password: hashedNewPassword },
    });

    res.status(200).json({ message: 'Senha alterada com sucesso!' });
  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Rotas de CRUD gerais
// exports.getAllUsers = async (req, res) => { /* ... */ };
// exports.getUserById = async (req, res) => { /* ... */ };
// exports.updateUser = async (req, res) => { /* ... */ };
// exports.deleteUser = async (req, res) => { /* ... */ };