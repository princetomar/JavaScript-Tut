// How to declare an object in javascript

let myYoutubeVideoOne = {
  title: "Loops in JavaScript",
  videoLength: "15 ",
  videoDiscription: "This is a video about loops in JavaScript",
};

// Accessing the object properties
console.log(myYoutubeVideoOne);

// access any value of object
console.log(`Hey! New video has been uploaded on : ${myYoutubeVideoOne.title}`);

// Assignment
let course = {
  title: "JavaScript API",
  price: 499,
  description: "JavaScript for backend development.",
};

console.log(course);
console.log(`Hritesh Choudhary has uploaded new course on ${course.title} at price -$ ${course.price}.
In this course you will learn how to use the ${course.description}`);

let myYoutubeVideoTwo = {
  title: "Loops in JavaScript",
  videoLength: "15 ",
  videoDiscription: "This is a video about loops in JavaScript",
};

// Video 22
let changeVideoLength = function (myObject) {
  //   console.log(`Time of this video is ${myObject.videoLength}`);
  return {
    formatOne: `Time of this video is : ${myObject.videoLength}`,
    formatTwo: `Time of this video is : ${myObject.videoLength}`,
  };
};

// changeVideoLength(myYoutubeVideoOne);

let adOne = changeVideoLength(myYoutubeVideoOne);
console.log(adOne.formatOne);
