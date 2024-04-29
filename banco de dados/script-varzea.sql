CREATE DATABASE projeto_individual;

USE projeto_individual;

CREATE TABLE cadastrotime (
    idcadastrotime INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)NOT NULL,
    senha CHAR(8)NOT NULL,
    cidade VARCHAR(100)NOT NULL,
    estado VARCHAR(50)NOT NULL,
    descricao TEXT
);

CREATE TABLE Jogador (
    idjogador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    posicao VARCHAR(50),
    numero_camisa INT,
    fkcadastro INT,
    CONSTRAINT fkcadastrojogador
    FOREIGN KEY (fkcadastro) REFERENCES cadastro(idcasdastrotime)
);

CREATE TABLE cadastrotelespectador(
idtelespectador INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100)NOT NULL,
email VARCHAR(100)NOT NULL,
senha CHAR(8)NOT NULL,
telefone CHAR(10),
cidade VARCHAR(100),
estado VARCHAR(100)
);


CREATE TABLE login(
idusuario INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100),
senha CHAR(8)
);

