const convertToRes = (dollar) => {
  if (typeof dollar === "number") {
    return dollar * 75.0;
  } else {
    throw Error("Not a number");
  }
};

// const myValue = convertToRes(5);
// console.log(myValue);

try {
  const myValue = convertToRes("five");
  console.log(myValue);
} catch (error) {
  console.log(error);
}

console.log("end of program");
