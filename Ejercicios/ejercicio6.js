/* Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos. */

let horas = parseInt(prompt("colocar horas"));
let minutos = parseInt(prompt("colocar minutos"));

let has= (horas*60*60);
let mas= (minutos*60);
let resultado = (has+mas);

console.log ("segundos "+ resultado);
