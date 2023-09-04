-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-09-2023 a las 06:35:09
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `paypal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `kart`
--

CREATE TABLE `kart` (
  `kart_id` int(11) NOT NULL,
  `user_id` varchar(256) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` mediumint(9) NOT NULL DEFAULT 1,
  `now_price` float NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `kart`
--

INSERT INTO `kart` (`kart_id`, `user_id`, `product_id`, `quantity`, `now_price`, `order_id`, `status`, `created_date`) VALUES
(1, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 2, 1, 7119, NULL, 1, '2023-08-15 21:21:02'),
(2, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 3, 1, 3229, NULL, 1, '2023-08-15 21:21:23'),
(3, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 1, 1, 7209, NULL, 1, '2023-08-15 21:21:25'),
(4, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 2, 1, 7119, NULL, 1, '2023-08-15 21:21:36'),
(5, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 3, 1, 3229, NULL, 1, '2023-08-15 21:21:38'),
(6, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 3, 1, 3229, NULL, 1, '2023-08-15 21:21:41'),
(7, 'lxt6SdQ3ZBM7fgY7AAMR95Ze8uw2', 3, 1, 3229, NULL, 1, '2023-08-15 21:21:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` varchar(256) NOT NULL,
  `paypal_order_id` varchar(256) NOT NULL,
  `paypal_payer_id` varchar(256) NOT NULL,
  `paypal_payer_email` varchar(256) NOT NULL,
  `paypal_country` varchar(8) NOT NULL,
  `paypal_currency` varchar(8) NOT NULL,
  `paypal_amount` float NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `price` float NOT NULL,
  `stock` mediumint(9) NOT NULL DEFAULT 1,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `name`, `image`, `price`, `stock`, `status`, `creation_date`) VALUES
(1, 'Tarjeta de Video Gigabyte NVIDIA GeForce RTX 4060 AERO OC, 8GB 128-bit GDDR6, PCI Express 4.0', 'https://firebasestorage.googleapis.com/v0/b/appventas-339b9.appspot.com/o/grafica.jpg?alt=media&token=f05891b0-b106-402f-baa8-88894a9dcee0', 7209, 18, 1, '2023-08-07 23:38:53'),
(2, 'Procesador AMD Ryzen 9 7900 Radeon Graphics, S-AM5, 3.70GHz, 12-Core, 64MB L3 Cache', 'https://firebasestorage.googleapis.com/v0/b/appventas-339b9.appspot.com/o/procesador.jpg?alt=media&token=2b3b7589-d1b8-424f-8e71-2b91393473ad', 7119, 9, 1, '2023-08-07 23:38:53'),
(3, 'SSD XPG GAMMIX S70, 1TB, PCI Express 4.0, NVMe, M.2', 'https://firebasestorage.googleapis.com/v0/b/appventas-339b9.appspot.com/o/ssd.jpg?alt=media&token=81551f9d-d3e0-474f-9d72-dc7d79575f46', 3229, 17, 1, '2023-08-07 23:40:35');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `kart`
--
ALTER TABLE `kart`
  ADD PRIMARY KEY (`kart_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `kart`
--
ALTER TABLE `kart`
  MODIFY `kart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
