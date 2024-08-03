/// if
// const isUserloggedIn = true;

// if (2 != 4) {
//   console.log("Executed");
// }

// <, > , <= , >=, ==, !=, ===< !==
// ===(ye ek type chek karne wala hai opreter)

// const temperature = 41;
// if (temperature < 40) {
//   console.log("Less than 50");
// } else {
//   console.log("temperature is greater than 40");
// }

// const score = 200;

// if (score > 100) {
//   // const power = "fly"; // ye bhi error deta hai
//   // var power = "fly"; // yeerror nhi dete hai isliye ise uses nhi jyda krte hai
//   let power = "fly"; // error dena hi chahiye
//   console.log(`User power: ${power}`);
// }
// console.log(`user power: ${power}`);

// const balance = 1000;
// // yesa bhi likh skte hai but yesa nhi li likhe tab hi sahi hai
// if (balance > 500) console.log("test1"), console.log("test2");
// /** output dega but ye rule sahi nhi hai
// test1
// test2 */

// const balance = 1000;
// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 750");
// } else {
//   console.log("less than 1200"); /// less than 1200
// }

const userloggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// /// ek se adik && operater uses kar skte hai
if (userloggedIn && debitCard && 2 == 2) {
  // console.log("Allow to course");
}

if (loggedInFromEmail || loggedInFromEmail) {
  console.log("user logged in");
}
