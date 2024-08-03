const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(key); //// js cpp  rb  swift
  //   console.log(myObject[key]); /// javascript . c++ . ruby . swift by apple
  //   console.log(`${key} shortcut is for ${myObject[key]} `);
  /**
   *js shortcut is for javascript 
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
   */
}

/// array object
const programing = ["js", "rb", "py", "java", "cpp"];
for (const key in programing) {
  //   console.log(key); //// 0 1 2 3 4
  console.log(programing[key]); //// js rb py java cpp
}
