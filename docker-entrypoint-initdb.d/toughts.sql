DROP TABLE IF EXISTS `toughts`;
CREATE TABLE `toughts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` nvarchar(255) NOT NULL,
  `actor` nvarchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)  ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `toughts` WRITE;

INSERT INTO `toughts` VALUES 
  (1,'PHP e muito BOM ','Felipe Fardo'),
  (2,'Node e melhor que PHP','Ze ninguem'),
  (3, 'React e uma mao na roda', 'Felipe Fardo'),
  (4, 'To aprendendo Docker', 'Ze ninguem'),
  (5, 'To tendo muita dificuldade em Docker e API', 'Felipe Fardo');

UNLOCK TABLES;