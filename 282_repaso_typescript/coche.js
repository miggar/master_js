"use strict";
var Coche = /** @class */ (function () {
    function Coche() {
        this._color = "GRIS";
        this._modelo = "turismo";
        this._velocidad = 0;
    }
    // getters and setters -----\
    Coche.prototype.getColor = function () {
        return this._color;
    };
    Coche.prototype.setColor = function (color) {
        this._color = color;
    };
    Coche.prototype.getModelo = function () {
        return this._modelo;
    };
    Coche.prototype.setModelo = function (value) {
        this._modelo = value;
    };
    Coche.prototype.getVelocidad = function () {
        return this._velocidad;
    };
    Coche.prototype.setVelocidad = function (value) {
        this._velocidad = value;
    };
    // -------------------------/
    Coche.prototype.acelerar = function () {
        this._velocidad++;
    };
    Coche.prototype.frenar = function () {
        if (this._velocidad > 0)
            this._velocidad--;
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor("ROJO");
console.log("El coche 1 es de color: %s", coche.getColor());
