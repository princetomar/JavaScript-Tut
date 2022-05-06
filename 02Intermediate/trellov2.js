let myTodos = {
  day: "Monday",
  class: 0,
  classDone: 0,
};

let addClasses = function (todo, classes = 0) {
  todo.class = todo.class + classes;
};

let classDone = function (todo, classes = 0) {
  todo.classDone = todo.classDone - classes;
};

let resetDay = function (todo) {
  todo.class = 0;
  todo.classDone = 0;
};

let summaryOfDay = function (todo) {
  let classLeft = todo.class + todo.classDone;
  return `You have ${classLeft} class today.`;
};

addClasses(myTodos, 4);
addClasses(myTodos, 2);

classDone(myTodos, 3);

console.log(summaryOfDay(myTodos));
