////// switch case uses ///////
// switch (key) {
//   case value:
//     break;
//   default:
//     break;
// }

// const month = 4;

// switch (month) {
//   case 1:
//     console.log("jan");
//     break;
//   case 2:
//     console.log("feb");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;
//   case 5:
//     console.log("may");
//     break;

//   default:
//     console.log("defaul case math");
//     break;
// }

//////////  true or fails /////////

const userEmail = ""; /// empty rhe gaa to output don't have user email dega
//other wise got user email

if (userEmail) {
  // console.log("Got user email");
} else {
  // console.log("Don't have user email");
}

// false values
///  false , 0 , -0 , BigInt on ,"" , null , undefined , nan

// truthy values
// "0" , 'false' , " ", [], {}, function(){}

if (userEmail.length === 0) {
  //   console.log("Array is empty");
}

const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
  // console.log("Object is empty");
}

/// nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 20; ///10

// console.log(val1); /// 5
// console.log(val1); /// 10
// console.log(val1); /// 15
// console.log(val1); /// 10

//// terniary operator /////////

// condition ? true: false

const iceteaPrice = 100;
iceteaPrice <= 80 ? console.log("Less than 80") : console.log("more thane 80"); /// more than 80
