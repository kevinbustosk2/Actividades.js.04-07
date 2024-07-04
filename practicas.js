// Ejercicio 1
let uno = 5;
let dos = uno;

uno = 10;

console.log('valor de uno, uno');
console.log('valor de dos, dos');

// <---------------------------------->

// Ejercicio 2

let Nombre = 'Julian'
let Edad = 24;
let Cumpleaños = '31/01'
let Ciudad = 'Calchin'
let Ocupacion = 'Futbolista'
let Pasatiempo = 'cantar'

console.log('Hola mi nombre es Julian, tengo 24 años de edad, naci en Calchin, Cordoba, mi cumpleaños es el 31/01, mi ocupacion es Futbolista y mi pasatiempo es cantar')

let nombre = 'Julian', edad = 24, cumpleaños = '31/01', ciudad = 'Calchin', ocupacion = 'Futbolista', pasatiempo = 'cantar';

console.log('hola, mi nombre es ${nombre}. Tengo ${edad} años y naci el ${cumpleaños}, en la ciudad de ${ciudad} y trabajo como ${ocupacion}. En mi tiempo libre, me gusta ${pasatiempo}.');

// <--------------------------------------------------------------------------------------------------------------------->

// Ejercicio 3

let textoUsuario = prompt("Por favor, ingresa un texto breve:");

if (textoUsuario !== null) {
    console.log('{$textoUsuario.length}');
} else {
    console.log("No se ingreso ningun texto.");
}

// <--------------------------------------------------------------------------------------------------------------------->

// Ejercicio 4 

let resultado;
var num1 = prompt('Ingresa numero 1');
var num2 = prompt('Ingresa numero 2');

resultado = num1 + num2;
console.log (resultado);

// <--------------------------------------------------------------------------------------------------------------------->

// Ejercicio 5 

// Almacena la cantidad de días de viaje
const diasDeViaje = 7; // Cambia este valor según tu itinerario

// Estima tu presupuesto máximo para todo el viaje
const presupuestoTotal = 500; // Cambia esto según tus recursos

// Estima cuántas comidas tendrás en total
const comidasTotales = 21; // Cambia esto según tus planes

// Calcula cuánto puedes gastar en cada comida
const gastoPorComida = presupuestoTotal / comidasTotales;

// Muestra el resultado en un mensaje de alerta
alert(`Puedes gastar $${gastoPorComida.toFixed(2)} en cada comida para que te alcance durante los ${diasDeViaje} días de viaje.`); 

// <--------------------------------------------------------------------------------------------------------------------->
