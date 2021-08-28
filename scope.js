// Scope
// Scope global
var nombre = "Eduardo";

function foo(){
    //Scope local
    var apellido = "Jami";
    return nombre + " " + apellido;
}

foo(); //Eduardo Jami

// como ver el scope?
// usando el console.log(nombre) nos regresara Eduardo
// pero si usamos console.log(apellido) nos aparecera el 
// mensaje apellido is not defined
// esto se debe a que apellido esta dentro de la funcion foo
// esto convierte a la variable local, y solo las funciones, u 
// operaciones dentro del bloque{} podran utilizarla.