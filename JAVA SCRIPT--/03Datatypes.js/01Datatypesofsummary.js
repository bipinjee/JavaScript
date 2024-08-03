//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 100.3;

const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

// const bigNumber=12345643553435

////Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktima", "nagaraj", "doga"];
let myObj = {
  name: " hitesh",
  age: 22,
};

const myfunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber); ///undefined

console.log(typeof outsideTemp); ///object

console.log(typeof scoreValue); ///number

console.log(typeof myfunction); ///function

console.log(typeof heros); //object

console.log(typeof anotherId); // symbol

///////********************************************************** *////
// stack (primitive),  Heap (non primitive)

let myname = "bipinkumaryadav";

let anothername = myname;
anothername = "chhatishkumaryadav";

console.log(anothername);
console.log(myname);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne); //{ email: 'hitesh@google.com', upi: 'user@ybl' }
console.log(userTwo); //{ email: 'hitesh@google.com', upi: 'user@ybl' }
