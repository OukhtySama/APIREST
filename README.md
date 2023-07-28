
# API de gestion de commentaires et génération de tenues aléatoires

Cette API a été développée en utilisant Node.js avec Express.js pour la gestion des routes et cors pour gérer les requêtes cross-origin. Elle offre deux principales fonctionnalités : la gestion des commentaires et la génération de tenues aléatoires. Les données des commentaires sont stockées dans une base de données MySQL nommée "comment", et chaque commentaire est enregistré avec un identifiant unique généré par UUID.

## Fonctionnalités
Générer une tenue aléatoire : L'API fournit une route pour générer une tenue aléatoire comprenant un haut, un jean et des chaussures aléatoires parmi les options disponibles.

Ajouter un nouveau commentaire : L'API propose une route pour ajouter un nouveau commentaire. Le contenu du commentaire est extrait du corps de la requête POST, et chaque commentaire est enregistré dans la base de données avec un identifiant unique.

Se connecter : L'API propose des routes pour gérer les opérations d'authentification. Après une connexion réussie, un token JWT est renvoyé dans la réponse, qui pourra être utilisé pour les opérations futures nécessitant une authentification.

Récupérer un commentaire par identifiant : L'API offre une route pour récupérer un commentaire spécifique en utilisant son identifiant unique.

## Limitations
- Un maximum de 20 commentaires est autorisé dans le système. Si le nombre de commentaires atteint cette limite, l'ajout de nouveaux commentaires est bloqué.
- Certaines routes de l'API nécessitent une authentification via un token JWT. Les utilisateurs sans token valide ne seront pas autorisés à effectuer ces requêtes. Les routes requérant une authentification sont spécifiées dans la documentation. Assurez-vous d'inclure le token JWT dans l'en-tête "Authorization" lors des requêtes nécessitant une authentification.

## Instructions d'utilisation
1. Installez les dépendances en exécutant `npm install`.
2. Assurez-vous d'avoir configuré la base de données MySQL avec les informations d'identification appropriées dans le fichier `db.js`.
3. Lancez l'API en exécutant `npm start`.
4. Utilisez un logiciel client REST (comme Postman) pour tester les routes disponibles.

## Routes
- `GET /tenue` : Génère une tenue aléatoire.
- `POST /commentaires` : Ajoute un nouveau commentaire avec le contenu fourni dans le corps de la requête POST.
- `POST /login` : Se connecter pour obtenir un token JWT valide.
- `GET /commentaires/:id` : Récupère le commentaire avec l'identifiant unique spécifié.

L'API utilise une base de données MySQL nommée "comment" pour stocker les commentaires, et les informations de connexion à la base de données sont spécifiées dans le fichier `db.js`.

PS : Assurez-vous d'avoir Node.js et npm installés sur votre système avant d'utiliser cette API. Lors de l'ajout d'un commentaire avec succès, l'API renverra un token JWT dans la réponse, qui pourra être utilisé pour les opérations futures nécessitant une authentification.