DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE auctions(
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(50) NULL, 
    current_bid INT default 0,
    PRIMARY KEY (id)
);