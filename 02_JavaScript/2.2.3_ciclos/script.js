// Ejercicios WHILE
// Ejercicio 1

function ejercicio1() {
    let input = document.getElementById("inputEjercicio1").value;
    let i = 5;
    let vector = [];
    while(i < input ) {
        vector.push(i);
        i+=5;
    }
    let salida = document.getElementById("resultado1");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 2

function ejercicio2() {
    let input1 = document.getElementById("inputEjercicio21").value;
    let input2 = document.getElementById("inputEjercicio22").value;
    let i = 1;
    let vector = [];
    while(i <= 50) {
        if(i != input1 && i != input2) {
            vector.push(i);
        } else {
            vector.push("Lotería");
        }
        i++;
    }
    let salida = document.getElementById("resultado2");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 3

function ejercicio3() {
    let input;
    let vector = [];
    do {
        input = parseInt(prompt("Ingrese un número (0 para msalir y mostrar el resultado):"));
        vector.push(input);
    } while (input !== 0);
    let salida = document.getElementById("resultado3");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector.slice(0,vector.length-1)}]`;
}

// Ejericio 4

function ejercicio4() {
    let input;
    let vector = [];
    do {
        input = prompt("Ingrese una cadena (vacía para salir y mostar el resultado");
        vector.push(input);
    } while (input !== "");
    let salida = document.getElementById("resultado4");
    salida.innerHTML = "";
    salida.innerHTML = `"${vector.join(' ')}"`
}

// Ejercicio 5

function ejercicio5() {
    let inp;
    let input;
    let vector = [];
    do {
        inp = prompt("Ingrese un día de la semana");
        input = inp.toLocaleLowerCase();
        vector.push(input);
        if(input === "lunes") {
            alert("Con moral");
        } else if (input === "martes") {
            alert("Al menos no es lunes");
        } else if (input === "miercoles" || input === "miércoles") {
            alert("Media semana!");
        } else if (input === "jueves") {
            alert("Juernes, ya casi");
        } else if (input === "viernes") {
            alert("Último día, moral");
        } else if (input === "sabado" || input === "sábado") {
            alert("Descansito");
        } else if (input === "domingo"){
            alert("Ve a descansar, mañana es lunes");
        } else {
            alert("Qué calendario usas tú?");
        }
    } while (input !== "domingo");
}

// Ejercicios FOR
// Ejercicio 1

function ejercicio11() {
    let vector = [];
    for(let i = 0; i<50; i++){
        if(i % 2 != 0) {
            vector.push(i);
        }   
    }
    let salida = document.getElementById("resultado11");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 2

function ejercicio22() {
    let input = document.getElementById("inputEjercicio2-2").value;
    var pokemons = 
    [ 'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran-f',
    'nidorina',
    'nidoqueen',
    'nidoran-m',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb' ]
    let vector = []; 
    for(let i=4; i < input; i=i+5){
        vector.push(pokemons[i]);
    }
    let salida = document.getElementById("resultado2-2");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 3

function ejercicio33() {
    let vector = [4,"dos",8,"tres",5,9,1,"cero"];
    let resultado = [];
    for(let i=0; i < vector.length; i++) {
        if(typeof(vector[i])=="number") {
            resultado.push(vector[i]);
        }
    }
    let salida = document.getElementById("resultado3-1");
    salida.innerHTML = "";
    salida.innerHTML = `[${resultado}]`;
}
