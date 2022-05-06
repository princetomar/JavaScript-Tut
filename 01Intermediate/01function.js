let sayHello = function (name) {
  console.log(`Hello ${name}!`);
};

let fullNameMaker = function (firstName, lastName) {
  console.log("Welcome to LCO");
  console.log(`Happy to have you, ${firstName} ${lastName}`);
};

sayHello("John");
sayHello("Prince");
fullNameMaker("Prince", "Tomar");

let myError = function (num1, num2) {
  let added = num1 + num2;

  return added;
};

console.log(myError(1, 2));

let myMultiplier = function (num1, num2) {
  return num1 * num2;
};

console.log(myMultiplier(2, 3));

let guestUser = function (name, courseCount = "no") {
  return (
    "Hello " + name + "! You have " + courseCount + " courses in your cart."
  );
};

console.log(guestUser("Prince", "Flutter"));
