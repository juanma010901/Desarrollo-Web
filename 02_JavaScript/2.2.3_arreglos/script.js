// Ejercicio 1

function numerosAleatorios() {
    numeros = [];
    for (let index = 0; index < 10; index++) {
        numeros.push(Math.floor(Math.random() * 10));
    }
    return("El arreglo de 10 números aleatorios es: [" + numeros + "]");
}

function ejercicio1() {
    let salida = document.getElementById("resultado1");
    let resultado = numerosAleatorios();
    salida.innerHTML = "";
    salida.innerHTML = resultado;
}

// Ejercicio 2

function ejercicio2() {
    let input = document.getElementById("input2").value;
    let resultado = input.split(",");
    salida = document.getElementById("resultado2");
    salida.innerHTML = "";
    salida.innerHTML = `[${resultado}]`;
}


// Ejercicio 3

function ejercicio3() {
    minMax = [];
    let arreglo = [10,40,30,20,15,5];
    arreglo.sort(function(a, b) {
        return a - b;
    });
    let salida = document.getElementById("resultado3");
    salida.innerHTML = "";
    let resultado = `El arreglo ordenado es: ${arreglo}, El número menor es: ${arreglo[0]}, El número menor es: ${arreglo[arreglo.length-1]}`
    salida.innerHTML = resultado;
}