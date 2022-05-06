//alert("File is attached !");
// console.log(document.head);
// console.log(document.documentURI);
// console.log(document.title);

// document.title = "I got Changed";
// console.log(document.title);

// console.log(document.getElementById("idone"));
// console.log(document.getElementsByClassName("classone"));

// document.getElementById("idone") = 'something different id'

// const myElement = document.querySelector("#idone");
// const myElementByClass = document.querySelector(".classone");
// console.log(myElement);
// console.log(myElementByClass);

const myPElements = document.querySelectorAll("p");
// myPElements.forEach(function (p) {
//   p.textContent = "I am changed using js loop.";
// });

// myPElements.forEach((p) => {
//   p.textContent = "I am changed using js loop.";
// });

// How to add an element to the end of the HTML document
const myNewPara = document.createElement("p");
myNewPara.textContent = "I was added via JS";

document.querySelector("body").appendChild(myNewPara);

// Lecture 39
document.querySelector("button").addEventListener("click", (event) => {
  console.log("I was clicked ");
  event.target.textContent = "I was Clicked";
});

// track input form
document.querySelector("#myform").addEventListener("input", () => {
  console.log(event.target.value);
});
