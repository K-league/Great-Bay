DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE auctions(
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(50) NULL, 
    current_bid INT default 0,
    PRIMARY KEY (id)
);

INSERT INTO auctions (item, current_bid)

VALUES('Kayliegh signed card',1200), ('Walter headphones', 800), ('Drew Computer', 1500)

SELECT * FROM auctions;