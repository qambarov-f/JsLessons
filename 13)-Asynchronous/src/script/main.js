// ! javascript senxron isleyen bir dildir yeni her sey sira ile isleyir

// sayHello();

// console.log("First");
// console.log("Second");
// console.log("Third");

// function sayHello() {
//   console.log("Hello");
// }

// ! bezi yerlerde asenxron isleyir timing, evenetlar, http sorgularinda

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 1000);

setTimeout(() => {
  console.log("Third");
}, 500);

console.log("Fourth");
