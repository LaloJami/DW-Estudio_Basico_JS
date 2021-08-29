# Curso básico de JavaScript

### ¿qué es Javascript?
Antes las pagínas de internet eran estáticas, no habia iteraccion entre el usuario y la página, se necesitaba que haya dinanismo. Por esta razón se creo JS.

JS es un lenguaje interpretado, orientado a objetos, debilmente tipado y dinámico.

Debilmente tipado: se pueden hacer operaciones entre distintos tipos de datos, ejemplo:
```JavaScript
4+7; //47
2+true; //3
false-3; //-3
```
Dinámico: Corre en la etapa de Runtime sin una etapa de compilacion previa
Lenguaje interpretado: El navegador lee linea por linea nuestro código al cual indica lo que tiene que hacer.

JS es backwards compatible esto quiere decir que no altera el codigo de antiguas versiones pero si deseas usar nuevas funciones de la nueva version debes migrar a esa.
### ¿Por qué JavaScript?
* JS tiene una gran comunidad
* existen muchos frameworks y librerias en JS
* Nos ayuda con el desarrollo web y app moviles
* podemos desarrollar apps de escritorio
* Sirve para el backend/IoT
## Tipos de datos en Javasript
* Tipos primitivos

|Nombre |Descripción|
|-------|-----------|
|string|Cadenas de texto|
|Number|Valores numéricos|
|Boolean|Verdadero o falso|
|Null| Tipo especial, contiene null|
|Undefined| Tipo especial, contiene undefined|

* Tipos objetos

|Nombre |Descripción|
|-------|-----------|
|Tipos predefinidos de JavaScript|date(fecha); RegExp (Expresiones regulares); Error(datos de error)|
|Tipos definidos por el programador/usuario|Funciones simples; Clases|
|Arrays|Serie de elementos o formación tipo vector o matriz. Lo consideraremos un objeto especial.|
|Onjetos especiales|Objeto global, objeto prototipo, objeto especial.

## Variables
Es la representacion de algun lugar en memoria que nosotros reservamos para poder guardar un valor
en JavaScript tenemos tres formas de declarar una variable:
* **var**: Era la forma en que se declaraban las variables hasta ECMAScript5. Ya no se usa tanto pues es de forma global y sus caracteristicas son:
    * **Se puede reiniciar:** si la variable se inicializa ```var nombre = 'Eduardo'``` y reinicializamos la misma variable con diferente valor ```var nombre = Atreus``` el último valor predomina. 
    * **Se puede reasignar:** la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: ```var nombre = 'Eduardo'``` ahora la reasignamos ```nombre = 'Atreus'``` ya no va ```var```
    * **Su alcance es función global:** inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada ```{}```) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.
    const y let es la forma en que se declaran las variables a partir de ECMAScript 6,
* **const**: sirve para declarar variables que nunca van a ser modificadas, sus caracteristicas son:
    * **No se puede reinicilizar**: es una const única no puede haber otra inicializada con el mismo nombre.
    * **No es inmutable**: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre.
* **let**: Son variables que pueden ser modificadas, se pueden cambiar.
    * **No se puede reinicilizar**: es una const única no puede haber otra inicializada con el mismo nombre.
    * **Se puede reasignar**: la variable ya inicializada le reasignamos otro valor.
    * **Su contexto de es bloque**: Solo funciona dentro de un bloque ```{}```, fuera de ello no.

## Funciones
Las funciones son tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones:
* Declarativas / statement
* Expresivas / expresion

Ambas pueden llevar parámetros, que son datos que necesitan para ejecutarse.
cada parámetro va separado por una coma. Cada instrucción que tenga la función debe terminar con ```;```. Si queremos que una funciión nos dé un número o dato tenemos ue usar la siguiente sintaxis:
```JavaScript
return //el dato que queremos que regrese

//declarativas
function nombre_de_la_funcion (Parametros_de_la_funcion){
    //...instrucciones...
}
//Ejemplo
function suma(a,b) {
    return a + b;
}
```
Las funciones de expresión son aquellas que guardamos en una variable, por lo tanto, no es necesario nombrarlas.

