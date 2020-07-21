"use strict";
var Thruster = /** @class */ (function () {
    function Thruster(power) {
        this._power = power;
    }
    Object.defineProperty(Thruster.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (power) {
            this._power = power;
        },
        enumerable: false,
        configurable: true
    });
    Thruster.prototype.displayThruster = function (x) {
        return " Potència màxima propulsor" + (x + 1) + " : " + this._power + "<br>";
    };
    return Thruster;
}());
// DADES PROPULSORS PER DEFECTE EN CARREGAR LA PÀGINA
var thruster1A = new Thruster(10);
var thruster2A = new Thruster(30);
var thruster3A = new Thruster(80);
var thruster1B = new Thruster(30);
var thruster2B = new Thruster(40);
var thruster3B = new Thruster(50);
var thruster4B = new Thruster(50);
var thruster5B = new Thruster(30);
var thruster6B = new Thruster(10);
arrayRockets[0].addThruster(thruster1A); // Pugem els propulsors a l'Array del coet
arrayRockets[0].addThruster(thruster2A);
arrayRockets[0].addThruster(thruster3A);
arrayRockets[1].addThruster(thruster1B);
arrayRockets[1].addThruster(thruster2B);
arrayRockets[1].addThruster(thruster3B);
arrayRockets[1].addThruster(thruster4B);
arrayRockets[1].addThruster(thruster5B);
arrayRockets[1].addThruster(thruster6B);
console.log(arrayRockets); //Imprimim Array per Consola
arrayRockets[0].displayThrusters();
arrayRockets[1].displayThrusters();
