const fs = require("fs/promises");
const { v4: uuid } = require("uuid");

const MAX_COMMENTAIRES = 20; // Nombre maximum de commentaires autorisés dans le fichier data

const commentaireModel = {
  async ajouterCommentaire(contenu) {
    const id = uuid();

    if (!contenu || typeof contenu !== "string") {
      throw new Error("Le contenu du commentaire est invalide.");
    }

    try {
      // Vérifier le nombre de commentaires actuels dans le fichier
      const commentaires = await this.getAllCommentaires();
      if (commentaires.length >= MAX_COMMENTAIRES) {
        throw new Error("Limite de commentaires atteinte. Impossible d'ajouter de nouveaux commentaires.");
      }

      await fs.mkdir("data/commentaires", { recursive: true });
      await fs.writeFile(`data/commentaires/${id}.txt`, contenu);

      return { id, contenu };
    } catch (err) {
      // Renvoyer l'erreur plutôt que de la lancer
      return err;
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
  },

  async getAllCommentaires() {
    try {
      const commentaires = [];
      const fichiers = await fs.readdir("data/commentaires");
      for (const fichier of fichiers) {
        const id = fichier.replace(".txt", "");
        const contenu = await fs.readFile(`data/commentaires/${fichier}`, "utf-8");
        commentaires.push({ id, contenu });
      }
      return commentaires;
    } catch (err) {
      return [];
    }
  }
};

module.exports = commentaireModel;
