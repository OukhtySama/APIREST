const express = require("express");
const auth = require("../middlewares/auth"); 
const authController = require("../controllers/authController");

const router = express.Router();

// Route pour la connexion (login)
router.post("/login", authController.login);

module.exports = router;
