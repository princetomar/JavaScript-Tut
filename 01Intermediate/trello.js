let sayHello = function (name) {
  console.log(`Hello ${name}!`);
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(days[0]);

// days.forEach(sayHello);

// days.forEach(function (day, index) {
//   console.log(`Day ${index} is ${day}`);
// });

// for (let index = days.length - 1; index >= 0; index--) {
//   const element = days[index];
//   console.log(`Day ${index} is ${element}`);
// }

const myTodos = [];

myTodos.push("Learn JavaScript");
myTodos.push("Learn Flutter");
myTodos.push("Learn Data Structures");

myTodos.forEach(function (todo, index) {
  console.log("Your task is: " + todo + " at index " + (index + 1));
});
