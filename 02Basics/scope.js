// let iAmGlobal = "someValue";

// if (true) {
//   // var creates a global variable whereas let creates a local variable
//   //   var iAmLocal = "someMoreValue";
//   let iAmLocal = "SomeMoreValuie";
//   iAmGlobal = "Superman";
//   console.log(iAmGlobal);
//   console.log(iAmLocal);
// }

// // console.log(iAmLocal);
// console.log(iAmGlobal);

// kings problem

let king = "Prince";
if (true) {
  let king = "John";

  if (true) {
    let king = "Ram";
    console.log(king);
  }
}

if (true) {
  console.log(king);
}
