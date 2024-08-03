// Dates

let myDate = new Date();
// console.log(myDate); ///2024-03-14T06:59:10.001Z

// console.log(myDate.toString()); ///Thu Mar 14 2024 12:29:56 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); /// Thu Mar 14 2024
// console.log(myDate.toTimeString()); /// 12:41:53 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleTimeString()); /// 12:41:53 pm
// console.log(myDate.toLocaleDateString()); /// 14/3/2024
// console.log(myDate.toISOString()); /// 2024-03-14T07:11:53.151Z
// console.log(myDate.toJSON()); /// 2024-03-14T07:11:53.151Z
// console.log(myDate.toUTCString()); /// Thu, 14 Mar 2024 07:11:53 GMT

// console.log(typeof myDate); // Object

let myCreateDate = new Date(2023, 1, 23);
// console.log(myCreateDate); /// 2023-02-22T18:30:00.000Z

// console.log(myCreateDate.toDateString()); //// Thu Feb 23 2023 .... 0 se month count hota hai

// let myCreateDatetwo = new Date(2024, 2, 15, 5, 4);
// console.log(myCreateDatetwo.toLocaleString()); /// 15/3/2024, 5:04:00 am
// console.log(myCreateDatetwo.toLocaleString());

// let myCreateDatetwo = new Date("2024-01-14"); //14/1/2024, 5:30:00 am
// console.log(myCreateDatetwo.toLocaleString());

// let myCreateDatetwo = new Date("01-14-2023"); ///14/1/2023, 12:00:00 am

// let myCreateDatetwo = new Date("2024-01-14");
// console.log(myCreateDatetwo.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); ///1710405009824
// console.log(myCreateDate.getTime()); //// 1677090600000
// console.log(myCreateDate.getTime()); //// 1677090600000
// console.log(Math.floor(Date.now() / 1000)); ///1710405215

let newDate = new Date();
// console.log(newDate.toLocaleDateString());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getMilliseconds());

//`${newDate.getDay()} and the time`;

newDate.toLocaleString("defaul", {
  weekday: "long",
});

console.log(weekday);
