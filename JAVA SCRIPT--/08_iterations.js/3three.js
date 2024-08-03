////  for of loop //////////

/// ["" , "" , "" , ""] her array me strings or
// [{} , {} , {} ,{}] her array me object mil jaye gaa yese me

// const arr = [1, 2, 3, 4, 5, 6, 7];
// for (const num of arr) {
//   console.log(num);
// }

// const greetings = " Hello World!";
// for (const greet of greetings) {
//   // console.log(greet);
//   console.log(`Each char is ${greet}`);
// }

///// maps /////// map me ek type ka do bar print nhi karta hai

const map = new Map();
map.set("IN", "india");
map.set("USA", "united states of America");
map.set("fix", "france");

// console.log(map);
/** output---
 * Map(3) {
  'IN' => 'india',
  'USA' => 'united states of America',
  'fix' => 'france'
}
 */

/// ye array valu dega matalab array types

// for (const key of map) {
//   console.log(key);
// }
// /**
//  * [ 'IN', 'india' ]
// [ 'USA', 'united states of America' ]
// [ 'fix', 'france' ]
//  */

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
/**
  IN :- india
  USA :- united states of America
  fix :- france
 */
