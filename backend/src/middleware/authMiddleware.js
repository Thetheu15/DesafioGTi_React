const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido ou formato inválido.' });
  }

  const token = authHeader.split(' ')[1];

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Erro na verificação do token:', error);
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};