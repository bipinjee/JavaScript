const accountId = 11223344;
var accountEmail = "bk7368995495@gmail.com";
let accountPassword = "1234566";
accountCity = "jaypur";
let accountState; //// is me undefine aaye gaa

/**
 * not to uses var
 * because of issue block scop and functional scope
 */

// accountId = 12333;  --- isko change nhi kar skate hai kyo ki ye const hai
// console.log(accountId);

accountEmail = "hvbhf@.com";
accountPassword = "123433";
accountCity = "bengalor";
console.log(accountPassword);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// This code uses console.table to display the variables and their values in a table format in the console.

// console.table([
//     { Variable: "accountId", Value: accountId },
//     { Variable: "accountEmail", Value: accountEmail },
//     { Variable: "accountPassword", Value: accountPassword },
//     { Variable: "accountCity", Value: accountCity },
//   ]);
