const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); /// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][0]); /// superman

// marvel_heros.concat(dc_heros);

// console.log(marvel_heros); //// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); /// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros); //// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);
/* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
   ] 
  */

console.log(Array.isArray("Bipin")); //// kya ye arrays hai (false).
console.log(Array.from("Bipin")); /// [ 'B', 'i', 'p', 'i', 'n' ]

//**** Interesting ****/
console.log(Array.from({ name: "Bipin kumar" })); /// [] ye empty array de dega

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4)); ///[ 100, 200, 300, 400 ]
