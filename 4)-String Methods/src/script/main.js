// ! String methods

// charAt()
// concat();
// indexOf();
// lastindexOf();
// toUpperCase();
// toLowerCase();
// trim();
// slice();
// substring();
// replace();
// split();
// valueOf();
// startsWith();
// endsWith();

let title = "Modern JavaScript Practices";

// ? charAT()
// let character = title.charAt(5);
// console.log(character);

// ? concat()
// let version = "ES6";
// let result = title.concat(" ", version);
// console.log(result);

// ? indexOf() this is opposite of charAt
// let index = title.indexOf("J");
// console.log(index);

// ? lastindexOf()
// let lastIndex = title.lastIndexOf("P");
// console.log(lastIndex);

// ? toUpperCase()

// let upperCase = title.toUpperCase();
// console.log(upperCase);

// ? toLowerCase()

// let lowerCase = title.toLowerCase();
// console.log(lowerCase);

// ? trim() this is delete space after and before string
// let secTitle = "    Modern Js     ";
// let trim = secTitle.trim("");
// console.log(secTitle);
// console.log(trim);

// ? slice() 7ci indexdən başlayaraq 21-ci indexə qədər olan sözü verir bizə
// console.log(title);
// console.log(title.slice(7, 21));

// ? substring()  slicedan hecbir ferqi yoxdur demek olar
// console.log(title);
// console.log(title.substring(0, 8));

// ? replace() istediyimiz yazinin yerine iztediyimiz yazini elave ede bilerik
// console.log(title);
// console.log(title.replace("Modern", "New"));

// ? split() verdiyimiz bosluqa esasen stringi bize array kimi verir
// console.log(title);
// console.log(title.split(" "));

// ? valueOf() deyeri verir
// console.log(title.valueOf());

// ? startsWith() bize true ve ya false deyer verir eger M ile baslayirsa ture m ile baslayirsa false
// console.log(title.startsWith("M"));

// ? endsWith() buda startWith kimidir ancaq sonuna baxir
// console.log(title.endsWith("es"));
