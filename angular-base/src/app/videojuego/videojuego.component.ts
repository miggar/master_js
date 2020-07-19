import { Component } from '@angular/core';

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
})
export class VideojuegoComponent {
    constructor(){
        console.log('VideojuegoComponent cargado');
    }
}
