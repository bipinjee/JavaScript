// const coding = ["js", "ruby", "java", "python", "cpp"];

// const vlaue = coding.forEach((item) => {
//   //   console.log(item);
//   return item;
// });

// console.log(vlaue);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 5);
// console.log(newNums); /// [ 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter((num) => {
//   num > 4;
// }); // agar scope open kare hai to yese nhi likhe
//// [] yese empty de dega but agar return dekar assing kre to value dega
// console.log(newNums); //// [] dega

// const newNums = myNums.filter((num) => {
//   return num > 4;
// }); /// yese me value dega
// console.log(newNums); /// [ 5, 6, 7, 8, 9, 10 ]

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
///// [ 5, 6, 7, 8, 9, 10 ]
console.log(newNums);
