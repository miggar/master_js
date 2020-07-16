"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log('loaded APP');
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta("Blanco", "Manga corta", "Buena", "XL", 12);
    };
    return Main;
}());
var main = new Main();
