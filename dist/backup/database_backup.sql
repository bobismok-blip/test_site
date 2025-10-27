-- Database Backup File
-- Created: 2024-01-15 10:30:00
-- Database: test_database

CREATE DATABASE test_database;

USE test_database;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255)
);

INSERT INTO users (username, email, password) VALUES 
('testuser1', 'test1@example.com', 'TestPass123'),
('testuser2', 'test2@example.com', 'TestPass456'),
('testuser3', 'test3@example.com', 'TestPass789');

CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT,
    timestamp DATETIME
);

INSERT INTO logs (message, timestamp) VALUES 
('System started', '2024-01-15 10:00:00'),
('User logged in', '2024-01-15 10:15:30'),
('File uploaded', '2024-01-15 10:20:45');

