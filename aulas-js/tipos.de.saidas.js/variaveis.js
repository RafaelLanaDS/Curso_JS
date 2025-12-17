/*
entendo variaveis
Variaveis são "RECIPIENTES" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor 

No JS temos 3 palavras-chaves para declarar variaveis 
-> var
-> let
-> const
*/
var pote = 'bombom'
console.log(pote)

// declaraçao de variaveis 
var a,b,c
// atribuição dos valores
a = 2 // primeiro valor de a
b = 3
a += 8 // a receb mais 8 valendo 10
a = 1 // a recebe um novo valor 
c = a + b
console.log(a)

// outro exemplo

var nome, sobrenome, NomeCompleto, idade ;
nome = 'rafael'
sobrenome = 'lana'
NomeCompleto = 'Rafael lana de sousa'
idade = 23
console.log(`seu primeiro nome é ${nome}, e seu soobrenome é ${sobrenome}`)
console.log(`seu nome completo é ${NomeCompleto} e voce tem ${idade} anos`)
