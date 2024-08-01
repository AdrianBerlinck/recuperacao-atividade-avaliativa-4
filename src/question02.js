/*Questão 02
Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas consoantes
esse texto ou palavra tem. Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.*/


import leia from "readline-sync";
var texto = leia.question("INFORME UM TEXTO: ");
texto = texto.toUpperCase();
var contconsoante = 0;
console.log(texto)

for(var i = 0 ; i < texto.length ; i++){
   if(texto[i] == "B" || texto[i] == "C" ||texto[i] == "D" ||texto[i] == "F" || 
   texto[i] == "G" || texto[i] == "H" || texto[i] == "J" || texto[i] == "K" || 
   texto[i] == "L" || texto[i] == "M" || texto[i] == "N" || texto[i] == "P" || 
   texto[i] == "Q" || texto[i] == "R" || texto[i] == "S" || texto[i] == "T" || 
   texto[i] == "V" || texto[i] == "W" || texto[i] == "X" || texto[i] == "Y" || 
   texto[i] == "Z"){
    contconsoante++;
   }
}
console.log("O TEXTO INFORMADO POSSUI: " +contconsoante+ " CONSOANTES.");