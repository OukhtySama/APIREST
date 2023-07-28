const db = require("../db");
const { v4: uuid } = require("uuid");
const _ = require('lodash');

const tenuController = {
  genererTenue(req, res) {
    const hauts = ["Noir", "Blanc", "Orange", "Bleu marine"];
    const jeans = ["Gris", "Gris foncé", "Noir", "Bleu marine"];
    const chaussures = ["Blanc", "Gris", "Noir", "Rouge"];

    // Générer une tenue aléatoire en choisissant un élément aléatoire de chaque catégorie
    const tenue = {
      haut: _.sample(hauts),
      jeans: _.sample(jeans),
      chaussures: _.sample(chaussures)
    };

    // Insérer la tenue dans la base de données
    insererTenueDansBDD(tenue);

    res.json(tenue);
  }
};

async function insererTenueDansBDD(tenue) {
  const id = uuid();
  const { haut, jeans, chaussures } = tenue;

  try {
    // Insérer la tenue dans la table "tenues" de la base de données en utilisant un ID unique généré par uuid
    await db.query("INSERT INTO tenues (id, haut, jeans, chaussures) VALUES (?, ?, ?, ?)", [id, haut, jeans, chaussures]);
    console.log("Tenue insérée dans la base de données avec succès !");
  } catch (err) {
    // En cas d'erreur, afficher un message d'erreur avec des détails sur l'erreur survenue lors de l'insertion de la tenue
    console.error("Une erreur est survenue lors de l'insertion de la tenue dans la base de données :", err.message);
  }
}

module.exports = tenuController;
