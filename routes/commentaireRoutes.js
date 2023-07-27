const express = require("express");
const commentaireController = require("../controllers/commentaireController");

const router = express.Router();

router.post("/commentaires", commentaireController.ajouterCommentaire);
router.get("/commentaires/:id", commentaireController.getCommentaire);

module.exports = router;
