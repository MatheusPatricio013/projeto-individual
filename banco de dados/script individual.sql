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

create table pontos(
idPontos int primary key auto_increment,
qtdPontos int,
data_registro datetime default current_timestamp,
tempoDeFinalizacao int,
qtdRespostasCertas int,
fkUsuario int,
foreign key (fkUsuario) references usuarios(idUsuario))
;
select * from pontos;
select * from usuarios;

/* select para ver o top 10 */
select nome,max(qtdPontos) as 'maiorPontuacao'
from usuarios  
join pontos
on fkUsuario = idUsuario group by fkUsuario order by qtdPontos asc limit 10;

/* select para ver a % de acertos */

select idPontos,qtdRespostasCertas
from pontos
    join usuarios
    on fkUsuario = idUsuario where fkUsuario = 1 order by idPontos asc;

 select nome,max(qtdPontos) as 'maiorPontuacao'
                         from usuarios  
                                join pontos
                                    on fkUsuario = idUsuario group by fkUsuario order by max(qtdPontos) desc limit 10;


/* select para ver o historico do usuario */

select qtdPontos,data_registro,tempoDeFinalizacao
from pontos
join usuarios
        on fkUsuario = idUsuario where fkUsuario = 1 order by data_registro;
       
insert into usuarios
values (null,'Pedro','pedro@gmail.com','pedro134@',31),
(null,'Carla','carla@gmail.com','carla1344@1',22),
        (null,'Marcos','marquin@gmail.com','mamarcus232@',21),
        (null,'Matheus','matheus@gmail.com','123Mzika@',33),
        (null,'Angela','angelasilva@gmail.com','angela13@g2',27),
        (null,'Tim Maia','timganei@gmail.com','timmais@33',36),
        (null,'Monica','monicachaves@outlook.com','monikaaa@',14),
        (null,'Jefrey','jefrey22@outlook.com','@MJefrey22',77),
        (null,'Andrade','andradeee3@gmail.com','andr@adE2',24),
        (null,'Pamela','pampam@gmail.com','pampampampam133@',19);
        delete from pontos where idPontos = 10;
        select * from pontos;
insert into pontos
values (null,189,default,8,4,1),
    (null,122,default,6,4,2),
    (null,232,default,7,7,3),
    (null,313,default,8,8,5),
    (null,224,default,7,4,6),
    (null,333,default,10,7,7),
    (null,337,default,11,8,8),
    (null,171,default,15,3,9),
    (null,11,default,15,1,10);