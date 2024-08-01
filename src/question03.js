/*Questão 03
Crie um algoritmo que leia uma quantidade n de números inteiros fornecida pelo usuário e 
armazene esses números em um vetor. O algoritmo parar de solicitar valores, quando o usuário 
digitar o numero 0. Ao final, o algoritmo deve calcular e imprimir a média desses números,
 a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).*/

import leia from "readline-sync";

var inteiro = [];
var soma = 0;
var media = 0;
var maior;
var menor;
var interrupt;
var aux;

for (var i = 0; interrupt != 0; i++) {
    aux = leia.questionInt("INFORME UM NUMERO INTEIRO: ");
    if (aux != 0) {
        inteiro[i] = aux;
        soma = soma + aux;
        media = soma / inteiro.length;

        if (i == 0 || aux > maior) {
            maior = aux;
        }
        if (i == 0 || aux < menor) {
            menor = aux;
        }
    } else {
        interrupt = aux;
    }
}
console.log("MEDIA: " + media);
console.log("SOMA: " + soma);
console.log("MAIOR: " + maior);
console.log("MENOR: " + menor);