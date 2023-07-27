const commentaireModel = require("../models/commentaireModel");

const MAX_COMMENTAIRES = 20;

const commentaireController = {
  async ajouterCommentaire(req, res) {
    const contenu = req.body.contenu;

    if (!contenu || typeof contenu !== "string") {
      return res.status(400).json({ erreur: "Le contenu du commentaire est invalide." });
    }

    try {
      const commentaires = await commentaireModel.getAllCommentaires(); // Modifiez cette ligne

      if (commentaires.length >= MAX_COMMENTAIRES) {
        return res.status(403).json({ erreur: "Limite de commentaires atteinte. Impossible d'ajouter de nouveaux commentaires." });
      }

      const commentaire = await commentaireModel.ajouterCommentaire(contenu);
      res.status(201).json(commentaire);
    } catch (err) {
      res.status(500).json({ erreur: "Une erreur est survenue lors de l'ajout du commentaire : " + err.message });
    }
  },

  async getCommentaire(req, res) {
    const id = req.params.id;

    try {
      const commentaire = await commentaireModel.getCommentaireById(id);
      if (!commentaire) {
        return res.status(404).json({ erreur: "Commentaire non trouvé." });
      }
      res.json(commentaire);
    } catch (err) {
      res.status(500).json({ erreur: "Une erreur est survenue lors de la récupération du commentaire : " + err.message });
    }
  }
};

module.exports = commentaireController;
