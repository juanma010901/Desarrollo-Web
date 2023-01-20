// Crear un array vacío, luego generar 10 números al azar y guardarlos en un array.
// Mostrar en consola el resultado del array.

numerosAleatorios = [];
for (let index = 0; index < 10; index++) {
    numerosAleatorios.push(Math.floor(Math.random() * 10));
}
console.log("El arreglo de 10 números aleatorios es: " + numerosAleatorios);

// El usuario deberá ingresar un string con varias palabras separadas por
// coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5"
// y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let datos = prompt("Ingrese los datos separados por una coma");
resultado = datos.split(",");
console.log(resultado);

// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado
// de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google
// los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

minMax = [];
let arreglo = [10,40,30,20,15,5];
arreglo.sort(function(a, b) {
    return a - b;
});
console.log("El arreglo ordenado es: " + arreglo);
console.log("El número menor es: " + arreglo[0]);
console.log("El número mayor es: " + arreglo[arreglo.length-1])