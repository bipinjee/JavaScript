const User = {
  _username: "kya bat hai",
  _email: "chai@gmail.com",
  //   _password: 12345,
  _password: "abcd",

  get email() {
    return this._email.toUpperCase();
  },

  set email(naya) {
    this_.email = naya;
  },
};

let Tea = Object.create(User);

// console.log(Tea.email); /// CHAI@GMAIL.COM
