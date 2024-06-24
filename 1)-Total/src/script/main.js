"use strict";

// let weight = Number(prompt("Please enter your weight"));
// let height = Number(prompt("Please enter your height"));
// let sum = weight / (height * 2);

// if (sum < 18.5) {
//   console.log("Under ideal weight " + sum);
// } else if (sum >= 18.5 && sum <= 24.9) {
//   console.log("Ideal weight " + sum);
// } else if (sum >= 25 && sum <= 29.9) {
//   console.log("High weight " + sum);
// } else if (sum >= 30 && sum <= 39.9) {
//   console.log("Higher weight " + sum);B
// } else if (sum >= 40) {
//   console.log("Higher from ideal weight " + sum);
// }

// let dizel = 0.8;
// let benzin = 1.2;
// let premium = 1.6;

// const newLine = "\r\n";

// const oilText =
//   "1-Dizel" +
//   newLine +
//   "2-Benzin" +
//   newLine +
//   "3-Premium" +
//   newLine +
//   "Please choose your oil type";

// let oilType = prompt(oilText);
// let oilL = prompt("Please enter your limit");

// if (oilType == "1") {
// } else if (oilType == "2") {
// } else if (oilType == "3") {
// } else {
//   alert("Please choose only 1-2-3");
// }

//! switch and keys

// let num = prompt("Please enter a number from 1 to 5");

// switch (num) {
//   case "1":
//     alert("You choose 1");
//     break;
//   case "2":
//     alert("You choose 2");
//     break;
//   case "3":
//     alert("You choose 3");
//     break;
//   case "4":
//     alert("You choose 4");
//     break;
//   case "5":
//     alert("You choose 5");
//     break;
//   default:
//     alert("You have to enter just from 1 to 5");
// }

// let newLine = "\r\n";

// let days =
//   "1-Monday" +
//   newLine +
//   "2-Tuesday" +
//   newLine +
//   "3-Wednesday" +
//   newLine +
//   "4-Thursday" +
//   newLine +
//   "5-Friday" +
//   newLine +
//   "6-Saturday" +
//   newLine +
//   "7-Sunday" +
//   newLine +
//   "Please choose a days of week";

// let day = prompt(days);

// switch (day) {
//   case "1":
//     alert("You chose Monday");
//     break;
//   case "2":
//     alert("You chose Tuesday");
//     break;
//   case "3":
//     alert("You chose Wednesday");
//     break;
//   case "4":
//     alert("You chose Thursday");
//     break;
//   case "5":
//     alert("Happy Friday)))");
//     break;
//   case "6":
//     alert("You chose Saturday");
//     break;
//   case "7":
//     alert("Enjoy your Sunday)))");
//     break;
//   default:
//     alert("Please choose a day of week");
// }

// let newLine = "\r\n";

// let balance = 755.42;

// let text =
//   "1-Show my balance" +
//   newLine +
//   "2-Withdraw cash" +
//   newLine +
//   "3-Increase your balance" +
//   newLine +
//   "4-End process" +
//   newLine +
//   "Enter the process you want to select";

// let process = +prompt(text);

// switch (process) {
//   case 1:
//     alert(`Your balance is ${balance}`);
//     break;

//   case 2:
//     let money = +prompt("How much do you want to withdraw?");
//     if (money <= balance) {
//       balance = balance - money;
//       alert(
//         `You have successfully withdrawn your money. Your balance is ${balance}`
//       );
//     } else {
//       alert(
//         `You don't have enough money in your balance. Your balance is ${balance} and you want to withdraw ${money}`
//       );
//     }
//     break;

//   case 3:
//     let increase = +prompt("How much money you want to increase?");
//     balance = balance + increase;
//     alert(
//       `You increased your balance successfully. Your balance is ${balance}`
//     );
//     break;
//   case 4:
//     alert("Process ending... Thanks for your request.");
//     break;
//   default:
//     alert("Unknown request. System ending...");
// }

// ! do while

// let count = 1;

// do {
//   console.log(count);
//   count++;
// } while (count <= 10);

// ! vurma cedveli

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("----------------");
// }

// ! factorial numbers

// let num = Number(prompt("Write a number."));
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }
// alert(`Result is ${factorial}`);

// ! word find

// let txt = "I just wanna go home and do my home work";

// let word = prompt("Write your word");

// function findWork(word) {
//   let count = 0;
//   for (let i = 0; i < txt.length; i++) {
//     if (txt.charAt(i).toLocaleLowerCase() === word.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(findWork(word));

// ! perfect number

// let num = Number(prompt("Write a number"));

// function perfectNumber(num) {
//   let sum = 0;

//   for (let i = 2; i < num / 2; i++) {
//     if (num % i == 0) {
//       sum += i;
//     }
//   }

//   sum += 1 + num;

//   if (sum == num * 2) {
//     console.log("Perfect number");
//   } else {
//     console.log("Not a perfect number");
//   }
// }

// console.log(perfectNumber(num));

// ! decimal to binary

// let num = prompt("Write a number");
// decimalToBinary(num);

// function decimalToBinary(num) {
//   let binary = "";
//   while (true) {
//     binary += (num % 2).toString();
//     num = Math.floor(num / 2);
//     if (num == 1) {
//       binary += 1;
//       break;
//     }
//   }

//   let result = reverse(binary);
//   console.log("result: " + result);
// }

// function reverse(binary) {
//   let binaryReverse = "";
//   for (let i = binary.length - 1; i >= 0; i--) {
//     binaryReverse += binary.charAt(i);
//   }
//   return binaryReverse;
// }
