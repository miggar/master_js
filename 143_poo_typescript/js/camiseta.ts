// interface
interface CamisetaBase {
    setColor(color:string):void;
    getColor():string;
}

// Decorador (añade funcionalidad a una clase)
function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function():void {
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    }
}

// Clase (molde del objeto)
@estampar("Gucci Gang")
export class Camiseta implements CamisetaBase{

    // Propiedades (características del objeto)
    private _color: string = "";
    private _modelo: string = "";
    private _marca: string = "";
    private _talla: string = "";
    private _precio: number = 0;

    constructor(
        color: string,
        modelo: string,
        marca: string,
        talla: string,
        precio: number
        ) {
        this._color = color;
        this._modelo = modelo;
        this._marca = marca;
        this._talla = talla;
        this._precio = precio;
    }
    setColor(color: string): void {
        this._color = color;
    }
    getColor(): string {
        return this._color;
    }

    // Métodos (funcionalidades del objeto)
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get modelo(): string {
        return this._modelo;
    }
    public set modelo(value: string) {
        this._modelo = value;
    }
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }
    public get talla(): string {
        return this._talla;
    }
    public set talla(value: string) {
        this._talla = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }

}

// var camiseta = new Camiseta("Blanco", "Manga corta", "Buena", "XL", 12);

// Herencia
class Sudadera extends Camiseta {
    private _capucha: boolean = false;

    public get capucha(): boolean {
        return this._capucha;
    }
    public set capucha(value: boolean) {
        this._capucha = value;
    }

}

