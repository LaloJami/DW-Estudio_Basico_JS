var numero = 1;
switch (numero){
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un diez!");
        break;
    case 100:
        console.log("Soy un cien!");
        break;
    default:
        console.log("No soy nada")
}
//Reto: Piedra papel o tijeras con switch
var machine = ["Piedra", "Papel", "Tijeras"];
var user = "Papel"
function Game(player){
    var i = Math.floor(Math.random()*3);
    console.log("Maquina: "+machine[i])
    switch(player + " vs " + machine[i]){
        case player + " vs " + player:
            console.log("Empate");
            break;
        case machine[0] + " vs " + machine[1]:
            console.log("Usuario Pierdes, la maquina Gana");
            break;
        case machine[0] + " vs " + machine[2]:
            console.log("Usuario Gana, la maquina Pierde");
            break;
        case machine[1] + " vs " + machine[0]:
            console.log("Usuario Gana, la maquina Pierde");
            break;
        case machine[1] + " vs " + machine[2]:
            console.log("Usuario Pierdes, la maquina Gana");
            break;
        case machine[2] + " vs " + machine[0]:
            console.log("Usuario Pierdes, la maquina Gana");
            break;
        case machine[2] + " vs " + machine[1]:
            console.log("Usuario Gana, la maquina Pierde");
            break;
    }
}