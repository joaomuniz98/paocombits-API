
-- create_tables.sql

-- Tabela customers
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content LONGTEXT,
    thumbnail VARCHAR(800),
    createdBy VARCHAR(255),
    createdOn DATETIME
);



