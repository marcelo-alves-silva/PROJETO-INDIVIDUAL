CREATE DATABASE projeto_individualprojeto_individual;


USE projeto_individual;

show tables;

CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)NOT NULL,
    senha CHAR(8)NOT NULL,
    estado VARCHAR(50)NOT NULL
    
);

