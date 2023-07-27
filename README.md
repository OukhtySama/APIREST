#   API de gestion de commentaires et génération de tenues aléatoires

Cette API a été développée en utilisant Node.js avec Express.js pour la gestion des routes et cors pour gérer les requêtes cross-origin. Elle offre deux principales fonctionnalités : la gestion des commentaires et la génération de tenues aléatoires. Les données des commentaires sont stockées dans des fichiers texte, chaque commentaire étant enregistré dans un fichier séparé avec un identifiant unique généré par UUID.

#   Fonctionnalités
Générer une tenue aléatoire : L'API fournit une route pour générer une tenue aléatoire comprenant un haut, un jean et des chaussures aléatoires parmi les options disponibles.

Ajouter un nouveau commentaire : L'API propose une route pour ajouter un nouveau commentaire. Le contenu du commentaire est extrait du corps de la requête POST, et chaque commentaire est enregistré dans un fichier texte distinct avec un identifiant unique.

#   Limitation
Un maximum de 20 commentaires est autorisé dans le système. Si le nombre de commentaires atteint cette limite, l'ajout de nouveaux commentaires est bloqué.

# Instructions d'utilisation
Installez les dépendances en exécutant npm install.
Lancez l'API en exécutant npm start.
Utilisez un logiciel client REST (comme Postman) pour tester les routes disponibles.
Routes
GET /tenue : Génère une tenue aléatoire.
POST /commentaires : Ajoute un nouveau commentaire avec le contenu fourni dans le corps de la requête POST.
GET /commentaires/:id : Récupère le commentaire avec l'identifiant unique spécifié.
L'API utilise également un fichier data/commentaires pour stocker les commentaires.

PS : Assurez-vous d'avoir Node.js et npm installés sur votre système avant d'utiliser cette API.
