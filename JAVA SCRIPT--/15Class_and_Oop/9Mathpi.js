const descripiter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripiter);

// console.log(Math.PI);
// Math.PI = 10;
// console.log(Math.PI);

const chai = {
  name: "green tea",
  prices: 100,
  isAvilabels: true,
};
// console.log(chai); // { name: 'green tea', prices: 100, isAvilabels: true }
console.log(Object.getOwnPropertyDescriptor(chai, "prices")); /// { value: 100, writable: true, enumerable: true, configurable: true }
