// const tinderUser = new Object(); // single term object
// ya non tern object
const tinderUser = {}; // non single term object //console.log(tinderUser); /// {}

tinderUser.id = "12345abc";
tinderUser.name = "Sammy";
tinderUser.isloggedIn = false;

// console.log(tinderUser); ///  { id: '12345abc', name: 'Sammy', isloggedIn: false }
const regularUser = {
  email: "bipi@123.gmail.com",
  fullname: {
    userfullname: {
      firstname: "Bipin",
      lastname: "Yadav",
    },
  },
};
// console.log(regularUser.fullname); /// { userfullname: { firstname: 'Bipin', lastname: 'Yadav' } }
// console.log(regularUser.email);

// jis ko bhi print karana hai usko one by one . (dot) lga kar access kar skte hai
// console.log(regularUser.fullname.userfullname.lastname); /// Yadav

// 2 object ko marze karna hai
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2); /// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } ye ek achha sentex hai, {}-- isko dene or na dene se same hai
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(tinderUser));
/* { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
[ 'id', 'name', 'isloggedIn' ] */

console.log(Object.values(tinderUser)); /// [ '12345abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
/**
 * [ [ 'id', '12345abc' ], [ 'name', 'Sammy' ], [ 'isloggedIn', false ] ]
 */
console.log(tinderUser.hasOwnProperty(`isLoggedIn`)); /// false
