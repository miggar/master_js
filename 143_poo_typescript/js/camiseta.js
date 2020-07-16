"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiseta = void 0;
// Decorador (añade funcionalidad a una clase)
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        // Propiedades (características del objeto)
        this._color = "";
        this._modelo = "";
        this._marca = "";
        this._talla = "";
        this._precio = 0;
        this._color = color;
        this._modelo = modelo;
        this._marca = marca;
        this._talla = talla;
        this._precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this._color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this._color;
    };
    Object.defineProperty(Camiseta.prototype, "color", {
        // Métodos (funcionalidades del objeto)
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (value) {
            this._modelo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (value) {
            this._marca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "talla", {
        get: function () {
            return this._talla;
        },
        set: function (value) {
            this._talla = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camiseta.prototype, "precio", {
        get: function () {
            return this._precio;
        },
        set: function (value) {
            this._precio = value;
        },
        enumerable: false,
        configurable: true
    });
    Camiseta = __decorate([
        estampar("Gucci Gang")
    ], Camiseta);
    return Camiseta;
}());
exports.Camiseta = Camiseta;
// var camiseta = new Camiseta("Blanco", "Manga corta", "Buena", "XL", 12);
// Herencia
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._capucha = false;
        return _this;
    }
    Object.defineProperty(Sudadera.prototype, "capucha", {
        get: function () {
            return this._capucha;
        },
        set: function (value) {
            this._capucha = value;
        },
        enumerable: false,
        configurable: true
    });
    return Sudadera;
}(Camiseta));
