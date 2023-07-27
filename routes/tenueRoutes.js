const express = require("express");
const tenuController = require("../controllers/tenueController");

const router = express.Router();

// Route pour générer une tenue aléatoire
router.get("/", tenuController.genererTenue);

// Autres routes pour la gestion des tenues (à définir selon les fonctionnalités)

module.exports = router;
