import { Component, OnInit } from '@angular/core';
import { Configuracion } from './../models/configuracion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string; // = 'angular-base';
  mostrarVideojuegos: boolean; // = true;
  config: any;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.mostrarVideojuegos = Configuracion.mostrarVideojuegos;
  }

  ocultaVideojuegos(value: boolean): void {
    this.mostrarVideojuegos = value;
  }

  ngOnInit(): void {}
}
