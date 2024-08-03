class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `1233455`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const chai = new Teacher("chaiaurcode", "chai@gmail.com");
// chai.logMe(); /// Username: chaiaurcode---
console.log(chai.createId()); /// error---chai.createId is not a function
