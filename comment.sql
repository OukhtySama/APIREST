-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 28 juil. 2023 à 09:35
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `comment`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
CREATE TABLE IF NOT EXISTS `commentaires` (
  `id` varchar(36) NOT NULL,
  `contenu` text NOT NULL,
  `date_creation` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `utilisateur_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `utilisateur_id` (`utilisateur_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `contenu`, `date_creation`, `utilisateur_id`) VALUES
('8c60a32f-faf2-449e-80d5-acd50b7d0d57', 'Ceci est un commentaire.', '2023-07-28 08:46:11', '1'),
('14d3dbf6-c7fc-4cc7-a9ee-cce34becdcea', 'Ceci est un commentaire.', '2023-07-28 08:46:24', '1'),
('4e91908a-e6d7-4f59-bd69-5c374aec361a', 'Ceci est un commentaire.', '2023-07-28 08:47:50', '1'),
('7d6e69e9-a8bb-405e-ba22-d35e29847823', 'Ceci est un commentaire.', '2023-07-28 09:03:27', '1'),
('51a72adb-7ed7-44de-86a2-94bc99499f41', 'Ceci est un commentaire.', '2023-07-28 09:04:21', '1'),
('c10231b2-24e6-4073-b014-cf5e7d9f5426', 'Ceci est un commentaire.', '2023-07-28 09:10:01', '1'),
('b66dd3c2-4bd6-4d06-a70d-23421f9645f4', 'Ceci est un commentaire.', '2023-07-28 09:10:01', '1'),
('45235c94-96c2-4e80-a276-64d453b9c100', 'Ceci est un commentaire.', '2023-07-28 09:10:01', '1'),
('d66288f2-e193-4a31-8f29-875d067c8d65', 'Ceci est un commentaire.', '2023-07-28 09:30:34', '1'),
('4ddcbd02-ad2a-473c-a3ee-7563fde2bb51', 'Ceci est un commentaire.', '2023-07-28 09:33:03', '1');

-- --------------------------------------------------------

--
-- Structure de la table `tenues`
--

DROP TABLE IF EXISTS `tenues`;
CREATE TABLE IF NOT EXISTS `tenues` (
  `id` varchar(36) NOT NULL,
  `haut` varchar(50) NOT NULL,
  `jeans` varchar(50) NOT NULL,
  `chaussures` varchar(50) NOT NULL,
  `date_creation` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `tenues`
--

INSERT INTO `tenues` (`id`, `haut`, `jeans`, `chaussures`, `date_creation`) VALUES
('4a25d271-059c-4527-a2a1-25537d6248db', 'Blanc', 'Bleu marine', 'Noir', '2023-07-27 13:58:19'),
('29399b79-0b85-4d39-9719-e4fbfd0e5c9b', 'Noir', 'Gris foncé', 'Blanc', '2023-07-27 13:58:22'),
('f5665e96-97df-47c9-b808-34555d3d8410', 'Noir', 'Bleu marine', 'Gris', '2023-07-27 13:58:23'),
('4822f16a-11e8-4a07-801a-5aedfaded03a', 'Blanc', 'Gris foncé', 'Gris', '2023-07-28 07:30:53'),
('a69653f2-493f-42b4-80d6-ff2e58f56ec4', 'Bleu marine', 'Gris foncé', 'Noir', '2023-07-28 07:30:55'),
('99d76cad-fd95-48c5-8bf0-f763c4e1e74d', 'Noir', 'Noir', 'Blanc', '2023-07-28 07:30:55'),
('eec61d69-ade7-488b-98ec-dd5a3c6d7306', 'Noir', 'Gris', 'Blanc', '2023-07-28 07:30:56'),
('53b15af0-49f3-4725-86f9-fa50dfc1e854', 'Bleu marine', 'Gris', 'Rouge', '2023-07-28 09:08:56'),
('a1c28114-e45c-46dd-9b3c-97774781f047', 'Noir', 'Noir', 'Gris', '2023-07-28 09:08:59'),
('2c888880-d842-4ce8-ba78-f22965fdbe04', 'Orange', 'Gris', 'Blanc', '2023-07-28 09:09:00'),
('67230706-787d-4258-878c-e21d8e6daf25', 'Noir', 'Noir', 'Noir', '2023-07-28 09:09:04'),
('a8521ff8-0627-4fab-b288-9bed89cdf47d', 'Orange', 'Bleu marine', 'Blanc', '2023-07-28 09:10:40'),
('477eb795-9f7f-4d8b-ab27-cc3574ecf018', 'Orange', 'Gris', 'Noir', '2023-07-28 09:33:21');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifiant` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `identifiant` (`identifiant`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `identifiant`, `mot_de_passe`) VALUES
(1, 'user1', 'mdp1'),
(2, 'user2', '$2b$10$ZMVdKRLrsPl/3iKwSiLPYecpZPOnW52yFUDJFpJ/5kYugwPVW1liO');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
