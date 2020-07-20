import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string; // = 'angular-base';
  mostrarVideojuegos: boolean; // = true;
  config: object;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.mostrarVideojuegos = Configuracion.mostrarVideojuegos;
  }

  ocultaVideojuegos(value: boolean): void {
    this.mostrarVideojuegos = value;
  }

}
