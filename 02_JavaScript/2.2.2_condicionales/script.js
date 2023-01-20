// Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

let num = prompt("Ingresa un número:");
if (parseFloat(num) % 2 === 0) {
  alert("Es divisible entre 2");
} else {
  alert("No es divisible entre 2");
}

// Crear un programa que determine si un número introducido en un Prompt es par o no,
// la respuesta será mostrada en un Alert.

let num1 = prompt("Ingresa un número:");
if (parseFloat(num1) % 2 === 0) {
  alert("Es par");
} else {
  alert("No es par");
}

// Solicitar al usuario un número de cliente. Si el número es el 1000,
// imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje
// “Lo sentimos, sigue participando”.

let num2 = prompt("Ingresa un número");
if (parseFloat(num2) === 1000) {
    alert("Ganaste un premio");
} else {
    alert("Lo sentimos, sigue participando");
}

// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
// No considerar el caso en que ambos números son iguales.

let num3 = prompt("Ingrese un número");
let num4 = prompt("Ingrese otro número");
if ((parseFloat(num3) > (parseFloat(num4)))) {
    alert("El número " + num3 + " es mayor que el número " + num4);
} else if ((parseFloat(num3) < (parseFloat(num4)))) {
    alert("El número " + num3 + " es menor que el número " + num4);
} else {
    alert("Los números " + num3 + " y " + num4 + " son iguales");
}

// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
// el número mayor. Considerar el caso en que 2 números sean iguales.

let num5 = prompt("Ingrese un número");
let num6 = prompt("Ingrese otro número");
let num7 = prompt("Ingrese otro número");
if (parseFloat(num5) > parseFloat(num6) && parseFloat(num5) > parseFloat(num7)) {
    alert("El número " + num5 + " es el mayor");  
} else if (parseFloat(num6) > parseFloat(num5) && parseFloat(num6) > parseFloat(num7)) {
    alert("El número " + num6 + " es el mayor");
} else if (parseFloat(num7) > parseFloat(num5) && parseFloat(num7) > parseFloat(num6)) {
    alert("El número " + num7 + " es el mayor");
}
if (parseFloat(num5) === parseFloat(num6)) {
    alert("El primer número es igual al segundo");
} else if (parseFloat(num5) === parseFloat(num7)) {
    alert("El primer número es igual al tercero");
} else if (parseFloat(num6) === parseFloat(num7)) {
    alert("El segundo número es igual al tercero");
}


// Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes,
// otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo.
// Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaP = prompt("Ingrese un día de la semana:");
let dia = diaP.toLowerCase();
if (dia === "lunes") {
  alert("Hoy es lunes");
} else if (dia === "viernes") {
    alert("Hoy es viernes");
} else if (dia === "sábado" || dia === "domingo") {
    alert("Hoy es fin de semana");
} else {
    alert("Hoy es un dia en medio de la semana laboral");
}