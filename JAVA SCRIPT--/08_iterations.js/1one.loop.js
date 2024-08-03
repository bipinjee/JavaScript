//// for loop  ///////

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    // console.log(" 6 is the best number"); ////  6 is the best number
  }
  // console.log(element); //// 1 2 3 4 5 6 7 8 9 10
}

//////

for (let i = 0; i <= 5; i++) {
  // console.log(`Outer loop value:${i}`); ///under wala loop ek bar to outer wala all bar jitna bar value decleration kiya hai
  for (let j = 0; j <= 5; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + `*` + j + `=` + i * j);
  }
}

let Myarray = ["flash", "batman", "superman"];
/// arrays me index ka value dena parta hai (ex-myarray) diye hai
// console.log(Myarray.length);
for (let index = 0; index < Myarray.length; index++) {
  const element = Myarray[index];
  // console.log(element); //// flash , batman , superman
}

///// KeyWords /////
//// break and continue -----------
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    // break;
    continue;
  }
  console.log(`Value of i is = ${i}`); // ${}-- is me jo value dalte hai use inject kahte hai
}
