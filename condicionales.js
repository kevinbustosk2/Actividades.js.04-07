("----------------------CLASE IF - IF/ELSE");

/* Las Funciones Condicionales de JavaScript son una herramienta que posibilita la toma de decisiones y permite realizar acciones de acuerdo a la entrada de información que reciba. 

sentencia if... se usa, principalmente, para tomar decisiones. Permite que, si la condición es verdadera (true), se ejecute un código.

Sintaxis De La Función if...
*/

if (condición) {
  // Si la condición resulta verdadera, ejecuta este código.
}

/* Sin embargo, la Función Condicional más común es if… else. Con esta, nos aseguramos que, cuando una condición se cumple (es igual a true), retornemos una cosa. Sino (si es false), retornemos otra. */

if (condición) {
  // Si la condición es true, ejecuta este código.
} else {
  // Sino, ejecuta este otro código (la condición es false).
}

/* 
Ejemplo. 

Si hiciéramos una app para evaluar a las personas que llegan a una guardia en un hospital, podríamos escribir el siguiente código que organice la atención de los pacientes en función de su urgencia:
*/

let temperatura = prompt("Ingrese su temperatura: ");

if (temperatura >= 37.5) {
  console.log("tenes temperatura alta");
} else {
  console.log("tenes temperatura baja");
}

/* 
La página Code to Graph te permite pegar tu código para ver cómo es el camino lógico de forma gráfica.

https://crubier.github.io/code-to-graph
*/
("-----------------------------------------");

/* 
Anidar if... else

Las Estructuras Condicionales de tipo if...else pueden anidarse para generar distintos caminos según el input del usuario.


Aspectos Importantes A Tener En Cuenta

El código se lee y ejecuta de arriba para abajo. Por lo tanto, el orden es muy importante a la hora de codear, tanto a la hora de declarar Variables como de generar las Estructuras Condicionales.

Las Estructuras Condicionales de tipo if...else pueden anidarse, unas dentro de otras, para:

- Generar múltiples bifurcaciones en función del objetivo del proyecto.
- Mostrar un único camino lógico a cada usuario.
*/

//Ejemplo:

let edad = int(prompt("Ingrese su edad: "));

if (edad >= 21) {
  console.log("podes ingresar al bar.");
  let numeroSecreto = 10;
  let loQueDiceElUsuario = int(prompt("cual es el numero secreto?"));
  if (loQueDiceElUsuario === numeroSecreto) {
    console.log("podes ingresar al bar y tambien a la fiesta secreta.");
  } else {
    consoel.log(
      "podes quedarte en el bar, pero no ingresar a la fiesta secreta"
    );
  }
} else {
  console.log("No podes ingresar al bar, solo se aceptan +21.");
}

("----------------------------------------");
/* 
else... if

else... if es un recurso para poder anidar caminos intermedios entre el if y el else final. Una vez que se toma uno de los caminos, se completa el bloque lógico.
*/

//Sintaxis:

if (condicion1) {
  // Si es true, se ejecuta este código.
} else if (condicion2) {
  // Si es true, se ejecuta este código.
} else {
  // Sino, se ejecuta este código.
}

/* 
Siguiendo el ejemplo del bar, si un usuario puede pasar al bar si tiene 18 años, pero no puede tomar alcohol hasta ser mayor de edad a los 21, podríamos escribir el siguiente código: 
*/

let edad1 = int(prompt("ingrese su edad: "));

if (edad1 >= 21) {
  console.log("podes ingresar al bar y tomar alcohol.");
} else if (edad1 < 21 || edad1 >= 18) {
  console.log("podes ingresar al bar, pero no tomar alcohol");
} else {
  console.log("no podes ingresar al bar");
}

/* 
PSEUDOCODIGO

Dejar comentarios en el código es una de las prácticas más recomendadas a la hora de programar, sobre todo en proyectos escalables o colaborativos. Se usa para describir algo importante y para dejar indicaciones que puedan servir a futuro, en caso de que otro programador retome ese código.
*/

// Este es un comentario de una línea
/*
Este es un comentario multilínea
*/

//OTRO EJEMPLO CON PSEUDOCODIGO

// Preguntarle a la persona de que país procede.
// Si procede de Asia:
// Chequeamos la temperatura.
// Si procede de Europa:
// Chequeamos la temperatura.
// Sino, les damos la bienvenida.

