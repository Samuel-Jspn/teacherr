const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  // Vérifiez si le token est présent
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Vérifiez la validité du token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Ajoutez les informations utilisateur décodées à la requête pour une utilisation ultérieure
    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
