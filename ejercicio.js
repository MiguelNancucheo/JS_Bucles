console.log("1. Imprimir impares 1-20 ")

for (let indice=1; indice<=20; indice++) {
    if (indice%2 != 0) {
        console.log(indice);
    }
}

console.log("=============================================")
console.log("2.  Disminuir múltiplos de 3 de 100 a 1")
for (let corr=100; corr>0; corr--) {
    if (corr%3 == 0) {
        console.log(corr);
    }
}

console.log("=============================================")
console.log("3. Imprime la secuencia: 4, 2.5, 1, -0.5, -2, -3.5 ")
 
let valor = 4;
do {
    console.log(valor)
    valor = valor -1.5
} while (valor >= -3.5);


console.log("=============================================")
console.log("4. Sigma :1 + 2 + 3 + ... + 98 + 99 + 100")

let suma = 0;
let i = 1;
while (i <= 100) {
    suma = suma + i;
    i++;
}
console.log(suma);

console.log("=============================================")
console.log("5. Factorial")

let ind = 1;
let producty = ind;
do {
    producty = producty *ind;
    ind++
} while (ind<=12);
console.log(producty);
