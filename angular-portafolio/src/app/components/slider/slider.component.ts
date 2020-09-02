import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {
    this.anchura = 0;
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
}
