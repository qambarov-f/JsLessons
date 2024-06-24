// let arr = [23, -13, 7, 98, 234, -5, 12, 9, 34];

// !task 1

// function findMinMax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] > max) {
//       max += arr[i];
//     }
//   }
//   return [min, max];
// }

// console.log(findMinMax(arr));

// function sortArr(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortArr(arr));

// ! task 2

// function arrTwo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//   }
//   return arr.map((element) => element * 2);
// }

// console.log(arrTwo(arr));

// ! task 3

// function findFalse(arr) {
//   return !arr.some((element) => element < 0);
// }

// console.log(findFalse(arr));

// ! task 4

// function findFifty(arr) {
//   return arr.find((element) => element > 50);
// }

// console.log(findFifty(arr));

// !task 5

// function increment(arr) {
//   return arr.reduce((sum, currentValue) => sum + currentValue, 0);
// }
// console.log(increment(arr));

// ! task 6

// function negative(arr) {
//   return arr.filter((element) => element < 0);
// }

// console.log(negative(arr));

//! task 7

// function reverse(arr) {
//   return arr.reverse((element) => element);
// }

// console.log(reverse(arr));

//? 30.05.2024

// let fruit = "Apple Orange Grapes";

//! task 1
// function combineArr(arr) {
//   return arr.split(" ");
// }

// console.log(combineArr(fruit));

//! task 2

// function addMinus(arr) {
//   return arr.split(" ").join("-");
// }

// console.log(addMinus(fruit));

// ! task 3

// function findWord(arr) {
//   let character = "the";

//   return arr.indexOf(character);
// }

// console.log(findWord("A string containing the extracted characters."));

//! task 4

// function addWord(str) {
//   let text2 = "JavaScript";
//   return str.replaceAll(text1, text2);
// }

// let text1 = "CSS";

// console.log(addWord(`I love ${text1}. ${text1} is very popular.`));

// ! task 5

// function convert(str) {
//   return str
//     .split("")
//     .map((element) => {
//       if (element === element.toUpperCase()) {
//         return element.toLowerCase();
//       } else {
//         return element.toUpperCase();
//       }
//     })
//     .join("");
// }
// let str = prompt("Write something");
// console.log(convert(str));

// ? 31.05.2024

// const header = document.createElement("header");
// const main = document.createElement("main");
// const footer = document.createElement("footer");
// const imgDiv = document.createElement("div");
// const titleDiv = document.createElement("div");
// const img = document.createElement("img");
// const firstSpan = document.createElement("span");
// const headerThree = document.createElement("h3");
// const headerFive = document.createElement("h5");
// const nav = document.createElement("nav");
// const ul = document.createElement("ul");
// const firstLi = document.createElement("li");
// const secLi = document.createElement("li");
// const threeLi = document.createElement("li");
// const fourLi = document.createElement("li");
// const fiveLi = document.createElement("li");
// const sixLi = document.createElement("li");

// document.body.appendChild(header);
// document.body.appendChild(main);
// document.body.appendChild(footer);
// main.appendChild(imgDiv);
// main.appendChild(titleDiv);
// imgDiv.appendChild(img);
// titleDiv.appendChild(firstSpan);
// titleDiv.appendChild(headerThree);
// titleDiv.appendChild(headerFive);
// titleDiv.appendChild(nav);
// nav.appendChild(ul);
// nav.appendChild(firstLi);
// nav.appendChild(secLi);
// nav.appendChild(threeLi);
// nav.appendChild(fourLi);
// nav.appendChild(fiveLi);
// nav.appendChild(sixLi);

// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
// );

// firstSpan.textContent =
//   "We work with professionals as well as with people who first came to the recording studio.";
// headerThree.textContent = "Simple HTML Website Template";
// headerFive.textContent =
//   "Give your listeners a professional record of your work!";
// firstLi.textContent = "- Professionally we will write a song;";
// secLi.textContent =
//   "- We will help to make an advertising audio-movie or jingles;";
// threeLi.textContent = "- We will voice the video;";
// fourLi.textContent = "- We will arrange for the author's song;";
// fiveLi.textContent = "- We will write congratulations to any events;";
// sixLi.textContent = "- Sound recording of children;";

