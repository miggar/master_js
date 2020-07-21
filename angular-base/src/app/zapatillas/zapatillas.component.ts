import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
})
export class ZapatillasComponent implements OnInit {
  titulo = 'Componente de zapatillas';
  zapatillas: Array<Zapatilla>;
  marcas: string[];
  color: string;
  miMarca: string;

  constructor() {
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 'Nike', 'Blanco', 190, true),
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
      new Zapatilla('Addidas Yezzy', 'Addidas', 'Gris', 180, false),
    ];
  }

  ngOnInit(): void {
    // console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas(): void {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });
    // console.log(this.marcas);
  }

  showMiMarca(): void {
    if (!!this.miMarca) {
      alert(this.miMarca);
    }
  }

  addMarca(): void {
    if (this.marcas.indexOf(this.miMarca) < 0) {
      this.marcas.push(this.miMarca);
    }
  }

  borrarMarca(indice): void {
    // delete this.marcas[indice];
    this.marcas.splice(indice, 1);
  }

  onBlur(): void {
    console.log('has salido del input');
  }
  
}
