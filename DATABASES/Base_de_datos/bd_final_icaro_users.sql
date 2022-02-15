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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `users_id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `last_name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `id_country` int NOT NULL,
  `username` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`users_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Liz','Cardozo','lizcardozo@gmail.com','123456',2,'lcardozo'),(2,'Maria','Vega','mvega@gmail.com','123456',2,'mvega'),(3,'Daniel','Velandia','dvelandia@gmail.com','123456',2,'dvelandia'),(4,'Diego','Velandia','diegovelandia@gmail.com','123456',1,'diegovelandia'),(5,'Nicolas','Rojas','nrojas@gmail.com','123456',4,'nrojas'),(6,'Juan','Zapata','jzapata@gmail.com','123456',2,'jzapata'),(7,'Mati','Gomez','mgomez@gmail.com','123456',3,'mgomez'),(8,'Alejandro','Meza','ameza@gmail.com','123456',2,'ameza'),(9,'Facundo','Bufano','fbufano@gmail.com','123456',4,'fbufano'),(10,'Emma','Cardozo','ecardozo@gmail.com','123456',2,'ecardozo'),(11,'Vannessa','Gonzalez','vfonzalez@gmail.com','123456',1,'vfonzalez'),(12,'Cristian','Vidal','cvidal@gmail.com','123456',4,'cvidal'),(13,'Karol','Otero','kotero@gmail.com','123456',4,'kotero'),(14,'Laura','Quintero','lquintero@gmail.com','123456',4,'lquintero');
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

-- Dump completed on 2022-02-14 23:01:55
