"use strict";

// let arr = ["Harry", "John", "Ron", "Harmony", "Freddy"];

// ! with foreach
// arr.forEach(function (name) {
//   console.log(name);
// });

// ! with for

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ! with while
// let count = 0;

// while (count < arr.length) {
//   console.log(arr[count]);
//   count++;
// }

// ! array methods

/*
push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler , eleman sayısını döner
shift   : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

toString: diziyi stringe çevirebiliriz.
join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

concat  : dizileri birleştirmek için kullanılır.
slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length  : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirmek
split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar

*/

// let cars = ["BMW", "Mercedes", "Audi", "Ferrari", "Porsche", "KIA", "Honda"];

// ? push method
// function pushArr(arr) {
//   console.log(arr);
//   arr.push("Toyota");
//   return arr;
// }

// console.log(pushArr(cars));

// ? unshift method

// cars.unshift("Ford");
// console.log(cars);

// ? pop method

// console.log(cars);
// let deleteElement = cars.pop();
// console.log(cars);
// console.log(deleteElement);

// ? shift method

// let deletedCars = cars.shift();
// console.log(cars);
// console.log(deletedCars);

// ? splice method

// console.log(cars);
// cars.splice(3, 0, "Toyota"); //birda birinci sıfır harda olsun ikinci sıfır isə hansını silməyimizdir məndə silmə sadəcə əvvələ qoy dedim
// console.log(cars);

// cars.splice(1, 2); //burda isə dedim ki 1 ci indexdən başla ikiyə kimi sil
// console.log(cars);

// ? toString method

// console.log(typeof cars);
// let strCars = cars.toString();
// console.log(typeof strCars);
// console.log(strCars);

// ? join method

// let strCars = cars.join("-");
// console.log(strCars);

// ? concat method

// let cars1 = ["Nissan", "Lamborghini"];

// let concatCars = cars.concat(cars1);
// console.log(concatCars);

// ? slice method

// console.log(cars);
// let sliceArr = cars.slice(2, 3);
// console.log(sliceArr);

// ? length method

// console.log(cars.length);

// ? reverse method

// console.log(cars);
// cars.reverse();
// console.log(cars);

// ? split method

// let names = "John, Harry, George";
// let splitNames = names.split(" ");
// console.log(splitNames);

// ? indexOf method

// console.log(cars);
// console.log(cars.indexOf("Ferrari"));

// ? includes method

// let result = cars.includes("KIA");
// console.log(result);

// ! product find app

// let product1 = {
//   name: "Samsung Galaxy S24",
//   color: "black",
//   price: 2000,
// };
// let product2 = {
//   name: "Samsung Galaxy S23",
//   color: "black",
//   price: 1800,
// };
// let product3 = {
//   name: "Samsung Galaxy S22 ultra",
//   color: "black",
//   price: 1780,
// };
// let product4 = {
//   name: "Iphone 15 Pro Max",
//   color: "natural titanium",
//   price: 2200,
// };
// let product5 = {
//   name: "Iphone 15 Pro",
//   color: "natural black",
//   price: 2000,
// };
// let product6 = {
//   name: "Iphone 15 plus",
//   color: "light blue",
//   price: 1800,
// };
// let product7 = {
//   name: "Samsung Galaxy S21 FE",
//   color: "Green",
//   price: 1600,
// };

// let products = [
//   product1,
//   product2,
//   product3,
//   product4,
//   product5,
//   product6,
//   product7,
// ];

// let customerProduct = prompt("Which product do you want?");

// getFilteredProducts(products);
// writeFilteredProduct(filteredProducts);
// function getFilteredProducts(products) {
//   products.forEach(function (product) {
//     if (
//       product.name
//         .toLocaleLowerCase()
//         .includes(customerProduct.toLocaleLowerCase(), 0)
//     ) {
//       filteredProducts.push(product);
//     }
//   });
// }

// let filteredProducts = [];

// function writeFilteredProduct(products) {
//   products.forEach(function (product) {
//     console.log(`
//                 ----------------
//                Model: ${product.name}-Price: ${product.price}-Color: ${product.color}
//                 ----------------
//             `);
//   });
// }
