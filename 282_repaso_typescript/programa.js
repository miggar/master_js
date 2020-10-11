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
// Módulo
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert("Tienda de tecnología: " + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Computacion = Tienda.Informatica;
var cargar_informatica = new Computacion('Efecto2020');
// Ejemplo de decorador
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
// Ejemplo de herencia
var Programa = /** @class */ (function () {
    function Programa() {
        this._nombre = "";
        this._version = 0;
    }
    Programa.prototype.getNombre = function () {
        return this._nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this._nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this._version;
    };
    Programa.prototype.setVersion = function (version) {
        this._version = version;
    };
    Programa = __decorate([
        arranque("Master de JavaScript")
    ], Programa);
    return Programa;
}());
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        var _this = _super.call(this) || this;
        _this._timeline = 0;
        return _this;
    }
    EditorVideo.prototype.getTimeline = function () {
        return this._timeline;
    };
    EditorVideo.prototype.setTimeline = function (timeline) {
        this._timeline = timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return (this.getNombre() + " " + this.getVersion() + " " + this.getTimeline());
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre("SuperPrograma");
editor.setVersion(0.1);
editor.setTimeline(4000);
console.log(editor.getAllData());
// lógica del formulario
var programas = [];
function guardar() {
    var nombre = document.querySelector("#nombre").value.toString() ||
        "";
    var version = parseFloat(document.querySelector("#version").value) ||
        0;
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(version);
    programas.push(programa);
    var list = "";
    programas.forEach(function (programa, index, array) {
        list +=
            "<li><strong>" +
                programa.getNombre() +
                "</strong>" +
                programa.getVersion() +
                "</li>";
    });
    var form = document.querySelector("form");
    if (!!form)
        form.reset();
    var listado = document.querySelector("#listado");
    if (!!listado)
        listado.innerHTML = list;
}
// Prueba del decorador
/*
var programDecorator = new Programa();
programDecorator.lanzamiento(); // Al ser experimentales los decoradores es normal el error TS2339
*/ 
