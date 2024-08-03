function sayMyName() {
  console.log("B");
  console.log("I");
  console.log("P");
  console.log("I");
  console.log("N");
}
// sayMyName(); /// B I P I N

// function addtwonumber(number1, number2) {
//   console.log(number1 + number2);
// }

// addtwonumber(5, 6); /// 11
// addtwonumber(5, "6"); /// 56
// addtwonumber(5, "a"); /// 5a
// addtwonumber(5, null); /// 5

// const result = addtwonumber(3, 5); // 8
// console.log("Result:", result); /// Result: undefined

// function addtwonumber(number1, number2) {
//   //   let result = number1 + number2;
//   // //   console.log("BIPIN"); // BIPIN
//   //   return result;

//   return number1 + number2;
// }

// const result = addtwonumber(3, 5); //  is me dikh rha hai u nhi hota hai/// is me BIPIN OUTPUT DEEGA

// console.log("Result:", result); /// Result: 8

/// other code
/// agar unction loginUserMeSsage(username="sam") likh diye to if sab kaam nhi kre gaa
function loginUserMeSsage(username = "sam") {
  //   if (username === undefined) { // ye ya
  if (!username) {
    console.log("Please enter a username"); ///Please enter a username
    return;
  }
  return `${username} just logged in `; /// uper return likh dene se ye run nhi hoga
}
// console.log(loginUserMeSsage()); //  Sam just logged in /// dega nhi to ye apna aap over ride kar dega

// console.log(loginUserMeSsage("BIPIN")); /// BIPIN just logged in

// console.log(loginUserMeSsage("")); //  Please enter a username

// console.log(loginUserMeSsage("bipin kumar")); //bipin just logged in

/////////*******   second video se        ******//////////////

// function calculateCartprice(num1) {
function calculateCartprice(...num1) {
  ///isko spired opreter ya rest opreter bolte hai
  return num1;
}
// }
// (...rest opreter) bola jata hai(... is ko bola jata hai)
/// ... kab is ko spride bile ye maine karta hai
// console.log(calculateCartprice(2)); /// 2

// console.log(calculateCartprice(200, 300, 400, 500)); ///[200, 300, 400, 500];

const user = {
  username: "hitesh",
  price: 199,
};

function handleobject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price} `
  );
}

// console.log(handleobject(user)); ///username is hitesh and price is 199
///undefined
// handleobject(user); /// username is hitesh and price is 199

/// yese object bhi pass kar skte hai
// handleobject({
//   username: "sam",
//   price: 399,
// }); /// username is sam and price is 399

/// ab array pass kar ke dekhte hai
const myNewArray = [250, 350, 450, 600];

function returnSecondValue(getArray) {
  return getArray[1]; //450
  // return getArray[3]; //600
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([250, 350, 450, 600]));
