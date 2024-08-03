/// Immediately Invoked function Expressions (IIFE)

// function chai() {
//name IIFE HAI
//   console.log(`DB CONNECTED`);
// }
// chai();  ////DB CONNECTED

// /// ()- exjuctions call ise kahte hai
// (function chai() {
//   console.log(`DB CONNECTED`);
// })(); //// DB CONNECTED

// (function aurcode() {
//   console.log(`DB CONNECTED Two`);
// })(); //// DB CONNECTED Two

//// arrow functions
// (() => {
//   console.log(`DB CONNECTED Two3`);
// })(); /// DB CONNECTED Two3

/// third methods
((name) => {
  //unname IIFE (name)
  console.log(`DB CONNECTED Two3 ${name}`);
})("bipin kumar"); //// DB CONNECTED Two3 bipin kumar
