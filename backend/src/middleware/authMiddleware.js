const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Obter o token do cabeçalho de autorização
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido ou formato inválido.' });
  }

  const token = authHeader.split(' ')[1]; // Extrai o token após "Bearer "

  try {
    // Verificar e decodificar o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Anexar os dados do usuário decodificados à requisição
    req.user = decoded;
    next(); // Continuar para o próximo middleware/rota
  } catch (error) {
    console.error('Erro na verificação do token:', error);
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};