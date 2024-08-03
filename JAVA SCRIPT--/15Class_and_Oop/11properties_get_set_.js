function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (kuchh) {
      this._email = kuchh;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (kuchh2) {
      this._password = kuchh2;
    },
  });
}
const chai = new User("apna@gmail.com", "12234abcdef");
console.log(chai.password); /// 12234ABCDEF
console.log(chai); /// User { _email: 'apna@gmail.com', _password: '12234abcdef' }
