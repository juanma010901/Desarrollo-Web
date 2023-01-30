// Ejercicio Funciones
// Ejercicio 1

function ejercicio1f() {
    let colors = ["🔴","🟢","🟡","🔴"];

    for(let i=0; i<=3; i++) {
       alert(`${colors[i]}`);
       console.log(`${colors[i]}`);
    }
}

// Ejercicio 2

function rojo() {
    document.body.innerHTML = "";
    document.write(`<img src='assets/rojo.jpg' alt='rojo' width='400px'>
        <button type="submit" onclick="verde()">Semáforo</button>
    `);
    document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
}

function verde() {
    document.body.innerHTML = "";
    document.write(`<img src='assets/verde.jpg' alt='verde' width='400px'>
        <button type="submit" onclick="amarillo()">Semáforo</button>
    `);
    document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
}

function amarillo() {
    document.body.innerHTML = "";
    document.write(`<img src='assets/amarillo.jpg' alt='amarillo' width='400px'>
        <button type="submit" onclick="rojo()">Semáforo</button>
    `);
    document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
}

function ejercicio2f() {
    rojo();
}


// Ejercicio 3

function ejercicio3f() {
    let colors = ['rojo', 'verde', 'amarillo', 'rojo'];

    for(let i=0; i<colors.length; i++) {
        setTimeout(function() {
            document.body.innerHTML = "";
            document.write(`<img src='assets/${colors[i]}.jpg' alt='${colors[i]}' width='400px'>`);
        }, 2000*i);
    }
    
    setTimeout(function() {
        document.write(`<button type="submit" onclick="location.reload()">Página Principal</button>`);
    }, 8000);
}

