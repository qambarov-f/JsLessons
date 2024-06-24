// ! Date Methods

let date = new Date();
// console.log(date);

// ? get ve set metodu var datein

// !get methods
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());

// ? aylar sifirdan baslayir
// console.log(date.getMonth());

// ?bunu yazsaq kifayetdir
// console.log(date.getMonth() + 1);
// console.log(date.getSeconds());

// ? butov zamani verir
// console.log(date.toLocaleDateString());

// ? butov vaxti verir
// console.log(date.toLocaleTimeString());

// ? her ikisini verir
// console.log(date.toLocaleString());

// ! set methods
console.log(date);
// ? il elave edir
// date.setDate(26);
// console.log(date);

// ? saat teyin edir
// date.setHours(21);
// console.log(date);

// ? saat teyin edir
// date.setHours(16);

// ? ay teyin edir burdada ay 0 dan baslayir
// date.setMonth(0);

// ? deqiqeni deyisir
// date.setMinutes(50);

// ? hal hazirda olan saatin uzerine 2 gel
date.setHours(date.getHours() + 2);
