const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Jeton d\'authentification manquant' });
  }

  // Vérifier et décoder le jeton
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Jeton d\'authentification invalide' });
    }
    req.userId = decoded.userId; // Ajouter l'ID de l'utilisateur à la demande
    next();
  });
}

module.exports = authMiddleware;
