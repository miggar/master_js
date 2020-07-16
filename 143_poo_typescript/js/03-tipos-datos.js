"use strict";
// String
var cadena = "Esto es un string";
// Number
var numero = 12;
// Boleano
var true_false = true;
// Any
var cualquiera = "hola";
cualquiera = 12;
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [0, 1, 2, 3];
var indeterminado = ["uno", 2, true];
// Multiples
var cadena_number = "doce";
cadena_number = 12;
var personal = "12";
personal = 12;
// let vs var
var num1 = 1, num2 = 2;
if (true) {
    var num1_1 = 10;
    var num2 = 20;
    console.log(num1_1, num2); // 10 20
}
console.log(num1, num2); // 1 20
