"use strict";
var arrayRockets = new Array(); //Array coets
var arrayThrusters = new Array(); //Array propulsors de cada 
function newRocket() {
    var rocketCode = prompt("Siusplau, introdueix un codi alfanumèric de 8 caràcters");
    var codeRegex = /^[A-Z0-9]{8}$/i; // i case insensitive
    var thrustersNum;
    var i;
    if (!codeRegex.test(rocketCode)) { // Es cumpleix el format del codi?
        alert("Cal que el codi contingui 8 caràcters alfanumèrics");
    }
    else {
        if (arrayRockets.length != 0) {
            for (i = 0; i < arrayRockets.length; i++) {
                if (rocketCode == arrayRockets[i].rocketCode) { // Comprovem si el codi existeix
                    console.log(arrayRockets[i]);
                    alert("Aquest codi ja existeix");
                }
            }
        }
        var newRocket = new Rocket(rocketCode); // Creem coet  
        thrustersNum = prompt("Introdueix el número de propulsors que tindrà"); // codi ok/no repetit. Núm propulsors?          
        for (i = 0; i < thrustersNum; i++) { //Potència  per a cada propulsor
            var power = prompt("Introdueix la potència màxima del propulsor " + (i + 1));
            var newThruster = new Thruster(power); // Creem un nou propulsor
            newRocket.addThruster(newThruster); //Pugem a l'Array de propulsors
        }
        arrayRockets.push(newRocket); // Pugem a l'Array el Coet ok amb propulsors ja afegits
        console.log(arrayRockets);
        newRocket.displayThrusters(); //Cridem la funció per imprimir en pantalla            
    }
}
