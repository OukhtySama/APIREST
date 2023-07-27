const db = require("../db");
const { v4: uuid } = require("uuid");

const MAX_COMMENTAIRES = 20;

const commentaireModel = {
  async ajouterCommentaire(contenu) {
    const id = uuid();

    if (!contenu || typeof contenu !== "string") {
      throw new Error("Le contenu du commentaire est invalide.");
    }

    try {
      // Obtenir une connexion à partir du pool
      const connection = await db.getConnection();

      // Effectuer la requête INSERT à l'aide de la connexion
      await connection.query("INSERT INTO commentaires (id, contenu) VALUES (?, ?)", [id, contenu]);

      // Libérer la connexion
      connection.release();

      return { id, contenu };
    } catch (err) {
      throw new Error("Une erreur est survenue lors de l'ajout du commentaire : " + err.message);
    }
  },

  async getCommentaireById(id) {
    try {
      // Obtenir une connexion à partir du pool
      const connection = await db.getConnection();

      // Effectuer la requête SELECT à l'aide de la connexion
      const [commentaires] = await connection.query("SELECT * FROM commentaires WHERE id = ?", [id]);

      // Libérer la connexion
      connection.release();

      if (commentaires.length === 0) {
        return null;
      }
      return { id: commentaires[0].id, contenu: commentaires[0].contenu };
    } catch (err) {
      throw new Error("Une erreur est survenue lors de la récupération du commentaire : " + err.message);
    }
  },

  async getAllCommentaires() {
    try {
      // Obtenir une connexion à partir du pool
      const connection = await db.getConnection();

      // Effectuer la requête SELECT à l'aide de la connexion
      const [commentaires] = await connection.query("SELECT * FROM commentaires");

      // Libérer la connexion
      connection.release();

      return commentaires.map((commentaire) => ({ id: commentaire.id, contenu: commentaire.contenu }));
    } catch (err) {
      throw new Error("Une erreur est survenue lors de la récupération des commentaires : " + err.message);
    }
  }
};

module.exports = commentaireModel;