```JavaScript
//expresion
var nombre_variable = function (Parametros_de_la_funcion){
    //...instrucciones...
}
//Ejemplo
var suma = function (a,b) {
    return a + b;
}
```
## Scope
Es el alcance que tiene la variable, es decir, si la variable es global esta estara disponible para todas las funciones del script, en cambio si es local, su alcance sera solo para las funciones dentro del bloque ```{}```.
## Hoisting
El Hoisting es un proceso del compilador de JavaScript, que consiste en que la declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, para su procesamiento, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined, ya que la variable sí fue almacenada en memoria, pero no se le asigno un valor hasta despues de su ejecución.
Ejemplo
```JavaScript
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Aaron";
```
El output de este codigo seria el siguiente:
```JavaScript
Hola undefined
```
Debido a que como lo hemos dicho, la variable se tomo en cuenta y se le asigno memoria, sin embargo, el compilador no la inicializo y se le dio el valor de undefined, y con ese valor se ingreso a la funcion, y ya despues de correr la funcion se le asigno el valor.
Este comportamiendo se puede entender facilmente si se comprenden estos dos puntos esenciales:
* Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
* La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

En base al segundo punto, fue por eso que se cometio el error de usar la variable antes de inicializarla, pues sin problema el compilador le asigna memoria, pero no el valor hasta despues.

Basicamente por pasos, lo que hizo el compilador fue esto:
Tenemos el codigo asi:
```JavaScript
saludo();

function saludo() {
    console.log("Hola " + nombre);
}

var nombre = "Aaron";
```
1. El compilador toma las funciones y variables y las “sube” en el codigo, sin inicializar variables:
```JavaScript
var nombre;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

var nombre = "Aaron";
```
2. Le asigna memoria a la variable y le da el valor de undefined al suceder la asignacion de memoria
```JavaScript
var nombre = undefined;

function saludo() {
    console.log("Hola " + nombre);
}

saludo();

nombre = "Aaron";
```
Y como hemos visto, la variable se asigna como *undefined* y posteriormente su utiliza al llegar a la linea:
```JavaScript
saludos()
```
pues ahi lo que hace es ejecutar la funcion que ya fue procesada, pero con un valor de la variable que aun no se le asigno, quedando como undefined.
* Despues de correr la funcion, le asigna el valor correcto a la variable ya declarada:
```JavaScript
var nombre = "Aaron";

function saludo() {
    console.log("Hola " + nombre);
}

saludo();
```
Pero ya es demasiado tarde, pues la funcion ya fue ejecutada.

Es por eso que se tiene **como buena practica declarar e inicializar tanto variables como funciones al inicio de nuestro programa, sin importar donde sean utilizadas, pues de esta manera se evita usarlas antes de ser inicializadas**.

Debemos saber que el hoisting solo sucede con las palabras claves var y function, por lo tanto esto nos dice que solo se da en las versiones de ECMAScript 5 o Inferiores, ya que en la version 6 y superiores se permite la declaracion de variables con let y const, que son dos nuevas variables que no activan hoisting.

## Coerción

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
* **Coerción implícita**: es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
* **Coerción explicita**: es cuando obligamos a que cambie el tipo de valor.
## Valores: Truthy y Falsy
Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True.
* Falsy

    * Boolean() —> sin ningun valor es false
    * Boolean(0) —> false
    * Boolean(null) —> false
    * Boolean(NaN) —> false // NaN es Not and Number
    * Boolean(Undefined) —> false
    * Boolean(false) —> false
    * Boolean("") —> false
* Truthy

    * Boolean(1) —> true //cualquier numero que no sea igual a cero es true
    * Boolean(“a”) —> true
    * Boolean(" ") —> true // siendo un espacio el valor es true
    * Boolean([]) —> true // un array nos da un true
    * Boolean({}) —> true // un objeto nos da el valor de true
    * Boolean(function() {}) —> true //una funcion tambien es true
    * Boolean(true) —> true

