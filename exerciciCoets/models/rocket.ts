class Rocket{
    _rocketCode: string;
    _thrusters: Thruster[]=new Array();
    
    constructor(rocketCode:string){
        this._rocketCode = (rocketCode).toUpperCase();
    }

    get rocketCode(): string{    //No fem setter de rocketCode pq no volem que es pugui canviar
        return this._rocketCode;
    }

    get thrusters(): Thruster[]{
        return this._thrusters;
    }

    set thrusters(thrusters: Thruster[]){
        this._thrusters = thrusters;
    }  
    
    addThruster(thruster:Thruster):void{
        this._thrusters.push(thruster);
    }


    displayThrusters():string{
        let text ="";
        let i;
        let resultDisplay = document.getElementById("result") as HTMLDivElement;
        for(i = 0; i < this._thrusters.length; i++){ 

            text += this._thrusters[i].displayThruster(i);           
            var divResult: any = document.createElement("div");
            divResult.innerHTML = "<br>" + "CODI: " + this._rocketCode + "<br>" + text;            
        }
        resultDisplay.append(divResult);
        return divResult;        
    }
}


// DADES COETS PER DEFECTE EN CARREGAR LA PÀGINA


var rocket1:Rocket = new Rocket("32WESSDS");
var rocket2:Rocket = new Rocket("LDSFJA32");
  

   arrayRockets.push(rocket1);  // Pugem els coets a l'Array
   arrayRockets.push(rocket2);









