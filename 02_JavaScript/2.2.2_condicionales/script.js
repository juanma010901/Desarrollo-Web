// Ejercicio 0

function bellisimo(input) {
    if(input === "si") {
        return(`Ciertamente`)
    } else if (input === "no") {
        return(`No te creo`)
    } else {
        return(`Que fue esa respuesta?`)
    }
}

function ejercicio0() {
    let valorIngresado = document.getElementById("inputEjercicio0").value.toLowerCase();
    let resultado = bellisimo(valorIngresado);
    let resultado1 = document.getElementById("resultado0");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

// Ejercicio 1

function divisibleEntreDos(num) {
    if (parseFloat(num) % 2 === 0) {
        return("Es divisible entre 2");
    } else {
        return("No es divisible entre 2");
    }
}

function ejercicio1(){
    let valorIngresado = document.getElementById("inputEjercicio1").value;
    let resultado = divisibleEntreDos(valorIngresado);
    let resultado1 = document.getElementById("resultado1");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

//  Ejercicio 2

function numeroPar(num) {
    if (parseFloat(num) % 2 === 0) {
    return("Es par");
    } else {
    return("No es par");
    }
}

function ejercicio2() {
    let valorIngresado = document.getElementById("inputEjercicio2").value;
    let resultado = numeroPar(valorIngresado);
    let resultado1 = document.getElementById("resultado2");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;    
}

// Ejercicio 3

function ganarPremio(num) {
    if (parseFloat(num) === 1000) {
        return("Ganaste un premio");
    } else {
        return("Lo sentimos, sigue participando");
    }
}

function ejercicio3 () {
    let valorIngresado = document.getElementById("inputEjercicio3").value;
    resultado = ganarPremio(valorIngresado);
    resultado3 = document.getElementById("resultado3");
    resultado3.innerHTML = "";
    resultado3.innerHTML = resultado;
}

// Ejercicio 4

function numeroMenor(num1, num2) {
    if ((parseFloat(num1) > (parseFloat(num2)))) {
        return("El número " + num1 + " es mayor que el número " + num2);
    } else if ((parseFloat(num1) < (parseFloat(num2)))) {
        return("El número " + num1 + " es menor que el número " + num2);
    } else {
        return("Los números " + num1 + " y " + num2 + " son iguales");
    }
}

function ejercicio4 () {
    let valorIngresado1 = document.getElementById("inputEjercicio4-1").value;
    let valorIngresado2 = document.getElementById("inputEjercicio4-2").value;
    let resultado = numeroMenor(valorIngresado1, valorIngresado2);
    let resultado1 = document.getElementById("resultado4");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

// Ejercicio 5

function numeroMayor(num5, num6, num7) {
    if (parseFloat(num5) > parseFloat(num6) && parseFloat(num5) > parseFloat(num7)) {
        if(parseFloat(num6) === parseFloat(num7)) {
            return("El número mayor es el: " + num5 + ". " + "Y el número: " + num6 + " está repetido")
        }
        return("El número: " + num5 + " es el mayor"); 
    } else if (parseFloat(num6) > parseFloat(num5) && parseFloat(num6) > parseFloat(num7)) {
        if(parseFloat(num5) === parseFloat(num7)) {
            return("El número mayor es el: " + num6 + ". " + "Y el número: " + num5 + " está repetido")
        }
        return("El número: " + num5 + " es el mayor");
    } else if (parseFloat(num7) > parseFloat(num5) && parseFloat(num7) > parseFloat(num6)) {
        if(parseFloat(num5) === parseFloat(num6)) {
            return("El número mayor es el: " + num7 + ". " + "Y el número: " + num6 + " está repetido")
        }
        return("El número: " + num7 + " es el mayor");
    } else if (parseFloat(num5) === parseFloat(num6) && parseFloat(num6) === parseFloat(num7)){
        return("Todos los números iguales");
    } else if (parseFloat(num5) === parseFloat(num6)) {
        return("El número menor es el: " + num7 + ". " + "Y el número: " + num5 + " está repetido")
    } else if (parseFloat(num6) === parseFloat(num7)) {
        return("El número menor es el: " + num5 + ". " + "Y el número: " + num6 + " está repetido")
    } else if (parseFloat(num5) === parseFloat(num7)) {
        return("El número menor es el: " + num6 + ". " + "Y el número: " + num5 + " está repetido")
    } 
}

function ejercicio5() {
    let valorIngresado1 = document.getElementById("inputEjercicio5-1").value;
    let valorIngresado2 = document.getElementById("inputEjercicio5-2").value;
    let valorIngresado3 = document.getElementById("inputEjercicio5-3").value;
    let resultado = numeroMayor(valorIngresado1, valorIngresado2, valorIngresado3);
    let resultado1 = document.getElementById("resultado5");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;

}

// Ejercicio 6

function diaSemana (dia) {
    if (dia === "lunes") {
        return("Hoy es lunes");
    } else if (dia === "viernes") {
        return("Hoy es viernes");
    } else if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
        return("Hoy es fin de semana");
    } else {
        return("Hoy es un dia en medio de la semana laboral");
    }
}

function ejercicio6() {
    let valorIngresado = document.getElementById("inputEjercicio6").value.toLowerCase();
    let resultado = diaSemana(valorIngresado);
    let resultado1 = document.getElementById("resultado6");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

// Ejercicio 7

function calificar(input) {
    if(parseFloat(input) >= 1 && parseFloat(input) <= 10) {
        if(parseFloat(input) < 6) {
            return(`Reprobado`);
        } else if(parseFloat(input) >= 6 && parseFloat(input) <= 8){
            return(`Regular`);
        } else if(parseFloat(input) > 8 && parseFloat(input) <= 9){
            return(`Bien`);
        } else {
            return(`Excelente`);
        }
    } else {
        return(`Fuera de rango`)
    }
}

function ejercicio7() {
    let valorIngresado = document.getElementById("inputEjercicio7").value;
    let resultado = calificar(valorIngresado);
    let resultado1 = document.getElementById("resultado7");
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

// Ejercicio 8

function precioHelado(input) {
    let precioHelado = 50;
    let precioOreo = 10;
    let precioKitkat = 15;
    let precioBrownie = 20;
    if(input == "oreo") {
        return(`El precio de su helado es de: ${precioHelado+precioOreo}`);
    } else if (input == "kitkat") {
        return(`El precio de su helado es de: ${precioHelado+precioKitkat}`);
    } else if (input == "brownie") {
        return(`El precio de su helado es de: ${precioHelado+precioBrownie}`);
    } else {
        return(`No tenemos ese topping. El precio de su helado es de ${precioHelado}`)
    }
}

function ejercicio8() {
    let valorIngresado = document.getElementById("inputEjercicio8").value.toLowerCase();
    let resultado = precioHelado(valorIngresado);
    let resultado1 = document.getElementById('resultado8');
    resultado1.innerHTML = "";
    resultado1.innerHTML = resultado;
}

// Ejercicio 9 

function precioCurso(curso, beca) {
    let valorMesCourse = 4999;
    let valorMesCarrera = 3999;
    let valorMesMaster = 2999;
    let becaFacebook = 0.8;
    let becaGoogle = 0.85;
    let becaJosua = 0.5;
    if(curso == "course" && beca == "") {
        return(`${valorMesCourse}`)
    } else if(curso == "carrera" && beca == "") {
        return(`${valorMesCarrera}`)
    } else if(curso == "master" && beca == "") {
        return(`${valorMesMaster}`)
    } else if(curso == "course" && beca == "beca facebook") {
        return(`${valorMesCourse*becaFacebook}`)
    } else if(curso == "carrera" && beca == "beca facebook") {
        return(`${valorMesCarrera*becaFacebook}`)
    } else if(curso == "master" && beca == "beca facebook") {
        return(`${valorMesMaster*becaFacebook}`)
    } else if(curso == "course" && beca == "beca google") {
        return(`${valorMesCourse*becaGoogle}`)
    } else if(curso == "carrera" && beca == "beca google") {
        return(`${valorMesCarrera*becaGoogle}`)
    } else if(curso == "master" && beca == "beca google") {
        return(`${valorMesMaster*becaGoogle}`)
    } else if(curso == "course" && beca == "beca josua") {
        return(`${valorMesCourse*becaJosua}`)
    } else if(curso == "carrera" && beca == "beca josua") {
        return(`${valorMesCarrera*becaJosua}`)
    } else if(curso == "master" && beca == "beca josua") {
        return(`${valorMesMaster*becaJosua}`)
    }
}

function precioTotal(tipo, mensualidad) {
    let duracionCourse = 2;
    let duracionCarrera = 6;
    let duracionMaster = 12;
    if(tipo == "course") {
        return(`El precio total por los 2 meses es de: ${Math.round(parseFloat(mensualidad)*duracionCourse)}`)
    } else if(tipo == "carrera") {
        return(`El precio total por los 6 meses es de: ${Math.round(parseFloat(mensualidad)*duracionCarrera)}`)
    } else if(tipo == "master") {
        return(`El precio total por los 12 meses es de: ${Math.round(parseFloat(mensualidad)*duracionMaster)}`)
    }
}

function ejercicio9() {
    let valorIngresado1 = document.getElementById("inputEjercicio9-1").value.toLowerCase();
    let valorIngresado2 = document.getElementById("inputEjercicio9-2").value.toLowerCase();
    let resultado = precioCurso(valorIngresado1, valorIngresado2);
    let resultadoMensual = "";
    if(valorIngresado2 == ""){
        resultadoMensual = `El valor mensual de esta modalidad es de: ${Math.round(resultado)}`
    } else {
        resultadoMensual = `El valor mensual de esta modalidad con Beca es de: ${Math.round(resultado)}`
    }
    let resultado1 = document.getElementById("resultado9");
    resultado1.innerHTML= "";
    resultado1.innerHTML = resultadoMensual;
    let resultado2 = document.getElementById("resultado91");
    let resultadoTotal = precioTotal(valorIngresado1, resultado);
    resultado2.innerHTML= "";
    resultado2.innerHTML = resultadoTotal;
}

// Ejercicio 10

function calcularTotal(tipoVehiculo, distancia, litros) {
    let kmMoto = 0.1;
    let kmCoche = 0.2;
    let kmAutobus = 0.5;
    let recargo = 0;
    if(parseFloat(litros) > 0 && parseFloat(litros) <= 100 ) {
        recargo+=5;
    } else {
        recargo+=10;
    }
    if(tipoVehiculo == "moto") {
        return(`El costo Total es de: ${(kmMoto*distancia)+recargo}`)
    } else if(tipoVehiculo == "coche") {
        return(`El costo Total es de: ${(kmCoche*distancia)+recargo}`)
    } else if(tipoVehiculo == "autobus") {
        return(`El costo Total es de: ${(kmAutobus*distancia)+recargo}`)
    }
}

function ejercicio10() {
    let tipoVehiculo = document.getElementById("inputEjercicio10-1").value.toLowerCase();
    let distancia = document.getElementById("inputEjercicio10-2").value;
    let litros = document.getElementById("inputEjercicio10-3").value;
    let precioTotal = calcularTotal(tipoVehiculo, distancia, litros);
    let valorTotal = document.getElementById("resultado10");
    valorTotal.innerHTML = "";
    valorTotal.innerHTML = precioTotal;
}