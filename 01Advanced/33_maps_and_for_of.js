// john is not a variable it's an object

var john = {
  name: "John",
  age: 30,
  isActive: true,
};

var prince = {
  name: "Prince",
  age: 19,
  isActive: true,
};

var tashu = {
  name: "Tashu",
  age: 20,
  isActive: true,
};

var sam = {
  name: "Sam",
  age: 21,
  isActive: false,
};

var users = new Map();

// The first "John" is an key and the second john value is an object
users.set("john", john);
users.set("prince", prince);
users.set("tashu", tashu);
users.set("sam", sam);

console.log(users);
console.log("Total users: " + users.size);
console.log(users.get("john"));
console.log("\nKeys");
console.log(users.keys());
console.log("\nKeys");
console.log("\nValues");
console.log(users.values());
console.log("\n");

// print the keys
for (const key of users.keys()) {
  console.log(key);
}

// print the values
for (const value of users.values()) {
  console.log(value);
}

// print the entries - key,value pair
for (const [key, value] of users.entries()) {
  console.log(key + " : " + value.age);
}

users.forEach((value, key) => console.log(key + " : " + value.age));

var arr_of_Arr = [
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
];

var newMap = new Map(arr_of_Arr);
console.log(newMap);

for (const [key, value] of newMap.entries()) {
  console.log(key + " : " + value[0]);
}
