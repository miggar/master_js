import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora',
})
export class CalculadoraPipe implements PipeTransform {
  // dato | calculadora: otroDato
  // param1              param2
  transform(value: any, valueTwo: any): string {
    const operaciones = `
        Valores: ${value} y ${valueTwo} ->
        Suma: ${value + valueTwo} |
        Resta: ${value - valueTwo} |
        Multiplicación: ${value * valueTwo} |
        División: ${value / valueTwo}
      `;

    return operaciones;
  }
}
