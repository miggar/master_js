// Módulo
module Tienda {
  export class Ropa {
      constructor(public titulo:string){
          alert(titulo);
      }
  }

  export class Informatica{
      constructor(public titulo: string){
          alert("Tienda de tecnología: " + titulo);
      }
  }
}

import Computacion = Tienda.Informatica;
let cargar_informatica = new Computacion('Efecto2020');

// Ejemplo de decorador
function arranque(lanzar: string) {
  return function (target: Function) {
    target.prototype.lanzamiento = function (): void {
      alert(lanzar);
    };
  };
}

// Ejemplo de herencia
@arranque("Master de JavaScript")
class Programa {
  private _nombre: string;
  private _version: number;

  constructor() {
    this._nombre = "";
    this._version = 0;
  }

  public getNombre(): string {
    return this._nombre;
  }
  public setNombre(nombre: string) {
    this._nombre = nombre;
  }
  public getVersion(): number {
    return this._version;
  }
  public setVersion(version: number) {
    this._version = version;
  }
}

class EditorVideo extends Programa {
  private _timeline: number;

  constructor() {
    super();
    this._timeline = 0;
  }

  public getTimeline(): number {
    return this._timeline;
  }
  public setTimeline(timeline: number) {
    this._timeline = timeline;
  }

  public getAllData() {
    return (
      this.getNombre() + " " + this.getVersion() + " " + this.getTimeline()
    );
  }
}

var editor = new EditorVideo();

editor.setNombre("SuperPrograma");
editor.setVersion(0.1);
editor.setTimeline(4000);

console.log(editor.getAllData());

// lógica del formulario

var programas: Array<Programa> = [];

function guardar() {
  var nombre =
    (<HTMLInputElement>document.querySelector("#nombre")).value.toString() ||
    "";
  var version =
    parseFloat((<HTMLInputElement>document.querySelector("#version")).value) ||
    0;
  var programa = new Programa();

  programa.setNombre(nombre);
  programa.setVersion(version);

  programas.push(programa);

  var list = "";

  programas.forEach(function (programa, index, array) {
    list +=
      "<li><strong>" +
      programa.getNombre() +
      "</strong>" +
      programa.getVersion() +
      "</li>";
  });

  var form = <HTMLFormElement>document.querySelector("form");
  if (!!form) form.reset();

  var listado = <HTMLElement>document.querySelector("#listado");
  if (!!listado) listado.innerHTML = list;
}

// Prueba del decorador
/*
var programDecorator = new Programa();
programDecorator.lanzamiento(); // Al ser experimentales los decoradores es normal el error TS2339
*/