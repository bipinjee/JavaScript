const score = 400;
// console.log(score); //400

const Balance = new Number(100);
// console.log(Balance); //[number:100]

// console.log(Balance.toString()); // 100

// console.log(Balance.toString().length); //3
// console.log(Balance.toFixed(2)); // 100.00

const OtherNumber = 123.8956;
// console.log(OtherNumber.toPrecision(3)); //124

const OtherNumbertwo = 12233.8956;
// console.log(OtherNumbertwo.toPrecision(4)); //1.223e+4

const hundreds = 100000;
// console.log(hundreds.toLocaleString()); //1,00,000

const hundredstwo = 1000000;
// console.log(hundredstwo.toLocaleString("en-IN")); //10,00,000

// **********  mathe  *************

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.9)); ///5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.8)); //4

// console.log(Math.min(4, 5, 2, 6, 7)); //2
// console.log(Math.max(4, 5, 6, 2, 8, 4)); //8

console.log(Math.random()); //0.7857....
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);
