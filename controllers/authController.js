const jwt = require('jsonwebtoken');
const SECRET_KEY = 'allan';
const db = require("../db");

function generateToken(userId) {
  // Génère un token JWT pour l'utilisateur en utilisant l'ID fourni et la clé secrète
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
}

async function login(req, res) {
  const identifiant = req.body.identifiant;
  const motDePasse = req.body.mot_de_passe;

  try {
    // Vérifier si les identifiants sont valides en interrogeant la base de données
    const [utilisateur] = await db.query("SELECT * FROM utilisateurs WHERE identifiant = ?", [identifiant]);

    if (utilisateur.length === 0 || utilisateur[0].mot_de_passe !== motDePasse) {
      // Si les identifiants sont invalides ou ne correspondent pas, retourner une erreur d'authentification
      return res.status(401).json({ erreur: "Identifiants invalides. Veuillez réessayer." });
    }

    // Si la connexion réussit, générez un token JWT pour l'utilisateur
    const userId = utilisateur[0].id; // Utilisez l'ID réel de l'utilisateur provenant de la base de données
    const token = generateToken(userId);

    // Retournez le token dans la réponse
    return res.json({ token });
  } catch (err) {
    // En cas d'erreur, retourner une réponse d'erreur avec un message approprié
    console.error("Une erreur est survenue lors de la connexion :", err.message);
    return res.status(500).json({ erreur: "Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard." });
  }
}

module.exports = {
  login,
};
