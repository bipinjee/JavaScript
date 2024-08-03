/////  reduces uses //////

/* const array1 = [1, 2, 3, 4]; 

// 0 + 1 + 2 + 3 + 4
const initialvalue = [1, 2, 3, 4];
const sumWithInitial = array1.reduce (
    (accumulator , currentValue) => accumulator+currentValue,
    initialValue
    );
    console.log(sumWithInitial);
*/

const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce(function (acc, currval) {
  //   console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 2);
/**
 * acc: 2 and currval: 1
acc: 3 and currval: 2
acc: 5 and currval: 3
acc: 8 and currval: 4
acc: 12 and currval: 5
17
 */
// console.log(myTotal);

const shopingCart = [
  {
    itemName: "js courae",
    price: 2999,
  },
  {
    itemName: "java course",
    price: 2199,
  },
  {
    itemName: "data scines",
    price: 12999,
  },
];

const priceTopay = shopingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`priceTopay:- ${priceTopay}`);

/// Basic javascrip khatam ho gya hai
