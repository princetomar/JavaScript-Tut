const myTodos = ["Buy bread", "Go to Gym", "Code ", "Sleep"];

console.log(myTodos[myTodos.indexOf("Buy Bread")]);

const newTodos = [
  {
    title: " Buy Bread",
    isDone: false,
  },
  {
    title: "Go to Gym",
    isDone: true,
  },
  {
    title: "Record Youtube videos",
    isDone: false,
  },
];

// get the index of the todo from array
// const index = newTodos.findIndex(function (todo, index) {
//   console.log(todo.title);
//   return todo.title === "Go to Gym";
// });

// console.log(index);

// Video 27
// Method 1 - using findIndex method

// const findTodo = function (myTodos, title) {
//   const index = myTodos.findIndex(function (todo, index) {
//     return todo.title.toLowerCase() === title.toLowerCase();
//   });

//   return myTodos[index];
// };

// let printMe = findTodo(newTodos, "Record Youtube videos");
// console.log(printMe);

const findTodo = function (myTodos, title) {
  const titleReturned = myTodos.find(function (todo, index) {
    // this return is for the function for titleReturned constant.
    return todo.title.toLowerCase() === title.toLowerCase();
  });

  return titleReturned;
};

let printMe = findTodo(newTodos, "Record Youtube videos");
console.log(printMe);
