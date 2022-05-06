// const superHeroes = ["Iron Man", "Spider Man", "Captain America"];

// console.log(superHeroes);
// console.log(superHeroes[0]);

// // to get length of array
// console.log(superHeroes.length);
// // print the last element of array
// console.log(superHeroes[superHeroes.length - 1]);

// console.log("We have " + superHeroes.length + " super Heroes.");

const numbers = ["one", "two", "three", "four", "five", "six"];
console.log(numbers);

// start
console.log(numbers.shift()); // remove the first element
console.log(numbers);

numbers.unshift("Something"); // add element to the beginning of the array
console.log(numbers);

// middle
numbers.splice(2, 1, "Something");
console.log(numbers);

// end

// remove the last element
console.log("The element to be deleted is : " + numbers.pop());
console.log(numbers);

// add element to the end
numbers.push("Seven");
console.log(
  "The element that recently inserted is : " + numbers[numbers.length - 1]
);
console.log(numbers);
