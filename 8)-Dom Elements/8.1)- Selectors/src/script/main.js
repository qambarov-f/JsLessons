// const headOne = document.getElementById("headOne");

// const headOne = document.getElementsByClassName("sth");

// console.log(headOne);

// const classList = headOne.classList;

// console.log(classList);

// classList.forEach(function (className) {
//   console.log(className);
// });

// ? burda h1 elementini goturub onun classlarina baxiriq

// ! -------------------------------------------------

// ? textcontent ise secdiyimiz elementin icinde olan yazisini deyisir ve ya elave edir
// console.log(headOne.textContent);
// headOne.textContent = "Hello World!";

// ! -----------------------
// ? js ile style vermek

// const headOne = document.querySelector(".sth");

// headOne.style.color = "red";
// headOne.style.fontSize = "20px";

// ! ------------------------------------------------

// ? document create element

// const link = document.createElement("a");
// const body = document.querySelector("body");

// link.id = "visitGoogle";
// link.className = "visit";
// link.href = "https://www.google.com";
// link.target = "_blank";
// link.textContent = "Visit Google";

// body.appendChild(link);

// ? remove element

// const headOne = document.querySelector(".sth");
// const body = document.querySelector("body");
// const txt = document.createElement("h2");

// txt.textContent = "Hello World";
// txt.style.cursor = "pointer";

// headOne.addEventListener("click", () => {
//   body.appendChild(txt);
// });

// txt.addEventListener("click", () => {
//   txt.remove();
// });

// ? replace child

const headOne = document.querySelector(".sth");
const body = document.querySelector("body");
const txt = document.createElement("h4");

txt.textContent = "Hello World";

console.log(headOne);
console.log(txt);
console.log(body);

body.replaceChild(txt, headOne);
