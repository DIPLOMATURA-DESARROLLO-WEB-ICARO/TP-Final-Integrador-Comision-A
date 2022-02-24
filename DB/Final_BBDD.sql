CREATE DATABASE  IF NOT EXISTS `final_bbdd` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `final_bbdd`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: final_bbdd
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `idCities` int NOT NULL AUTO_INCREMENT,
  `citie_name` varchar(45) NOT NULL,
  `FK_citie` int NOT NULL,
  PRIMARY KEY (`idCities`),
  KEY `FK_citie_idx` (`FK_citie`),
  CONSTRAINT `FK_citie` FOREIGN KEY (`FK_citie`) REFERENCES `country` (`idCountry`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Buenos Aires',1),(2,'Brasilia',2),(3,'Uruguay',3),(4,'Colombia',4),(5,'Bolivia',5),(6,'Paraguay',6),(7,'Panama',7),(8,'Mexico',8);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `idCountry` int NOT NULL AUTO_INCREMENT,
  `countryName` varchar(45) NOT NULL,
  PRIMARY KEY (`idCountry`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Argentina'),(2,'Brazil'),(3,'Uruguay'),(4,'Colombia'),(5,'Bolivia'),(6,'Paraguay'),(7,'Panama'),(8,'Mexico');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recived_message`
--

DROP TABLE IF EXISTS `recived_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recived_message` (
  `idrecived_message` int NOT NULL AUTO_INCREMENT,
  `message_rec` varchar(140) NOT NULL,
  `FK_recived_message` int NOT NULL,
  `leido` varchar(45) NOT NULL,
  PRIMARY KEY (`idrecived_message`),
  KEY `FK_recived_message_idx` (`FK_recived_message`),
  CONSTRAINT `FK_recived_message` FOREIGN KEY (`FK_recived_message`) REFERENCES `users` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recived_message`
--

LOCK TABLES `recived_message` WRITE;
/*!40000 ALTER TABLE `recived_message` DISABLE KEYS */;
INSERT INTO `recived_message` VALUES (1,'Hola!',4,'4'),(2,'Hola!',3,'3'),(3,'Llego tarde',4,'4'),(4,'Compre Bananas',3,'0'),(5,'Cuanto sale el mes?',6,'6'),(6,'Sale $1200 el pase libre.',5,'0');
/*!40000 ALTER TABLE `recived_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sent_message`
--

DROP TABLE IF EXISTS `sent_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sent_message` (
  `idsent_message` int NOT NULL AUTO_INCREMENT,
  `message_sent` varchar(140) NOT NULL,
  `userSend` int NOT NULL,
  PRIMARY KEY (`idsent_message`),
  KEY `FK_userSend_idx` (`userSend`),
  CONSTRAINT `FK_userSend` FOREIGN KEY (`userSend`) REFERENCES `users` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sent_message`
--

LOCK TABLES `sent_message` WRITE;
/*!40000 ALTER TABLE `sent_message` DISABLE KEYS */;
INSERT INTO `sent_message` VALUES (1,'Hola!',3),(2,'Compre Bananas',4),(3,'Llego tarde',3),(4,'Cuanto sale el mes?',5),(5,'Sale $1200 el pase libre.',6),(6,'Hola!',4);
/*!40000 ALTER TABLE `sent_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUsers` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `userName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `FK_country` int NOT NULL,
  PRIMARY KEY (`idUsers`),
  KEY `FK_country_idx` (`FK_country`),
  CONSTRAINT `FK_country` FOREIGN KEY (`FK_country`) REFERENCES `country` (`idCountry`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jose','BonafedeJ','Bonafede','Jose123',1),(2,'Fabio','OcampoF','Ocampo','Fabio2222',3),(3,'Nicolas','SeguraN','Segura','Segura456',5),(4,'Lucas','SolaL','Sola','SolaLu',2),(5,'Florencia','PerrachineFlor','Perriachione','Flora31',1),(6,'Josefina','AntoninoJ','Antonino','JoseAnto',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-24 11:52:01
