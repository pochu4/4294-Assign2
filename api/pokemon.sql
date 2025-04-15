-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 15, 2025 at 06:50 AM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemon`
--

-- --------------------------------------------------------

--
-- Table structure for table `pokemons`
--

CREATE TABLE `pokemons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `type_id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pokemons`
--

INSERT INTO `pokemons` (`id`, `name`, `image_name`, `user_id`, `type_id`, `description`) VALUES
(1, 'Turtwig', 'turtwig.png', NULL, 1, 'Turtwig is a small,quadrupedal Pokémon resembling a turtle or tortoise. Its eyes, feet, and lower jaw are yellow. Its body is covered by a brown shell that is composed of earth. The shell has a thick black stripe and a black rim. On a very healthy Turtwig, the shell should feel moist. A small seedling grows on a brown patch on its head. This seedling will wilt if the Pokémon becomes thirsty. Since it is a plant-based Pokémon, Turtwig usually nourishes itself through photosynthesis; it becomes more energetic when exposed to enough sunlight. It also drinks water, which hardens its soil-based shell. Due to its status as a first partner Pokémon, a wild Turtwig is hard to come by and it is generally found under the ownership of Trainers. It has been recently seen living in the Terarium of Blueberry Academy.'),
(2, 'Chimchar', 'chimchar.png', NULL, 2, 'Chimchar is a bipedal Pokémon resembling a chimpanzee. Its fur is primarily a shade of orange, although its face, outer ears, underbelly, hands, and feet are light yellow. Its ears are large in comparison to its head, and has red insides. It also has red markings around its eyes, as well as two pointed teeth in its upper jaw, a swirl-like symbol on its chest, and five fingers on its hands with three toes on its feet. It has a swirly crest of hair on its head. Its rear has a small, round, red patch that is usually obscured by flames produced by burning gas in its stomach. These flames cannot be put out by rain, although they go out when Chimchar goes to sleep, and burn weakly when it feels ill. In the past, this flame on its rear has caused people to mistake it for an apparition, dubbed the Lantern Tail. Chimchar is very agile, being able to climb the rocky ledges of tall mountains where it lives. It has been recently seen living in the Terarium of Blueberry Academy.'),
(3, 'Piplup', 'piplup.png', NULL, 3, 'Piplup is a light-blue, penguin-like Pokémon, which is covered in thick down to insulate against the cold. It has a dark blue head with a primarily white face and a short, yellow beak. The dark blue feathers on its head extend down its back and around its neck, which causes it to appear to be wearing a cape. There are two white ovals on its chest and a small, light-blue marking resembles a crown above its beak. It has flipper-like arms and yellow feet with three toes each. Piplup has a strong sense of self-pride. Because of its pride, it has a hard time accepting food from humans and bonding with its caretakers. It will even puff out its chest after it falls down, which it often does due to its poor walking abilities. However, it is a skilled swimmer that can dive for over ten minutes in order to hunt. It has also been shown to fly short distances in the animated series. It lives along the seashore in colder climates. It has been recently seen living in the Terarium of Blueberry Academy.');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`) VALUES
(1, 'Grass'),
(2, 'Fire'),
(3, 'Water');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'hi@hi.com', '$2b$10$6Vj2maiJNf7ord4NTH0ro.f0Qmb1fZ86GT7iNTmCxPtHko.HYau.W'),
(6, 'hi@hello.com', '$2b$10$p5AhDY3y91WsuvSMcJdEKO4zgHYS2wcMtZ5nHuhZhajgVgFlagCzW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pokemons`
--
ALTER TABLE `pokemons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `pokemons_ibfk_2` (`user_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pokemons`
--
ALTER TABLE `pokemons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pokemons`
--
ALTER TABLE `pokemons`
  ADD CONSTRAINT `pokemons_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`),
  ADD CONSTRAINT `pokemons_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
