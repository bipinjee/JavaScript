//////learn Strings
const name = "bipin";
const repocount = 40;

// console.log(name + repocount + "  value"); // other uses not this usess

console.log(`hello my name is ${name} and my repo count is ${repocount}`); ///hello my name is bipin and my repo count is 40

const gameName = new String("bipinkumaryadav");
console.log(gameName[5]); //n

console.log(gameName.__proto__); //{}

console.log(gameName.length); //15

console.log(gameName.toUpperCase()); //BIPINKUMARYADAV

console.log(gameName.charAt(4)); //n

console.log(gameName.indexOf("p")); //2

const NewString = gameName.substring(10, 15);
console.log(NewString); //yadav

const anotherString = gameName.slice(-15, 5);
console.log(anotherString); //bipin

const NewStringOne = "  bipin";
console.log(NewStringOne); //  bipin
console.log(NewStringOne.trim()); //bipin

const url = "https.//bipin.com/bipin%20yadav";
console.log(url.replace("%20", "_")); //https./bipin.com/bipin_yadav

console.log(url.includes("sundar")); //false
console.log(url.includes("yadav")); //true

console.log(gameName.split(`_`)); //['bipinkumaryadav']
