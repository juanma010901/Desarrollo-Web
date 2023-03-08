// Ejercicio 1
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
// console.log(1)
// })
// console.log('end');

// Solo imprime un 1 gracias al console.log que hay dentro de la promesa

// Ejercicios 2
// console.log('start');
// const promise2 = new Promise((resolve, reject) => {
// console.log(1)
// resolve(2)
// })
// promise2.then(res => {
// console.log(res)
// })
// console.log('end');

// Se ejecuta el código sincrono y luego el código asíncrono
// Por esta razón se va a ejecutar en este orden:
// start
// 1
// end
// 2

// Ejercicio3
// console.log('start');
// const promise3 = new Promise((resolve, reject) => {
// console.log(1)
// resolve(2)
// console.log(3)
// })
// promise3.then(res => {
// console.log(res)
// })
// console.log('end');

// start
// 1
// 3
// end
// 2

// Ejercicio 4
// console.log('start');
// const promise4 = new Promise((resolve, reject) => {
// console.log(1)
// })
// promise4.then((res) => {
//     console.log(res)
// })
// console.log('end');

// start
// 1
// end

// Ejercicio 5
// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {
// console.log(1);
// resolve('success')
// }))
// console.log('middle')
// fn().then(res => {
// console.log(res)
// })
// console.log('end')

// start
// middle
// end
// 1
// success

// Ejercicio 6
// console.log('start')
// Promise.resolve(1).then((res) => {
// console.log(res)
// })
// Promise.resolve(2).then((res) => {
// console.log(res)
// })
// console.log('end')

// start
// end
// 1
// 2

// Ejercicio7
// console.log('start')
// setTimeout(() => {
// console.log('setTimeout')
// })
// Promise.resolve().then(() => {
// console.log('resolve')
// })
// console.log('end')

// start
// end
// resolve
// setTimeout

// Ejercicio 8
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });
// promise.then((res) => {
//     console.log(res);
// });

// 1
// 2
// timerStart
// timerEnd
// success

// Ejercicio 9
// console.log('start');
// const promise1 = Promise.resolve().then(() => {
// console.log('promise1');
// const timer2 = setTimeout(() => {
// console.log('timer2')
// }, 0)
// });
// const timer1 = setTimeout(() => {
// console.log('timer1')
// const promise2 = Promise.resolve().then(() => {
// console.log('promise2')
// })
// }, 0)
// console.log('end');

// start
