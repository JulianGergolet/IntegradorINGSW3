SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `transaccion` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `transaccion` (`id`, `descripcion`, `precio`) VALUES
(1, 'mariana', '10'),
(2, 'marianasss', '10'),
(3, 'mari', '10'),
(4, 'julian', '10');

ALTER TABLE `transaccion`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `transaccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

