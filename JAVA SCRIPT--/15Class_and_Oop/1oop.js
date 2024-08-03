const user = {
  username: "bipin kumar yadav",
  logincount: 12,
  singedIn: true,

  getUserDetails: function () {
    // console.log("Got User Details from Databased");
    // console.log(`username: ${this.username}`);
    // console.log(`username: ${this.logincount}`);

    //// isse jitna bhi upar decliration kiya rahe gaa sab print hoga
    console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());

/// agar golobal context me likhen ge to empiti dega
// console.log(this); ////  {}

/// - Constructor function
function User(username, logincount, isLoggedIn) {
  this.username = username;
  this.logincount = logincount;
  this.isLoggedIn = isLoggedIn;

  //// seconday step
  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}
// const userOne = User("bipin", 12, true);
// const userTwo = User("kumar", 8, false);
// console.log(userOne);
// /*username: 'bipin',
//   logincount: 12,
//   isLoggedIn: true*/

// console.log(userOne);
/**username: 'kumar',
logincount: 8,
isLoggedIn: false */

/// - Prototypes
const userOne = new User("bipin", 12, true);
const userTwo = new User("kumar", 8, false);

// is me userone or usertwo ke alag alag print karte hai
console.log(userOne);
//User { username: 'bipin', logincount: 12, isLoggedIn: true }
/**
 * User {
  username: 'bipin',
  logincount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
 */

console.log(userTwo);
///User { username: 'kumar', logincount: 8, isLoggedIn: false }
/**
 * User {
  username: 'bipin',
  logincount: 12,
  isLoggedIn: true,
  greeting: [Function (anonymous)]
}
User {
  username: 'kumar',
  logincount: 8,
  isLoggedIn: false,
  greeting: [Function (anonymous)]
}
 */
