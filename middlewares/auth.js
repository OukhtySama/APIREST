const jwt = require('jsonwebtoken');
const SECRET_KEY = 'allan';

// Fonction pour générer un token JWT en utilisant l'ID de l'utilisateur
function generateToken(userId) {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
}

// Middleware pour vérifier l'authenticité du token JWT dans l'en-tête "Authorization"
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // Si le token est absent, renvoyer une réponse 401
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      // Si le token est invalide ou expiré, renvoyer une réponse 403
      return res.sendStatus(403);
    }

    // Si le token est valide, ajouter l'ID de l'utilisateur à l'objet "req"
    req.userId = user.userId;
    next();
  });
}

// Fonction de gestion de la route de connexion
function login(req, res) {
}

// Exporter les fonctions 
module.exports = {
  generateToken,
  authenticateToken,
  login,
};
