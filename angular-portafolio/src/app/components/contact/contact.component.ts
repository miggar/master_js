import { Component, OnInit } from '@angular/core';
// no funciona: import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 800
    });

    // El carrusel tapa la cabecera
    $('header').css({ zIndex: 1 });
  }

}
