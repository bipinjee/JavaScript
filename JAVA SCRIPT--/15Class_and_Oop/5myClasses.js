//// ES6

// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptedpassword() {
//     return `${this.password}abc`;
//   }

//   changeUseername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const chai = new user("chai", "chai@gmail.com", "1234");
// console.log(chai.encryptedpassword());
// console.log(chai.changeUseername());

//// behind the scen ---- ye hota hai class se ----

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptedpassword = function () {
  return `${this.password}abc`;
};

user.prototype.changeUseername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "tea@gmail.com", "1234");
console.log(tea.encryptedpassword());
console.log(tea.changeUseername());
