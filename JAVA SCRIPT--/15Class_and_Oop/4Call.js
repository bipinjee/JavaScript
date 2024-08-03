function setUsername(username) {
  //// complex DB calls
  this.username = setUsername;
  console.log("called");
}

function CreateUser(username, email, password) {
  //   setUsername(username); // first bar me
  // setUsername.call(username); /// second time
  setUsername.call(this.username); /// third time

  //   this.username = username; ///first bar me
  this.email = email;
  this.password = password;
}

const chai = new CreateUser("Chai", "chai@gmail.com", "123453");
console.log(chai); ////CreateUser { email: 'chai@gmail.com', password: '123453' }

console.log(4 + 3);

console.log(3 + 2);
