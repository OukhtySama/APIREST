const fs = require("fs/promises");
const { v4: uuid } = require("uuid");

const commentaireModel = {
  async ajouterCommentaire(contenu) {
    const id = uuid();

    if (!contenu || typeof contenu !== "string") {
      throw new Error("Le contenu du commentaire est invalide.");
    }

    try {
      await fs.mkdir("data/commentaires", { recursive: true });
      await fs.writeFile(`data/commentaires/${id}.txt`, contenu);

      return { id, contenu };
    } catch (err) {
      throw new Error("Une erreur est survenue lors de l'ajout du commentaire.");
    }
  },

  async getCommentaireById(id) {
    try {
      const cheminFichier = `data/commentaires/${id}.txt`;
      const contenu = await fs.readFile(cheminFichier, "utf-8");
      return { id, contenu };
    } catch (err) {
      return null;
    }
  }
};

module.exports = commentaireModel;
