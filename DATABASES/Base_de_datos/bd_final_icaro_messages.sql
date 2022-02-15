CREATE DATABASE  IF NOT EXISTS `bd_final_icaro` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_final_icaro`;
-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: bd_final_icaro
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id_message` int unsigned NOT NULL AUTO_INCREMENT,
  `matter` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `body` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `to_email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `users_id` int NOT NULL,
  `state` enum('sent','received') COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_message`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (49,'Compras','Toca comprar una nueva laptop','lizcardozo@gmail.com',8,'sent'),(50,'maquetar','Maquetar productos','mvega@gmail.com',1,'sent'),(51,'colegio','Recoger del colegio al sobrino','dvelandia@gmail.com',2,'sent'),(52,'permiso','Estoy enfermo','lizcardozo@gmail.com',1,'received'),(53,'permiso','Permiso vacuna','dvelandia@gmail.com',8,'received'),(54,'IMPORTANTE','Vamos A JUGAR?','kotero@gmail.com',2,'received'),(55,'reunion','A que horas es la reunion?','kotero@gmail.com',5,'received'),(56,'Icaro','Me dan mi diploma por favor?','dvelandia@gmail.com',8,'sent'),(57,'celular','Compre un nuevo celular','jzapata@gmail.com',2,'sent'),(58,'boca juniors','Cuando es el partido?','dvelandia@gmail.com',8,'received'),(59,'ok','ok','diegovelandia@gmail.com',4,'sent'),(60,'reunion','se cancela la reunion','jzapata@gmail.com',8,'received'),(61,'trabajo','Necesitamos a alguien con ingles','lquintero@gmail.com',8,'sent'),(62,'celular','se me rompio el celular','diegovelandia@gmail.com',2,'sent'),(63,'permiso','Tengo covid','jzapata@gmail.com',1,'received'),(64,'estudio','Me cambio de universidad','lquintero@gmail.com',8,'sent'),(65,'amor','Lo siento mucho','lquintero@gmail.com',1,'received'),(66,'permiso','voy tarde','mvega@gmail.com',3,'sent'),(67,'recibido','recibido','lizcardozo@gmail.com',8,'sent'),(68,'vacaciones','confirmo las vacaciones para junio','lizcardozo@gmail.com',8,'received'),(69,'vacaciones','me voy de viaje','lizcardozo@gmail.com',3,'received'),(70,'permiso','llego tarde','lizcardozo@gmail.com',1,'received'),(71,'trabajo','renuncio','lizcardozo@gmail.com',3,'sent'),(72,'ok','ok','dvelandia@gmail.com',1,'sent');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-14 23:01:55
