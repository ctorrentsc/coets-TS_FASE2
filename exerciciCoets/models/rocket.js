"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketCode) {
        this._thrusters = new Array();
        this._rocketCode = (rocketCode).toUpperCase();
    }
    Object.defineProperty(Rocket.prototype, "rocketCode", {
        get: function () {
            return this._rocketCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "thrusters", {
        get: function () {
            return this._thrusters;
        },
        set: function (thrusters) {
            this._thrusters = thrusters;
        },
        enumerable: false,
        configurable: true
    });
    Rocket.prototype.addThruster = function (thruster) {
        this._thrusters.push(thruster);
    };
    Rocket.prototype.displayThrusters = function () {
        var text = "";
        var i;
        var resultDisplay = document.getElementById("result");
        for (i = 0; i < this._thrusters.length; i++) {
            text += this._thrusters[i].displayThruster(i);
            var divResult = document.createElement("div");
            divResult.innerHTML = "<br>" + "CODI: " + this._rocketCode + "<br>" + text;
        }
        resultDisplay.append(divResult);
        return divResult;
    };
    return Rocket;
}());
// DADES COETS PER DEFECTE EN CARREGAR LA PÀGINA
var rocket1 = new Rocket("32WESSDS");
var rocket2 = new Rocket("LDSFJA32");
arrayRockets.push(rocket1); // Pugem els coets a l'Array
arrayRockets.push(rocket2);
