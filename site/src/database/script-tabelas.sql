create database berserquiz;
use berserquiz;

create table usuarios (
idUsuario int primary key auto_increment,
nome varchar(120),
email varchar(120),
senha varchar(100),
idade int);
create table questoes(
idQuestao int primary key auto_increment,
pergunta varchar(100),
alternativaA varchar(80),
alternativaB varchar(80),
alternativaC varchar(80),
alternativaD varchar(80),
resposta char(1)
check (resposta = 'A' or resposta = 'B' or resposta = 'C' or resposta = 'D')
);
drop table pontos;
create table pontos(
idPontos int primary key auto_increment,
qtdPontos int,
data_registro datetime default current_timestamp,
fkUsuario int,
foreign key (fkUsuario) references usuarios(idUsuario))
;
