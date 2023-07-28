const commentaireModel = require("../models/commentaireModel");
const auth = require("../middlewares/auth");

const MAX_COMMENTAIRES = 20;

const commentaireController = {
  async ajouterCommentaire(req, res) {
    const contenu = req.body.contenu;
    const userId = req.userId;

    if (!contenu || typeof contenu !== "string") {
      // Vérifier si le contenu du commentaire est invalide
      return res.status(400).json({ erreur: "Le contenu du commentaire est invalide." });
    }

    try {
      const commentaires = await commentaireModel.getAllCommentaires();

      if (commentaires.length >= MAX_COMMENTAIRES) {
        // Vérifier si la limite de commentaires a été atteinte
        return res.status(403).json({ erreur: "Limite de commentaires atteinte. Impossible d'ajouter de nouveaux commentaires." });
      }

      // Ajouter le commentaire à la base de données en associant l'identifiant de l'utilisateur
      const commentaire = await commentaireModel.ajouterCommentaire(contenu, userId);
      res.status(201).json(commentaire);
    } catch (err) {
      // En cas d'erreur, retourner une réponse d'erreur avec un message approprié
      res.status(500).json({ erreur: "Une erreur est survenue lors de l'ajout du commentaire : " + err.message });
    }
  },

  async getCommentaire(req, res) {
    const id = req.params.id;

    try {
      const commentaire = await commentaireModel.getCommentaireById(id);
      if (!commentaire) {
        // Vérifier si le commentaire avec l'ID spécifié a été trouvé
        return res.status(404).json({ erreur: "Commentaire non trouvé." });
      }
      res.json(commentaire);
    } catch (err) {
      // En cas d'erreur, retourner une réponse d'erreur avec un message approprié
      res.status(500).json({ erreur: "Une erreur est survenue lors de la récupération du commentaire : " + err.message });
    }
  }
};

module.exports = commentaireController;
