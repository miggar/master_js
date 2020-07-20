import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

/* Propiedades en línea en el decorador
@Component({
    selector: 'app-videojuego',
    template: `
        <div class="card-game">
            <h2>Componente de videojuego</h2>
            <ul>
                <li>GTA</li>
                <li>Prince of Persia</li>
                <li>Tekken</li>
                <li>Mario</li>
            </ul>
        </div>`,
    styles: [`
        .card-game {
            background-color: #0f644b80;
            width: fit-content;
            padding: 12px;
            border-radius: 3px;
            box-shadow: 0 1px 5px #eee;
        }`]
})*/

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css'],
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public parrafo: string;

  constructor() {
    this.titulo = 'Componente de videojuego';
    this.parrafo = 'Listado de juegos más populares';
    console.log('VideojuegoComponent cargado');
  }

  cambiarTitulo(): void {
    this.titulo = 'Nuevo título del componente';
  }

  // HOOKs....

  ngOnInit(): void {
    /* Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    Add 'implements OnInit' to the class. */
    console.log('OnInit ejecutado');
  }

  ngDoCheck(): void {
    /* Called every time that the input properties of a component or a directive are checked.
    Use it to extend change detection by performing a custom check.
    Add 'implements DoCheck' to the class. */
    console.log('DoCheck ejecutado');
  }

  ngOnDestroy(): void {
    /* Called once, before the instance is destroyed.
    Add 'implements OnDestroy' to the class. */
    console.log('OnDestroy ejecutado');
  }

}
