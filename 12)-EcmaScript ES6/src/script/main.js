//! Constructor
// const multiply = new Function("x", "y", "return x * y");

// ! Declaration
// function multiply(x, y) {
// return x * y;
// }
// No need for semicolon here

//! Expression; the function is anonymous but assigned to a variable
// const multiply = function (x, y) {
// return x * y;
// };

//! Expression; the function has its own name
// const multiply = function funcName(x, y) {
// return x * y;
// };

//!Arrow function
// const multiply = (x, y) => x * y;

//! Method
// const obj = {
// multiply(x, y) {
// return x * y;
// },
// };

// ~ ----------------------------------------------------

/*

! 1. Function Constructor

* const multiply = new Function("x", "y", "return x * y");

~ Açıklama: Function constructor ile yeni bir fonksiyon oluşturursunuz. Bu yaklaşım genellikle dinamik olarak fonksiyon oluşturmanız gerektiğinde kullanılır, ancak genellikle performans sorunlarına ve güvenlik açıklarına yol açabileceği için pek tercih edilmez.

?-------------------------------------

! 2. Function Declaration

*function multiply(x, y) {
  return x * y;
}

~Açıklama: Bu klasik fonksiyon tanımlama şeklidir. Function Declaration yöntemi ile tanımlanan fonksiyonlar hoisting (yukarı kaldırma) özelliğine sahiptir, yani fonksiyon tanımı, dosyanın herhangi bir yerinde çağrılabilir. Bu, fonksiyonun kodda tanımlandığı yerden bağımsız olarak kullanılabileceği anlamına gelir.

?------------------------------------------

! 3. Function Expression - Anonim Fonksiyon

* const multiply = function (x, y) {
  return x * y;
};

~Açıklama: Function Expression yönteminde, fonksiyon bir değişkene atanır. Bu fonksiyon anonimdir çünkü bir ismi yoktur. Function Expression ile tanımlanan fonksiyonlar hoisting özelliğine sahip değildir, yani tanımlandıktan sonra çağrılabilirler.

?-----------------------------------

!İsme Sahip Fonksiyon

* const multiply = function funcName(x, y) {
  return x * y;
};

~ Açıklama: Bu da bir Function Expression'dır, ancak bu sefer fonksiyonun kendi adı vardır (funcName). Bu ad, genellikle hata ayıklama sırasında faydalıdır, ancak fonksiyon yalnızca tanımlandığı değişken üzerinden çağrılabilir (multiply()), funcName() üzerinden değil.

?--------------------------------------------------------

! 4. Arrow Function

 *const multiply = (x, y) => x * y;
 
~ Açıklama: ES6 ile gelen Arrow Functions, daha kısa bir sözdizimi sunar. Özellikle kısa ve basit fonksiyonlar için kullanılır. Arrow functions, kendi this bağlamlarına sahip değildir; yani, this keyword'u, fonksiyonun tanımlandığı yerin this bağlamını kullanır. Bu, genellikle iç içe fonksiyonlarda veya callback'lerde yararlıdır.

?--------------------------------------

!5. Method

* const obj = {
  multiply(x, y) {
    return x * y;
  },
};

~Açıklama: Bir fonksiyon, bir obje içinde method olarak tanımlandığında, obje üzerinden çağrılabilir. Bu şekilde tanımlanan fonksiyonlar, objenin bir parçası olarak kullanılır ve this keyword'u, objeye referans verir.


~ Function Constructor: Dinamik fonksiyon oluşturma, nadiren kullanılır.
~ Function Declaration: Hoisting destekler, kodun herhangi bir yerinde çağrılabilir.
~ Function Expression: Hoisting desteklemez, yalnızca tanımlandıktan sonra çağrılabilir.
~ Anonim Fonksiyon: İsimsizdir.
~ İsme Sahip Fonksiyon: İsimlidir, hata ayıklamada yardımcı olabilir.
~ Arrow Function: Daha kısa sözdizimi, kendi this bağlamı yoktur.
~ Method: Objeler içinde tanımlanır, objenin this bağlamını kullanır.
*/

// ?---------------------------------

// ! destructing

// let cars = ["BMW", "M5 F10", "Red", "23000$"];

// let car, model, color, price;

// [car, model, color, price] = cars;

// console.log(car, model, color, price);

// ? ---------------------------------

// ! spread operator ...
// let numbers = [10, 20, 30, 40];
// function add(a, b, c, d) {
//   console.log(a + b + c + d);
// }
// add(numbers[0], numbers[1], numbers[2], numbers[3]);

// ? with spread
// add(...numbers);

// const languages1 = ["Python", "JavaScript"];
// * without spread
// const languages2 = ["Java", "C#", languages1[0], languages1[1]];
// * with spread
// const languages2 = ["Java", "C#", ...languages1];

// console.log(languages2);

// ? ---------------------------------

// ! for in & for of loops

let names = ["John", "Michael", "Leonardo", "Aizek"];

// * with forEach
// names.forEach(name => console.log(name););

// with for
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// * with for in it gives us names index
// for (let name in names) {
//   console.log(name);
// }

// * with for of it gives us names in array
for (let name of names) {
  console.log(name);
}
