/*Questão 04
Escreva um algoritmo que gere uma senha aleatória de comprimento especificado pelo usuário.
Você deve solicitar ao usuário o tamanho da senha e gerar de forma aleatório.
A senha deve conter uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais.*/


import leia from "readline-sync";

var tamanhosenha = leia.questionInt("INFORME O TAMANHO DA SENHA DESEJADA: ");
var indicealeatorio;
var possiveis_caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!:;<=>?@[\\]^_"
var senha = "";


for (var i = 0; i < tamanhosenha; i++) {
    indicealeatorio = Math.floor(Math.random() * possiveis_caracteres.length);
    senha = senha + possiveis_caracteres[indicealeatorio];

}
console.log("SENHA GERADA: " + senha);
