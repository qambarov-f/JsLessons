// ! Session Storage

// ~ session ile local arasindaki ferq kompu sonduren zaman brauzeri sonduren zaman localda olan datalar silinmir ama sessionda silinir

// * add value
// sessionStorage.setItem("350", "session");

// * remove value
// sessionStorage.removeItem("350");

// * get value
// let value = sessionStorage.getItem("350");
// console.log(value);

// * delete all values
// sessionStorage.clear();

// sessionStorage array write
// let names = ["John", "Harry", "Jackson", "Mile"];

//? bele olduqu halda string kimi verir
// sessionStorage.setItem("names", names);

// ? ama bele olduqu halda array kimi verir
// sessionStorage.setItem("names", JSON.stringify(names));

// let value = sessionStorage.getItem("names");

// ? bele olduqu halda array edir
// let value = JSON.parse(sessionStorage.getItem("names"));

// console.log(value);

// ~ --------------------------------------------------------------

// ! local storage

// ? setItem session ile eyni mentiqde isleyir
// localStorage.setItem("01", "Neuer");
// localStorage.setItem("07", "Ronaldo");
// localStorage.setItem("10", "Messi");

// ? getItem buda hemcinin eyni mentiqdir
// let player = localStorage.getItem("07");
// console.log(player);

// ? removeitem eyni mentiq
// localStorage.removeItem("10");

// ? remove all
// localStorage.clear();

// let players = ["Ronaldo", "Messi", "Neuer", "Kane", "Neymar"];

// localStorage.setItem("players", JSON.stringify(players));

// let value = JSON.parse(localStorage.getItem("players"));
// console.log(value);

// value.forEach((element) => {
//   console.log(element);
// });
