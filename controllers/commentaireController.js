const commentaireModel = require("../models/commentaireModel");

module.exports = {
  async ajouterCommentaire(req, res) {
    const contenu = req.body.contenu;

    if (!contenu || typeof contenu !== "string") {
      return res.status(400).json({ erreur: "Le contenu du commentaire est invalide." });
    }

    try {
      const commentaire = await commentaireModel.ajouterCommentaire(contenu);
      res.status(201).json(commentaire);
    } catch (err) {
      res.status(500).json({ erreur: "Une erreur est survenue lors de l'ajout du commentaire." });
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
      res.status(500).json({ erreur: "Une erreur est survenue lors de la récupération du commentaire." });
    }
  }
};
