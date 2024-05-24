USE projeto_varzea;

show tables;

CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)NOT NULL,
    senha CHAR(8)NOT NULL,
    estado VARCHAR(50)NOT NULL
    
);

create table timeusuario(
idtime int primary key auto_increment,
nomeT varchar (45),
qtdjogadores varchar(20),
estadoT varchar(5),
dtcriacao date
);

create table partidas(
idpart int primary key auto_increment,
times varchar(100),
endpart varchar(45),
dthorapart datetime
);

select * from Usuario;
delete from Usuario where idUsuario= '21';
