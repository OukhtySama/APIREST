const express = require("express");
const cors = require("cors");
const commentaireRoutes = require("./routes/commentaireRoutes");
const tenuRoutes = require("./routes/tenueRoutes");
const authRoutes = require("./routes/authRoutes");
const auth = require("./middlewares/auth");

const app = express();

app.use(express.json());
app.use(cors());

// Middleware d'authentification pour protéger les routes nécessitant une authentification
app.use("/commentaires", auth.authenticateToken, commentaireRoutes);
app.use("/tenue", tenuRoutes); 
app.use(authRoutes); 

app.listen(3000, () => console.log("Serveur API en cours d'exécution..."));
