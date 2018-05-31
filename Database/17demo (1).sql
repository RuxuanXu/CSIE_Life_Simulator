-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2018-05-26 12:38:51
-- 伺服器版本: 5.7.17-log
-- PHP 版本： 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `17demo`
--

-- --------------------------------------------------------

--
-- 資料表結構 `car`
--

-- --------------------------------------------------------

--
-- 資料表結構 `comment`
--

CREATE TABLE `comment` (
  `User_ID` int(5) NOT NULL,
  `Item_ID` int(5) NOT NULL,
  `Star` int(1) NOT NULL DEFAULT '0',
  `Commentary` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------


--
-- 資料表結構 `ranking`
--

CREATE TABLE `ranking` (
  `ID` int(5) NOT NULL,
  `TOTAL_Star` int(6) NOT NULL,
  `Number_of_people` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `User_ID` int(5) NOT NULL,
  `Account` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `Password` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `Gender` tinyint(1) NOT NULL,
  `Join_Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 觸發器 `user`
--

DELIMITER $$
CREATE TRIGGER `delete_birth` BEFORE DELETE ON `user` FOR EACH ROW DELETE FROM user_birthday
where user_birthday.Account=OLD.Account
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- 資料表結構 `user_birthday`
--

CREATE TABLE `user_birthday` (
  `Account` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `Year` int(4) NOT NULL,
  `Month` int(2) NOT NULL,
  `Day` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



--
-- 資料表索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`User_ID`,`Item_ID`),
  ADD KEY `item` (`Item_ID`);

--
-- 資料表索引 `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Name` (`Name`),
  ADD UNIQUE KEY `Bar_Code` (`Bar_Code`);

--
-- 資料表索引 `item_onsale`
--
ALTER TABLE `item_onsale`
  ADD PRIMARY KEY (`ID`);

--
-- 資料表索引 `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`ID`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `Account` (`Account`);

--
-- 資料表索引 `user_birthday`
--
ALTER TABLE `user_birthday`
  ADD PRIMARY KEY (`Account`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `item`
--
ALTER TABLE `item`
  MODIFY `ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
--
-- 使用資料表 AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `User_ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- 已匯出資料表的限制(Constraint)
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
