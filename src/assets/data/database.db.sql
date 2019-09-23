BEGIN TRANSACTION;
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
	`id`	INTEGER NOT NULL,
	`name`	TEXT NOT NULL,
	`price` INTEGER NOT NULL,
	PRIMARY KEY(`id`)
);
COMMIT;
BEGIN TRANSACTION;
DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
	`id`	INTEGER NOT NULL,
	`name`	TEXT NOT NULL,
	PRIMARY KEY(`id`)
);
COMMIT;
