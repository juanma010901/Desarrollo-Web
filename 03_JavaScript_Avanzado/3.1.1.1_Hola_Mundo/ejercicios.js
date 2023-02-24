function numerosAleatorios() {
    numeros = [];
    for (let index = 0; index < 10; index++) {
        numeros.push(Math.floor(Math.random() * 10));
    }
    console.log("El arreglo de 10 números aleatorios es: [" + numeros + "]");
}

numerosAleatorios()