Todo esto lo vamos a usar en condiciones esto valida si es verdadero o falso para ejecutar cierta acción.

## Operadores: Asignacio, Comparación y Aritméticos.
**Operador de asignación**

|Simbolo|Descripción|
|-------|-----------|
|=|operador de asignación|

**Operadores de comparación**
|Simbolo|Descripción|
|-------|-----------|
|==|igual que|
|=== |estrictamente igual que|
|> or >= or >== |Mayor o mayor igual que|
|< or <= or <==|Menor o menor igual que|
|!= or !==|diferente que|

**Operadores aritméticos**
|Simbolo|Descripción|
|-------|-----------|
|+|operador suma, este se utiliza para concatenar dos cadenas de texto|
|-|operador resta|
|*|operador de multiplicación|
|/|operador de división|
|%|operador de modulo|
|**|operador de potenciación|

**Operadores lógicos**
tambien se les conoce como operadores binarios. por que toman dos valores y generan un resultado.
|Simbolo|Descripción|
|-------|-----------|
|!|Not niega un valor|
|&&|AND|
|\|\||OR|

## Condicionales: if, else, else if
Son reglas que aplicamos nosotros para validar si algo es verdadero o falso y generar acciones con esto.

```JavaScript
var edad = 18;

if (edad === 18){
    console.log("Puedes votar por primera vez.");
} else if (edad > 18) {
    console.log("Puedes votar.");
} else {
    console.log("Aún no puedes votar.")
}
```
un condicional que actua como un if es el siguiente
```JavaScript
// condition ? true : false;
var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno"
```
## Arrays
Es un tipo de estructura de datos, objetos. Puede guardar datos distintos dentro, los guarda en forma de lista.
Los elementos del array se cuentan desde cero
Tenemos metodos que nos ayudan a mutar/modificar nuestros arrays.

* **.lenght** devuelve la longitud del array.
* **.push()** agrega elementos al final de array
* **.pop()** elimina un elemento del array
* **.unshift()** agrega un elemento del array, pero lo agrega en el primer lugar
* **.shift()** elimina el elemento que está en el inicio del array
* **.indexOf()** devuelve la posición de un elemento del array
## Loops: For y For...of
Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de loops.
* **for** recorre un bloque de código varias veces
* **for/in** recorre las propiedades de un objeto
* **for/of** recorre los valores de un objeto 
* **while** recorre un bloque de código mientras se cumple una condición específica
* **do/while** también recorre un bloque de código mientras se cumple una condición específica.

## Objetos

Es una representación abstracta de un objeto en la vida real, sin embargo, también puede entenderse como un contenedor de datos.
Un ejemplo de objeto en JS es el siguiente:
```JavaScript
//Un objeto con tres propiedades
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
```
Para llamar a una propiedad del objeto seria 
```JavaScript
miAuto.marca //"Toyota"
```
Se pueden agregar propiedades que van a ser una función, se les llama métodos de objetos.

**¿Quién es this?**
Es una variable que hace referencia al objeto. En este caso: this = miAuto.
### Función constructora
Nos permite crear objetos de forma rapida y facil.
```JavaScript
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
```
para crear un objeto con relacion al template de la funcion construida anteriormente seria
```JavaScript
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
```
## Metodos de recorridos de Arrays
* **.filter** : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) y devolverlos en un nuevo array.

```JavaScript
var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);
```

* **.map** : crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
```JavaScript
var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);
```
* **foreach()** : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
```JavaScript
listaAutos.forEach(function (auto) {
    console.log(auto.marca);
});
```
* **some()** : Comprueba si al menos un elemento del array cumple con la condición que le damos, nos da un True o False
```JavaScript
var autosViejos = listaAutos.some(function(auto){
    return auto.annio <= 2018;
});
```
### Diferencia entre find y filter
**El método find ()** devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

**El método filter ()** devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.


