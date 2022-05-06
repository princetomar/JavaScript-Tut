class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // to define a function in a class
  getFullName = () => `${this.firstName} ${this.lastName} is my full Name.`;

  editName(newname) {
    const myName = newname.split(" ");
    this.firstName = myName[0];
    this.middleName = myName[1];
    this.lastName = myName[2];
  }

  getFullName2 = () =>
    `${this.firstName} ${this.middleName} ${this.lastName} is my full Name.`;
}

class Teacher extends User {
  constructor(firstName, lastName, age, subject) {
    super(firstName, lastName, age);

    this.subject = subject;
  }

  getFullName = () =>
    `${this.firstName} ${this.lastName} is my full Name. I teach ${this.subject}`;
}

const prince = new Teacher("Prince", "Tomar", 19, "Computer Science");
console.log(prince);
console.log(prince.getFullName());
prince.editName("Prince Tomar Choudhary");
console.log(prince.getFullName2());

// const tashu = new User("Tashu", "Tomar", 16);
// console.log(tashu);
