import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: ` <nav>
    <a routerLinkActive="active" routerLink="/home">home</a>
    <a routerLinkActive="active" routerLink="/zapatillas">zapatillas</a>
    <a routerLinkActive="active" routerLink="/videojuego">videojuego</a>
    <a routerLinkActive="active" routerLink="/cursos">cursos</a>
  </nav>`,
  styles: [
    'nav a { margin-right: 10px }',
    '.active { color:white; background:#1976d2 }',
  ],
})
export class NavigationComponent {
  constructor() {}
}
