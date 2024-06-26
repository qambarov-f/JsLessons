window.addEventListener("DOMContentLoaded", init);

//!  events

function init() {
  const showBtn = document.querySelector(".btn");

  // ? burda clickk zamani bodye h1 elementi elave edib siliirem
  //   const title = document.createElement("h1");
  //   title.textContent = "Hello World";
  //   title.style.color = "white";

  //   showBtn.style.cssText = "border-radius:10px; padding: 10px;";

  //   showBtn.addEventListener("click", () => {
  //     if (document.body.contains(title)) {
  //       document.body.removeChild(title);
  //     } else {
  //       document.body.appendChild(title);
  //     }
  //   });

  //~ ------------------------------------------------

  // ! mouse events

  /*
load
click
dblclick
mouseover
mouseout
mouseenter
mouseleave 
*/

  // * 1 defe click olunanda
  //   showBtn.addEventListener("click", (e) => {
  // console.log(e.type);
  //   });

  // * 2 defe click olunanda
  //   showBtn.addEventListener("dblclick", (e) => {
  //     console.log(e.type);
  //   });

  // * muse ustune gelende
  //   showBtn.addEventListener("mouseover", (e) => {
  //     console.log(e.type);
  //   });

  // * mouse ustunden cixanda
  //   showBtn.addEventListener("mouseout", (e) => {
  // console.log(e.type);
  //   });

  // * sadece mouseenteri verdiyimizde isleyir
  //   showBtn.addEventListener("mouseenter", (e) => {
  //     console.log(e.type);
  //   });

  // * mouse event verdiyimiz tagdan cixanda
  // showBtn.addEventListener("mouseleave", (e) => {
  //   console.log(e.type);
  // });

  // ~ ----------------------------------------------------------

  // ! keyboard events

  /*
  keypress
  keydown
  keyup
  */

  const input = document.querySelector(".inp");
  // const title = document.createElement("h1");
  // document.body.appendChild(title);

  // * keypress duymeye basib buraxan zaman ise dusur
  //   input.addEventListener("keypress", (e) => {
  //     console.log(e.key);
  //     console.log(e.keyCode);
  //   });

  // * keydown keypress kimidir butun duymelerde isleyir
  //   input.addEventListener("keydown", (e) => {
  //     console.log(e.key);
  //   console.log(e.target.value);
  //     console.log(e.keyCode);
  //   });

  // * keyup  duymeden elini qaldirdiqin an ise dusur
  //   input.addEventListener("keyup", (e) => {
  // console.log(e.key);
  // console.log(e.keyCode);
  // title.textContent = e.target.value;
  //   });

  // ~ ----------------------------------------------------------

  // ! input events
  /*
  focus
  blur
  copy
  paste
  cut
  select
  */

  // * focus cursor inputun icine basilan zaman yeni girende ise dusur
  // input.addEventListener("focus", (e) => {
  //   console.log(e.type);
  // });

  // * blur cursor inputun icinden cixan zaman ise dusur
  // input.addEventListener("blur", (e) => {
  //   console.log(e.type);
  // });

  // * copy inputun icindeki deyeri copy eden zaman ise dusur
  // input.addEventListener("copy", (e) => {
  // console.log(e.type);
  // });

  // * pase inputun icine deyeri pase eden zaman ise dusur
  // input.addEventListener("paste", (e) => {
  // console.log(e.type);
  // });

  // * cut inputun icine deyeri cut eden zaman yeni kesende ctrl+x edende ise dusur
  // input.addEventListener("cut", (e) => {
  // console.log(e.type);
  // });

  // * select inputun icinde olan deyeri mouse ile secib buraxanda ise dusur
  // input.addEventListener("select", (e) => {
  //   console.log(e.type);
  // });
}
