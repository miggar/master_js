"use strict";

var params = process.argv.slice(2);
var number1, number2, template;

if (params.length < 2)
    return errorArgv();

number1 = +params[0];
number2 = +params[1];

if ( isNaN(number1) || isNaN(number2))
    return errorArgv();

template = `
Suma: ${number1 + number2}
Resta: ${number1 - number2}
Multiplicación: ${number1 * number2}
División: ${number1 / number2}
`;

console.log(template);

function errorArgv() {
    console.error("Introduce dos números" );
}
