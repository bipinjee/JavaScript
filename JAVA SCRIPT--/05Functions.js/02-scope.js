// let a = 10;
// const b = 20;
// var c = 30;

// // {} (karli bracet ko hi ) scope kahte hai
/** console.log(a);
// var a;
// console.log(a);

// console.log(a); ///Cannot access 'a' before initialization
// let a;
// console.log(a); /// undefined
 */

// console.log(a);
// console.log(b);
// console.log(c);

///// Global hai jo ki bahar hai u
// var c = 300; //// iska value change nhihoga but

// let a = 300; /// iska value change hoga

// const b = 40;// is ka bhi value changehotahai scope se bahr

/// block scope hai if ke under wala
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   console.log("INNER:", a);
}
// console.log(a); ///a is not defined
// console.log(b); ///  b is not defined
// console.log(c); /// 30

// console.log(a); /// 300

// console.log(b); /// 40

////-----------//////////
function one() {
  const username = "bipin";

  function Two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  //   Two();
}
// one();

if (true) {
  const username = "bipin";
  if (username === "bipin") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

//***************** interesting ********************** */

console.log(addone(5));
//// is case me pahle acces kar skte hai but
function addone(num) {
  return num + 1;
}

// addTwo(5);
//// is mepahle access nhi kar skte hai
const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
