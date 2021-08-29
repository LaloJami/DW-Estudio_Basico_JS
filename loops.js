var estudiantes =["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
//for
for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
//for of
for (const estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}
//While
while (estudiante.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
}