// Cajero Automático

// Hora
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let clock = document.getElementById("clock");
    clock.innerHTML = h + ":" + m + ":" + s;
 }
 setInterval(showTime, 1000);

//Cuentas y Passwords


// PROCESO COMPLETO

// Cargar Local Storage

function bienvenida() {
    let cuentas = [
        {nombre: "Mali", saldo: 200},
        {nombre: "Gera", saldo: 290},
        {nombre: "Maui", saldo: 67}
    ];
    
    let passwords = [
        {nombre: "Mali", password: 1234},
        {nombre: "Gera", password: 1234},
        {nombre: "Maui", password: 1234}
    ];
    
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
    localStorage.setItem('passwords', JSON.stringify(passwords));    

}

// Cuentas

function mali() {
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));
    localStorage.setItem('cuenta', JSON.stringify(cuentas[0].nombre));
}

function gera() {
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));
    localStorage.setItem('cuenta', JSON.stringify(cuentas[1].nombre));
}

function maui() {
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));
    localStorage.setItem('cuenta', JSON.stringify(cuentas[2].nombre));
}


// Ingresar

function verificar(passwords,cuenta,contraseña) {
    for (let i = 0; i < passwords.length; i++) {
        if (passwords[i].nombre === cuenta && passwords[i].password === contraseña) {
            localStorage.setItem('token', `acceso permitido`);
            // alert("Contraseña correcta");
        } else if (passwords[i].nombre === cuenta && passwords[i].password !== contraseña) {
            localStorage.setItem('token', `acceso denegado`);
            // alert("Contraseña incorrecta");
        }
    }

    let token = localStorage.getItem('token');;
    
    if (token === `acceso permitido`) {
        window.location.href = "4-contra-correcta.html";
    } else if (token === `acceso denegado`) {
        location.reload(); 
    }
}

function contraseña() {
    let passwords = JSON.parse(localStorage.getItem('passwords'));
    let cuenta = JSON.parse(localStorage.getItem('cuenta'));
    let contraseña = parseInt(document.getElementById("contra").value);

    verificar(passwords,cuenta,contraseña);
    
}

// Salir

function salir() {
    localStorage.clear();
}

// Consultar Saldo

function consultarSaldo() {
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));
    let cuenta = JSON.parse(localStorage.getItem('cuenta'));
    let saldo = document.getElementById("saldo");

    for (let i=0; i<cuentas.length; i++) {
        console.log(cuentas[i].nombre);
        if (cuentas[i].nombre == cuenta) {
            saldo.innerHTML = `$${cuentas[i].saldo}`;
        }
    }
}

function consultaSaldoTotal() {

}

function consultaSaldoIngresado() {

}


// Ingresar Monto

function ingresarSaldo() {
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));
    let cuenta = JSON.parse(localStorage.getItem('cuenta'));
    let ingreso = parseInt(document.getElementById("ingreso").value);
    
    for (let i=0; i<cuentas.length; i++) {
        if (cuentas[i].nombre == cuenta) {
            // console.log(`${cuentas[i]}:${cuentas[i].saldo}`);
            if((parseInt(cuentas[i].saldo) + ingreso) > 990) {
                alert(`Excede la cantidad máxima, sólo puede ingresar: $${990-cuentas[i].saldo}`);
                location.reload();
            } else {
                cuentas[i].saldo += ingreso;
                localStorage.setItem('cuentas', JSON.stringify(cuentas));
                localStorage.setItem('saldoIngresado', ingreso);
                // console.log(cuentas);
                window.location.href = "5.2.1-nuevo-ing.html";
            }            
        }
    }
}


// Retirar Monto

function retirarSaldo() {
    let cuentas = JSON.parse(localStorage.getItem('cuentas'));
    let cuenta = JSON.parse(localStorage.getItem('cuenta'));
    let ingreso = parseInt(document.getElementById("retiro").value);
    
    for (let i=0; i<cuentas.length; i++) {
        if (cuentas[i].nombre == cuenta) {
            // console.log(`${cuentas[i]}:${cuentas[i].saldo}`);
            if((parseInt(cuentas[i].saldo) - ingreso) < 10) {
                alert(`No puedes tener menos de $10 en la cuenta, sólo puedes retirar: $${cuentas[i].saldo-10}`);
                location.reload();
            } else {
                cuentas[i].saldo -= ingreso;
                localStorage.setItem('cuentas', JSON.stringify(cuentas));
                localStorage.setItem('saldoIngresado', ingreso);
                // console.log(cuentas);
                window.location.href = "5.3.1-nuevo-ret.html";
            }            
        }
    }
}
