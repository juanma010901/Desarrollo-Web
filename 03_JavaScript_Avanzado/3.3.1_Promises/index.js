const callback = (resolve, reject) => {
    const number = Math.floor(Math.random()*10);
    setTimeout( () => {
        if (number<5) {
            resolve ("Hola, se logró");
        } else {
            reject (new Error ("No se logró"));
        }
    }
    ,2000);
}

const promise = new Promise(callback)

console.log("Mi Promesa:", promise)

promise.then((algo) => {
    console.log(algo, promise);
}).catch((otroAlgo) => {
    console.log(otroAlgo, promise)
})