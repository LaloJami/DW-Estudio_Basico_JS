var edad = 18;


if (edad === 18){
    console.log("Puedes votar por primera vez.");
} else if (edad > 18) {
    console.log("Puedes votar.");
} else {
    console.log("Aún no puedes votar.")
}

// condition ? true : false;
var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"

//Reto: Juego de piedra, papel o tijeras
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijeras"
function Juego (jugador, computadora){
    if(jugador === computadora){
        console.log("Empate");
    } else{
        if(jugador===op1 && computadora===op2){
            console.log("Usuario pierde");
        } else if(jugador===op1 && computadora===op3){
            console.log("Usuario gana");
        }else if(jugador===op2 && computadora===op1){
            console.log("Usuario gana");
        }else if(jugador===op2 && computadora===op3){
            console.log("Usuario pierde");
        }else if(jugador===op3 && computadora===op1){
            console.log("Usuario pierde");
        }else if(jugador===op3 && computadora===op2){
            console.log("Usuario gana");
        }
    }
}
Juego(op1,op2)