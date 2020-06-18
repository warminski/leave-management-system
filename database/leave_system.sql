-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 18 Cze 2020, 18:08
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `leave_system`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `leaves`
--

CREATE TABLE `leaves` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `customClass` varchar(50) NOT NULL DEFAULT 'greenClass'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `leaves`
--

INSERT INTO `leaves` (`id`, `user_id`, `startDate`, `endDate`, `customClass`) VALUES
(15, 6, '2020-06-17', '2020-06-25', 'greenClass'),
(16, 4, '2020-06-24', '2020-06-29', 'greenClass');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL,
  `is_active` int(1) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `image` varchar(128) NOT NULL,
  `leave_days` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role_id`, `is_active`, `date_created`, `image`, `leave_days`) VALUES
(1, 'Robert Nowak', 'test@gmail.com', '0', 2, 1, '2020-06-10 14:12:16', '', 1),
(2, 'Natalia Kalinowska', 'test2@gmail.com', '0', 2, 1, '2020-06-10 14:15:18', '', 11),
(3, 'Magdalena Robak', 'test3@gmail.com', '0', 2, 1, '2020-06-10 14:18:40', 'default.jpg', 0),
(4, 'Damian Kowalski', 'test4@gmail.com', '0', 2, 1, '2020-06-10 14:21:29', 'default.jpg', 5),
(6, 'Piotr Warminski', 'piotr@gmail.com', '$2y$10$FBn0RYCv7J0w4vw0BoZ/8eyXU0a60h3tjvJg8k3vZuniGJzlf24j2', 2, 1, '2020-06-12 12:27:54', 'default.jpg', 10),
(7, 'admin', 'admin@gmail.com', '$2y$10$e5OOUvEvLMI/hDWAoMplYeLh.jwPOsFLKRX89EVVfeDPLnOM.J23m', 1, 1, '2020-06-12 12:43:40', 'default.jpg', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `role` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user_role`
--

INSERT INTO `user_role` (`id`, `role`) VALUES
(1, 'Administrator'),
(2, 'Member');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeksy dla tabeli `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT dla tabeli `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
