/*Questão 01
Escreva um algoritmo que receba 5 nomes e 5 idades do usuário, armazene essas informações em dois vetores, 
e depois exiba o nome e a idade da pessoa mais velha e da pessoa mais nova.
*/


import leia from "readline-sync";
var nome = [];
var idade = [];
var menor;
var maior;
var indicemaior;
var indicemenor;
for (var i = 0; i < 5; i++) {
    nome[i] = leia.question("\nINFORME O " + i + " NOME: ");
    idade[i] = leia.questionInt("INFORME A IDADE: ");
    if (i == 0 || idade[i] > maior) {
        maior = idade[i];
        indicemaior = i;
    }
    if (i == 0 || idade[i] < menor) {
        menor = idade[i];
        indicemenor = i;
    }
}

console.log("PESSOA DE IDADE MAIOR: " + nome[indicemaior] + " E SUA IDADE: " + idade[indicemaior]);
console.log("PESSOA DE IDADE MENOR: " + nome[indicemenor] + " E SUA IDADE: " + idade[indicemenor]);