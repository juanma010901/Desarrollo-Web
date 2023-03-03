// Ejercicio 1
function mensaje() {
    console.log("Este es un mensaje")
}

function ejercicio1(mensaje) {
    mensaje();
}

ejercicio1(mensaje)


// Ejercicio 2

function retornar(variable) {
    const tipo = typeof(variable);
    console.log(`El tipo de variable es: ${tipo} y la variable es: ${variable}`);
}

function ejercicio2(variable, retornar) {
    return retornar(variable);
}

ejercicio2(123, retornar)


//  Ejercicio 3

function suma(num1, num2) {
    console.log(num1 + num2);
}

function resta(num1, num2) {
    console.log(num1 - num2);
}

function multiplicacion(num1, num2) {
    console.log(num1 * num2);
}

function ejercicio3(var1, var2, operacion) {
    operacion(var1, var2);
}

let var1 = 2
let var2 = 8
ejercicio3(var1, var2, resta)


// Ejercicio 4

function mayus(mensaje) {
    console.log(mensaje.toUpperCase());
}

function minus(mensaje) {
    console.log(mensaje.toLowerCase());
}

function ejercicio4(mensaje, cambio) {
        cambio(mensaje);
}

ejercicio4("adsjkljaklsd", mayus)


// Ejercicio 5

function comparacion(vector) {
    let newVector = [];
    for (let i = 0; i < vector.length; i++) {
        vector[i] > 120 ? newVector.push(vector[i]) : false;
    }
    return(newVector);
}

function ejercicio5(vector, comparacion) {
    console.log(comparacion(vector));
}

let vector = [45, 87, 122, 99]
ejercicio5(vector, comparacion)