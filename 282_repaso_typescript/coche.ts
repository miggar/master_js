interface CocheBase {
    getModelo(): string ;
    getVelocidad(): number;
}

class Coche implements CocheBase{
  private _color: string;
  private _modelo: string;
  private _velocidad: number;

  constructor() {
    this._color = "GRIS";
    this._modelo = "turismo";
    this._velocidad = 0;
  }

  // getters and setters -----\

  public getColor() {
    return this._color;
  }

  public setColor(color: string) {
    this._color = color;
  }

  public getModelo(): string {
    return this._modelo;
  }
  public setModelo(value: string) {
    this._modelo = value;
  }

  public getVelocidad(): number {
    return this._velocidad;
  }
  public setVelocidad(value: number) {
    this._velocidad = value;
  }
  // -------------------------/

  public acelerar() {
    this._velocidad++;
  }

  public frenar() {
    if (this._velocidad > 0) this._velocidad--;
  }
}

var coche = new Coche();

coche.setColor("ROJO");

console.log("El coche 1 es de color: %s", coche.getColor());
