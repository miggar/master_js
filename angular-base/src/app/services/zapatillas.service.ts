import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillasService {
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike Airmax', 'Nike', 'Blanco', 190, true),
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
      new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
      new Zapatilla('Addidas Yezzy', 'Addidas', 'Gris', 180, false),
    ];
  }

  getTexto(): string {
      return 'Hola Mundo desde un Servicio';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