// // body css
// document.body.style.cssText = `
//     margin:0;
//     padding:0;
//     box-size:border-box;
//     height:100vh;
//     list-style:none;
// `;

// // header
// header.innerText = "About Us";
// header.style.cssText = `
//     width: 100%;
//     height:10%;
//     background-color: #671070;
//     color:white;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     font-size:25px;
// `;

// // main side

// main.style.cssText = `
//         height:80%;
//         background-color: #9f4fa3;
//         color:white;
//         display:flex;
//         align-items:center;
//         justify-content: center;
//         font-size:25px;
// `;
// imgDiv.style.cssText = `
//     width:700px;
//     height:500px;
//     margin-right:40px;
// `;
// img.style.cssText = `
//     width:100%;
//     height:100%;
//     border-radius: 10px;
// `;
// titleDiv.style.cssText = `
//     width:700px;
//     height:500px;
//     font-size:14px;
//     padding-top:25px;
// `;
// nav.style.cssText = `
// width:100%;
// height: 250px;
// font-size : 17px
// `;
// headerThree.style.cssText = `
//     font-size:35px;
//     `;
// headerFive.style.cssText = `
// font-size:21px;`;

// // footer
// footer.innerText = "About the studio";
// footer.style.cssText = `
//     width: 100%;
//     height:10%;
//     background-color: #671070;
//     color:white;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     font-size:25px;
//     `;

//? 03.06.2024

// const arrowBtn = document.querySelector(".fa-solid");
// const sideBar = document.querySelector(".leftSidebar");

// arrowBtn.addEventListener("click", () => {
//   sideBar.classList.toggle("open");
// });

// // products

// const products = [
//   {
//     id: 1,
//     img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7c1530cacffde1310e4140753070f87b.jpg?imageMogr2/interlace/1%7CimageView2/2/w/500/q/70",
//     title: "Nike T-Shirt",
//     price: 30.39,
//     discount: 56,
//     rate: 1271,
//     desc: "Nike T-Shirt is the best t-shirt product.",
//   },
//   {
//     id: 2,
//     img: "https://img.kwcdn.com/product/open/2023-02-11/1676095995789-d6fb59f522fc4cd9a80855c9484bf872-goods.jpeg?imageMogr2/interlace/1%7CimageView2/2/w/500/q/70",
//     title: "5-pair papisdari",
//     price: 0.99,
//     discount: 42,
//     rate: 74651,
//     desc: "5-pair corablari al razi qal",
//   },
// ];

// const productContainer = document.querySelector(".product-container");

// products.map((product) => {
//   const productCard = document.createElement("div");
//   productCard.classList.add("product-card");

//   const discountedPrice = product.price * (1 - product.discount / 100);

//   productCard.innerHTML = `
//     <div class="img-container">
//       <img src="${product.img}" alt="${product.title}">
//     </div>
//     <div class="product-details">
//       <h3>${product.title}</h3>
//       <p class="desc">${product.desc}</p>
//       <p class="price original-price">$${product.price.toFixed(2)}</p>
//       <p class="price discounted-price">$${discountedPrice.toFixed(2)}</p>
//       <p class="discount">${product.discount}% off</p>
//       <p class="rate">(${product.rate})</p>
//     </div>
//   `;

//   productContainer.appendChild(productCard);
// });

// ! 05.06.2024

// document.addEventListener("DOMContentLoaded", function () {
//   const showImg = document.querySelector(".showImg");
//   const showBtn = document.querySelector(".showBtn");

//   showBtn.addEventListener("click", () => {
//     showImg.classList.toggle("hide");

//     if (showImg.classList.contains("hide")) {
//       showBtn.textContent = "Show";
//     } else {
//       showBtn.textContent = "Hide";
//     }
//   });
// });
