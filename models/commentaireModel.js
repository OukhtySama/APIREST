const db = require("../db");
const { v4: uuid } = require("uuid");

const MAX_COMMENTAIRES = 20;

const commentaireModel = {
  // Fonction asynchrone pour ajouter un commentaire dans la base de données
  async ajouterCommentaire(contenu, userId) {
    const id = uuid();

    if (!contenu || typeof contenu !== "string") {
      // Vérifier si le contenu du commentaire est invalide et lever une erreur en cas d'erreur
      throw new Error("Le contenu du commentaire est invalide.");
    }

    try {
      // Insérer le commentaire dans la table "commentaires" avec un ID unique généré par uuid
      await db.query("INSERT INTO commentaires (id, contenu, utilisateur_id) VALUES (?, ?, ?)", [id, contenu, userId]);

      // Retourner un objet représentant le commentaire ajouté
      return { id, contenu };
    } catch (err) {
      // En cas d'erreur, lever une nouvelle erreur avec un message approprié
      throw new Error("Une erreur est survenue lors de l'ajout du commentaire : " + err.message);
    }
  },

  // Fonction asynchrone pour récupérer un commentaire à partir de son ID
  async getCommentaireById(id) {
    try {
      // Récupérer le commentaire correspondant à l'ID spécifié depuis la table "commentaires"
      const [commentaires] = await db.query("SELECT * FROM commentaires WHERE id = ?", [id]);

      // Vérifier si le commentaire a été trouvé
      if (commentaires.length === 0) {
        return null; // Retourner null si le commentaire n'a pas été trouvé
      }
      
      // Retourner un objet représentant le commentaire trouvé
      return { id: commentaires[0].id, contenu: commentaires[0].contenu };
    } catch (err) {
      // En cas d'erreur, lever une nouvelle erreur avec un message approprié
      throw new Error("Une erreur est survenue lors de la récupération du commentaire : " + err.message);
    }
  },

  // Fonction asynchrone pour récupérer tous les commentaires depuis la base de données
  async getAllCommentaires() {
    try {
      // Récupérer tous les commentaires depuis la table "commentaires"
      const [commentaires] = await db.query("SELECT * FROM commentaires");

      // Mapper les résultats pour obtenir un tableau d'objets représentant les commentaires
      return commentaires.map((commentaire) => ({ id: commentaire.id, contenu: commentaire.contenu }));
    } catch (err) {
      // En cas d'erreur, lever une nouvelle erreur avec un message approprié
      throw new Error("Une erreur est survenue lors de la récupération des commentaires : " + err.message);
    }
  }
};

module.exports = commentaireModel;
