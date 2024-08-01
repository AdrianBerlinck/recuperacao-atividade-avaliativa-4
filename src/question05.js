/*Questão 05
Você deve desenvolver um programa para verificar se um baralho de cartas está viciado. 
O baralho possui 52 cartas, divididas igualmente entre quatro naipes: copas, espadas, ouros e paus.
O algoritmo deve fazer o sorteio fazer 1000 sorteios de naipes e contar quantas vezes cada naipe foi sorteado em uma série de sorteios
e verificar se algum naipe tem uma frequência maior que 30%. Se houver, o programa deve indicar que o baralho pode estar viciado.*/
import leia from "readline-sync";

var paus = 0;
var copas = 0;
var ouros = 0;
var espadas = 0;
var sorteio;
for (var i = 0; i < 1000; i++) {
    sorteio = Math.floor(Math.random() * 4) +1;

    switch (sorteio) {
        case 1:
            paus++
            break;
        case 2:
            copas++
            break;
        case 3:
            ouros++
            break;
        case 4:
            espadas++
            break;
        

    }

}

console.log("NUMERO DE VEZES DOS NIPES SORTEADOS: ");
console.log(paus);
console.log(copas);
console.log(ouros);
console.log(espadas);

if(paus > 300 || copas > 300 || ouros > 300 || espadas > 300 ){
    console.log("BARALHO VICIADO");
}