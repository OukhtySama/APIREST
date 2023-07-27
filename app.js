const express = require("express");
const cors = require("cors");
const commentaireRoutes = require("./routes/commentaireRoutes");
const tenuRoutes = require("./routes/tenueRoutes"); // Importez le routeur pour les tenues

const app = express();

app.use(express.json());
app.use(cors());

app.use(commentaireRoutes);
app.use("/tenue", tenuRoutes); // Utilisez le routeur pour les tenues sous le chemin "/tenue"

app.listen(3000, () => console.log("Serveur API en cours d'exécution..."));
