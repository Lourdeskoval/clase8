const prompt = require("prompt-sync")({ sigint: true });
let numero = parseFloat(prompt("escribe un numero"));
let numero2 = parseFloat(prompt("escribe otro numero"));
console.log(`el numero total es ${numero+numero2}`);