create database teste;
use teste;

create table testeProd(
id_prod int auto_increment primary key,
nome varchar(55),
valor decimal(5, 2)
);

insert into testeProd values(default, 'Teste3');
select * from testeProd;

truncate testeProd;