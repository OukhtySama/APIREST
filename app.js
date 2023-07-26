const express = require("express");
const cors = require("cors");
const app = express();
const tenueController = require("./controllers/tenueController");
// app.js
const commentaireController = require("./controllers/commentaireController");

// Route pour récupérer un commentaire par son ID
app.get("/commentaires/:id", commentaireController.getCommentaire);


app.use(express.json());
app.use(cors());

// Route pour générer une tenue aléatoire
app.get("/tenue", tenueController.genererTenue);

// Route pour ajouter un nouveau commentaire
app.post("/commentaires", commentaireController.ajouterCommentaire);



app.listen(3000, () => console.log("Serveur API en cours d'exécution..."));
