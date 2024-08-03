const course = {
  coursename: "js in hindi",
  prices: "999",
  courseInstructor: "hitesh",
};

// course{courseInstructor}

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// // di structurings kiya jata hai-----
// const navbar = ({ company }) => {}; //ye  reacate ka hai
// navbar((company = "hitesh"));

//ye ek object nhi hai isliye ye error de rha hai
// { // api ka object hai but
//     "name": "hitesh",
//     "corsename": "js in hindi",
//     "prices": "free"
// }
