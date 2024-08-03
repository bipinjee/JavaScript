// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/// map uses propers---
// const newNums = myNumbers.map((num) => num + 10);
/**
 * [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
 */
// console.log(newNums);

///// chaning map using
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers
  .map((num) => num + 5)
  .map((num) => num + 2)
  /// filter ka uses true or fails wala rule hai
  .filter((num) => num > 11); /// [ 12, 13, 14, 15, 16, 17 ]

/**
 * [
   8,  9, 10, 11, 12,
  13, 14, 15, 16, 17
]
 */
console.log(newNums);
