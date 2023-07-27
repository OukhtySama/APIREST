
const _ = require('lodash');

const tenueController = {
  genererTenue(req, res) {
    const hauts = ["Noir", "Blanc", "Orange", "Bleu marine"];
    const jeans = ["Gris", "Gris foncé", "Noir", "Bleu marine"];
    const chaussures = ["Blanc", "Gris", "Noir", "Rouge"];

    const tenue = {
      haut: _.sample(hauts),
      jeans: _.sample(jeans),
      chaussures: _.sample(chaussures)
    };

    res.json(tenue);
  }
};

module.exports = tenueController;
