"use strict";

// ! product find app

let product1 = {
  name: "Samsung Galaxy S24",
  color: "black",
  price: 2000,
};
let product2 = {
  name: "Samsung Galaxy S23",
  color: "black",
  price: 1800,
};
let product3 = {
  name: "Samsung Galaxy S22 ultra",
  color: "black",
  price: 1780,
};
let product4 = {
  name: "Iphone 15 Pro Max",
  color: "natural titanium",
  price: 2200,
};
let product5 = {
  name: "Iphone 15 Pro",
  color: "natural black",
  price: 2000,
};
let product6 = {
  name: "Iphone 15 plus",
  color: "light blue",
  price: 1800,
};
let product7 = {
  name: "Samsung Galaxy S21 FE",
  color: "Green",
  price: 1600,
};

let products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
];

let customerProduct = prompt("Which product do you want?");
let filteredProducts = [];

getFilteredProducts(products);
function getFilteredProducts(products) {
  products.forEach(function (product) {
    if (
      product.name
        .toLocaleLowerCase()
        .includes(customerProduct.toLocaleLowerCase(), 0)
    ) {
      filteredProducts.push(product);
    }
  });
}
writeFilteredProduct(filteredProducts);

function writeFilteredProduct(products) {
  products.forEach(function (product) {
    console.log(`
                ----------------
               Model: ${product.name}-Price: ${product.price}-Color: ${product.color}
                ----------------
            `);
  });
}
