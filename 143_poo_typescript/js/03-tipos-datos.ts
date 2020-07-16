// String
let cadena: string = "Esto es un string";

// Number
let numero: number = 12;

// Boleano
let true_false: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 12;

// Arrays
let lenguajes: Array<string> = ["PHP", "JS", "CSS"];
let years: number[] = [0,1,2,3];
let indeterminado: any[] = ["uno", 2, true];

// Multiples
let cadena_number: string | number = "doce";
cadena_number = 12;

// Tipo de dato personal
type alfanumerico = string | number;
let personal: alfanumerico = "12";
personal = 12;

// let vs var
var num1 = 1,
    num2 = 2;

if(true) {
    let num1 = 10;
    var num2 = 20;
    console.log(num1, num2);    // 10 20
}
console.log(num1, num2);    // 1 20