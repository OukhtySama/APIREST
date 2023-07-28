const express = require("express");
const commentaireController = require("../controllers/commentaireController");
const auth = require("../middlewares/auth");

const router = express.Router();

// Route publique (sans authentification)
router.get("/:id", commentaireController.getCommentaire);

// Route nécessitant une authentification (ajouter un commentaire)
router.post("/", auth.authenticateToken, commentaireController.ajouterCommentaire);

module.exports = router;
