
const prompt = require("prompt-sync")({ sigint: true });
let numero = parseFloat(prompt("ingrese un numero, puede ser positivo o negativo: "));
if (numero > 0){
    console.log(`el numero ${numero} que ingresaste es positivo`)
}
else if(numero == 0){
    console.log(`el numero ${numero} que ingresaste es cero`)
}
else if(numero <0){
console.log(`el numero ${numero} que ingresaste es negativo`)
}
else {
    console,log(`lo que ingresaste no es un numero`)}
