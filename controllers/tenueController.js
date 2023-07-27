const db = require("../db");
const { v4: uuid } = require("uuid");
const _ = require('lodash');


const tenuController = {
  genererTenue(req, res) {
    const hauts = ["Noir", "Blanc", "Orange", "Bleu marine"];
    const jeans = ["Gris", "Gris foncé", "Noir", "Bleu marine"];
    const chaussures = ["Blanc", "Gris", "Noir", "Rouge"];

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
    await db.query("INSERT INTO tenues (id, haut, jeans, chaussures) VALUES (?, ?, ?, ?)", [id, haut, jeans, chaussures]);
    console.log("Tenue insérée dans la base de données avec succès !");
  } catch (err) {
    console.error("Une erreur est survenue lors de l'insertion de la tenue dans la base de données :", err.message);
  }
}

module.exports = tenuController;
