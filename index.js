const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require('lodash');
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

// Middleware d'authentification
const authenticateUser = (req, res, next) => {
    // Vérifier si l'utilisateur est authentifié ici (par exemple, en vérifiant un jeton d'accès)
    // Si l'utilisateur est authentifié, vous pouvez appeler next() pour continuer le flux d'exécution
    // Sinon, renvoyez une erreur d'accès non autorisé (401) ou redirigez vers une page de connexion.
    // Exemple de vérification fictive ci-dessous :
    const isAuthenticated = true;
    if (isAuthenticated) {
        next();
    } else {
        res.status(401).json({ erreur: "Accès non autorisé." });
    }
};

// Appliquer le middleware d'authentification à une route spécifique
app.get("/route-securisee", authenticateUser, (req, res) => {
    // Le code ici ne sera exécuté que si l'utilisateur est authentifié
    res.json({ message: "Ceci est une route sécurisée." });
});


app.get("/tenue", (req, res) => {
    const hauts = ["Noir", "Blanc", "Orange", "Bleu marine"];
    const jeans = ["Gris", "Gris foncé", "Noir", "Bleu marine"];
    const chaussures = ["Blanc", "Gris", "Noir", "Rouge"];

    res.json({
        haut: _.sample(hauts),
        jeans: _.sample(jeans),
        chaussures: _.sample(chaussures)
    });
});

app.post("/commentaires", async (req, res) => {
    const id = uuid();
    const contenu = req.body.contenu;

    if (!contenu || typeof contenu !== "string") {
        return res.status(400).json({ erreur: "Le contenu du commentaire est invalide." });
    }

    await fs.mkdir("data/commentaires", { recursive: true });
    await fs.writeFile(`data/commentaires/${id}.txt`, contenu);

    res.status(201).json({
        id: id
    });
});


app.post("/commentaires",async (req, res) => {
    const id = uuid();
    const contenu = req.body.contenu;

    if (!contenu) {
        return res.sendStatus(400);
    }

    await fs.mkdir("data/commentaires", { recursive: true});
    await fs.writeFile(`data/commentaires/${id}.txt`, contenu);

    res.status(201).json({
        id: id
    });
});
app.listen(3000, () => console.log("Serveur API en cours d'exécution..."));

