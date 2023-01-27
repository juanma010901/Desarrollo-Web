// Ejercicio Funciones
// Ejercicio 1

let salida1 = document.getElementById("resultado1");
let salida2 = document.getElementById("resultado2");
let salida3 = document.getElementById("resultado3");
let red = "🔴";
let green = "🟢";
let yellow = "🟡";

function luzRoja() {
    salida1.innerHTML = red;
}
function luzRojaOff() {
    salida1.innerHTML = "";
}
function luzVerde() {
    salida2.innerHTML = green;
}
function luzVerdeOff() {
    salida2.innerHTML = "";
}
function luzAmarilla() {
    salida3.innerHTML = yellow;
}
function luzAmarillaOff() {
    salida3.innerHTML = "";
}

function ejercicio1() {
    let input = document.getElementById("inputEjercicio1").value;
    console.log(input);
    let estados = [
    setTimeout(luzRoja,0),
    setTimeout(luzRojaOff,3000),
    setTimeout(luzVerde,3000),
    setTimeout(luzVerdeOff,6000),
    setTimeout(luzAmarilla,6000),
    setTimeout(luzAmarillaOff,9000),
    ];
    for (var i = 1; i < input; i++) {
        let repeated = [];
        repeated = repeated.concat(estados);
    }
    console.log(repeated)
    for(let i=0;i<estados.length;i++) {
        estados[i]
    }
}



