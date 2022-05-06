const sayHello = function (name) {
  return `Hey ${name}`;
};

console.log(sayHello("Prince"));

// To convert the above function into an arrow function
// remove function before the paranthasis and add '=>' after the paranthasis

const sayHello2 = (name) => {
  return `Hey ${name}`;
};

console.log(sayHello2("Prince"));

// There is another way also to use arrow function

const sayHello3 = (name) => `Hey ${name}`;

console.log(sayHello3("Prince Tomar"));

const todos = [
  {
    title: "Buy Bread",
    isDone: true,
  },
  {
    title: "Go to Gym",
    isDone: true,
  },
  {
    title: " Record Youtube videos",
    isDone: false,
  },
];

// we only want to pickup the todos which has isDone property is true

const thingsDone = todos.filter((todo) => {
  return todo.isDone === true;
});

//console.log(thingsDone);

// 29 video assignment

const todosList = [
  {
    title: "Buy Bread",
    isDone: true,
  },
  {
    title: "Go to Gym",
    isDone: true,
  },
  {
    title: " Record Youtube videos",
    isDone: false,
  },
  {
    title: "Gta 5 download",
    isDone: false,
  },
  {
    title: "JavaScript learning",
    isDone: true,
  },
  {
    title: "Flutter learning",
    isDone: false,
  },
];

const thingsNotDone = todosList.filter((todo) => {
  return todo.isDone === false;
});

console.log(thingsNotDone);
