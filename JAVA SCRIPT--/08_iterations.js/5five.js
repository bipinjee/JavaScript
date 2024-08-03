const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item); /// js  ruby  java  python cpp
// });

/// arrow ke liye ya call by function bol skate hai
coding.forEach((val) => {
  //   console.log(val); //// js  ruby  java  python cpp
});

// /////phir print use nyfunctions
// function printme(item2) {
//   console.log(item2);
// }
// coding.forEach(printme);

//// ek or interesting point-----
coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
  /**
   * js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
   */
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
myCoding.forEach((item) => {
  //   console.log(item.languageName); /// javascript java python
  console.log(item.languageFileName); /// js java py
});
