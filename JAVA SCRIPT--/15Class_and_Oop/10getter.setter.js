class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(naya) {
    this._email = naya.toUpperCase();
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }

  get username() {
    return this._username.toUpperCase();
  }

  set username(pratices) {
    this._username = pratices.toUpperCase();
  }
}
const chai = new user("Bipin", "bipin@gmail.com", "adcfgbyh");
/**
 * user {
  username: 'Bipin',
  email: 'bipin@gmail.com',
  password: '123@@233'
}
 */
// console.log(chai);

//// agar one by one acces karana chahte hai to kar skte hai

console.log(chai.password); /// ADCFGBYH

console.log(chai.email); /// BIPIN@GMAIL.COM

console.log(chai.username); //// Bipin
