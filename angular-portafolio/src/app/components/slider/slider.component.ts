import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// no funciona: import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  // tslint:disable-next-line: no-input-rename
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.anchura = 0;
    this.autor = {
      nombre: 'Victor Robles',
      website: 'victorroblesweb.es',
      youtube: 'Victor Robles Web',
    };
  }

  ngOnInit(): void {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura,
    });

    // El carrusel tapa la cabecera
    $('header').css({ zIndex: 1 });
  }

  lanzar(event: any): void {
    // console.log(event);
    this.conseguirAutor.emit(this.autor);
  }
}
