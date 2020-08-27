import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-portafolio';

  ngOnInit(): void {
    $('#logo').on('click', (e: any) => {
      e.preventDefault();
      // $('header').css('background', 'green');
      this.toggleColorHeader();
    });
  }

  toggleColorHeader(): void {
    const color = $('header').css('background-color');
    if (/164.+53.+103/.test(color)) {
      // red => blue
      $('header').css('background-color', '');
    } else if (/103.+164.+53/.test(color)) {
      // green => red
      $('header').css('background-color', 'rgba(164, 53, 103, 0.8)'); // red
    } else {
      // blue => green
      $('header').css('background-color', 'rgba(103, 164, 53, 0.8)');
    }
  }
}
