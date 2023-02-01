// Cajero Automático

//Cuentas y Passwords

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


// PROCESO COMPLETO

function cajero() {


}


// Ingresar

function ingresar(nombre, password) {
    for (let i = 0; i < cuentas.length; i++) {
      if (cuentas[i].nombre === nombre) {
        for (let j = 0; j < passwords.length; j++) {
          if (passwords[j].nombre === nombre && passwords[j].password === password) {
            consultarSaldo();
          }
        }
        return "Contraseña incorrecta.";
      }
    }
    return "Cuenta no encontrada.";
}


// Consultar Saldo

function consultarSaldo(cuenta) {
    return `Bienvenido ${nombre}. Tu saldo es de $${cuentas[i].saldo}.`;
}


// Ingresar Monto

function ingresarSaldo(nombre) {
    let ingreso = document.getElementById("").value;
    
    if((cuentas[nombre].saldo + ingreso) > 990) {
        return `Excede la cantidad máxima, sólo puede ingresar: $${990-cuentas[i].saldo}`;
    } else {
        cuentas[nombre].saldo -= retiro;
    }

}


// Retirar Monto

function retirarMonto(nombre) {
    let retiro = document.getElementById("").value;
    
    if((cuentas[i].saldo - retiro) < 10) {
        return `Debe tener un monto mínimo, sólo puede retirar: $${990-cuentas[i].saldo}`;
    } else {
        cuentas[nombre].saldo -= retiro;
    }
}