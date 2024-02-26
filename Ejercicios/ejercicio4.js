/* En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */

let num1 = parseInt(prompt("primer número"))
let num2 = parseInt(prompt("segundo número"))
let num3 = parseInt(prompt("tercer número"))

let promedio = (num1 + num2 + num3)/3;
console.log("numeros ponidos "+ promedio);

/*parseInt()
Resumen
Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.*/