class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const chai = new Teacher("chai", "chai@gmail.com", "12234");
// console.log(chai.addCourse());

// chai.addCourse();
chai.logMe();

const MasalaChai = new User("MasalaChai");
MasalaChai.logMe();

// console.log(chai === MasalaChai); // false

// console.log(chai === Teacher); ///  false
// console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
