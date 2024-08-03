// singleton
//object.create

///object literals
const JsUser = {
  name: "Bipin",
  "Full name": "Bipin Kumar Yadav",
  age: 22,
  locations: "Darbhanga",
  email: "bk7368995495@gmail.com",
  isloggedIn: false,
  lastloginDays: ["Monday", "Saturday", "sunday"],
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);

JsUser.email = "bipinkumar@gmail.com";
// Object.freeze(JsUser);

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user");
};
// console.log(JsUser.greeting()); //
// console.log(JsUser.greeting); // [Function (anonymous)]

// second method
JsUser.greetingTwo = function () {
  console.log(`Hello js user , ${this.name}`);
};
console.log(JsUser.greeting()); // undefined
console.log(JsUser.greetingTwo()); // [Function (anonymous)]
