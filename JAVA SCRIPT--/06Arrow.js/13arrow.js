//// object create
// const user = {
//   username: "Bipin",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//   },
// };
// user.welcomeMessage(); /// Bipin , welcome to website
// user.username = "sam"; /// change the value
// user.welcomeMessage(); //// sam , welcome to website

///**********  other methods  ***********/////
const user = {
  username: "Bipin",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this); /// is this se ye output aata hai
    /**Bipin , welcome to website
      {
           username: 'Bipin',
              price: 999,
             welcomeMessage: [Function: welcomeMessage]
        }
             sam , welcome to website
      {
            username: 'sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
         } */
  },
};
// user.welcomeMessage(); /**Bipin , welcome to website
// {
//   username: 'Bipin',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// } */
// user.username = "sam"; /// change the user name value
// user.welcomeMessage(); //// sam , welcome to website

// console.log(this); /// {}

/////******* intersting points *******/
// function chai() {
//   let username = "Bipin";
//   console.log(this);
//   console.log(this.username); /// agar yesa run karte hai to undefine aata hai
// }

// chai();

////////////////////////
// const chai = function () {
//   let username = "Bipin";
//   console.log(this.username); //// ye bhi run karne ke bad undefine karte hai
// };
// chai();
//////// arrow functions /////
/// = () => {} bus itna likhne se arrow function ho jata hai
// const chai = () => {
//   let username = "Bipin";
//   console.log(this);
// };

// chai();

////puyor uses arrow
/// basic uses
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(5, 3)); /// 8

/// Apilisitili uses with out {} bolk prenthiths
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({ username: "Bipin" });
console.log(addTwo()); /// { username: 'Bipin' }
