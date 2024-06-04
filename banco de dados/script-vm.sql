create database projeto_varzea;
USE projeto_varzea;



CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)NOT NULL,
    senha CHAR(8)NOT NULL,
    estado VARCHAR(50)NOT NULL
    
);

create table Quiz(
idQuiz int primary key auto_increment,
nomeQuiz varchar(45),
qtdQuestoes int
);

create table Pontuacao(
idPontuacao int auto_increment,
fkUsuario int,
constraint usuarioPontuacao
foreign key (fkUsuario) references Usuario(idUsuario),
fkQuiz int,
constraint pontuacaoQuiz
foreign key (fkQuiz) references Quiz(idQuiz),
qtdacertos int,
dataHora datetime,
constraint primary key (idPontuacao, fkUsuario,fkQuiz) 
);




select * from Pontuacao;
select * from Usuario;
delete from Usuario where idUsuario= '1';

