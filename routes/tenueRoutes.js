const express = require("express");
const tenuController = require("../controllers/tenueController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Route pour générer une tenue aléatoire
router.get("/", auth.authenticateToken, tenuController.genererTenue);

// Route pour ajouter une nouvelle tenue
router.post("/", (req, res) => {
  res.status(501).json({ erreur: "Non implémenté. Cette route n'a pas été définie pour l'ajout de tenues." });
});


module.exports = router;