let procedencia = prompt("De que continente venis?");
if (procedencia == "Asia") {
  console.log("pase por aqui, vamos a hacerle un chequeo");
} else if (procedencia == "Europa") {
  console.log("vamos a realizar un test");
} else {
  console.log("Bienvenido, podes ingresar al pais.");
}

("------------------------------");

/* 
Operador Ternario

El Operador Ternario es una manera de simplificar las estructuras condicionales de tipo If...else para escribirlas en una sola línea.

Sintaxis De Los Operadores Ternarios

Los Operadores Ternarios tienen una estructura con 3 Argumentos:

- Una condición
- Un signo de interrogación (?)
- Los dos caminos posibles, separados por dos puntos (:)

condicion ? lo que se ejecuta si es true : lo que se ejecuta si es false.
*/

//Ejemplo

let numeroDeTragos = 0;

numeroDeTragos > 0
  ? console.log("Usted no puede manejar")
  : console.log("podes seguir manjando.");

if (numeroDeTragos > 0) {
  console.log("Usted no puede manejar");
} else {
  console.log("podes seguir manjando.");
}

/*   Estructura condicional Switch()

La estructura condicional Switch() es otra alternativa para tomar decisiones en nuestro programa. Es muy útil cuando sabemos de antemano cuáles son los posibles datos a evaluar. Esto nos permite generar un código más conciso y con una performance mucho más óptima respecto del condicional if...else.

Esta estructura tiene la siguiente sintaxis: */

let num = 3;
switch (num) {
  case 1:
    console.log("Entramos al primer case.");
    break;
  case 2:
    console.log("Entramos al segundo case.");
    break;
  default:
    console.log(
      "Esto se muestra por defecto en el caso de no encontrar una coincidencia."
    );
}
//Entramos al segundo case

/* Como podemos observar, esta switch() un Parámetro y, dependiendo de su valor, entraremos a los diferentes case. */

/* break, por su parte, es una palabra reservada que se usa para salir del bloque switch() una vez que se haya encontrado una coincidencia.

Por último, la palabra reservada default indica que, en caso de que no haya una coincidencia, entraremos en esta sección del código.

Veamos el siguiente ejemplo para definir qué estructura condicional es más conveniente.

Acá se nos pide que, según un número del 1 al 7, informemos a qué día de la semana corresponde.

Resolución if: */

let dia = parseInt(prompt("Ingrese un numero."));

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === 5) {
  console.log("Viernes");
} else if (dia === 6) {
  console.log("Sabado");
} else if (dia === 7) {
  console.log("Domingo");
} else {
  console.log("INGRESA UN VALOR ENTRE 1 - 7 LA PROXIMA VEZ.");
}

//Resolución switch():

let dia1 = parseInt(prompt("Ingrese un numero."));

switch (dia1) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("INGRESA UN VALOR ENTRE 1 - 7 LA PROXIMA VEZ.");
}

("----------------------------");

/* 
Mis Primeras Condicionales
En este ejercicio deberás:

Escribir una sentencia if que siempre ejecute su bloque de código.
Escribir una sentencia if que nunca ejecute su bloque de código.
Escribir una sentencia que le pregunte al usuario cómo está y, si responde que está "triste", le deje un mensaje de aliento en la consola.
Escribir una sentencia que le pregunte al usuario cuál es el número secreto.
⚠️ Importante: Solamente deberás advertirle con un mensaje en caso de que esté equivocado.
Pedir al visitante que ingrese una contraseña cuando visite el sitio. Si es correcta, redirigilo usando esta línea de código:

 window.location = "http://www.google.com"

*/
/* 
Par O Impar
Pedile al usuario que ingrese un número para que tu programa evalúe si es par o impar. Usá la estructura condicional if...else.
*/
/* 
Agregá Caminos
¿Recordás este código?:

let edad=prompt("Ingrese su edad.")
if(edad<18) {
alert("No puede pasar al bar.")
} 
else if(edad<21){
alert("Puede pasar al bar, pero no puede tomar alcohol.")
} 
else{
alert("Puede pasar al bar y tomar alcohol.")
}

Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:

Si la edad es negativa, que se muestre en la consola este mensaje: "Error, su edad no es válida."
⚠️Importante: No se deberá mostrar ningún otro mensaje.
Si tiene 21 años, además de darle la bienvenida, felicitalo por haber llegado a la mayoría de edad.
Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?".
*/
