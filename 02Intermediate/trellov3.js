let myTodos = {
  day: "Monday",
  class: 0,
  classDone: 0,

  addClass: function (num) {
    console.log("Hey this is an function.");
    this.class = this.class + num;
  },

  summary: function () {
    console.log(`There are ${this.class} classes left today.`);
  },

  reset: function () {
    this.class = 0;
    this.classDone = 0;
    console.log("Reset is done.");
  },
};

myTodos.addClass(5);
myTodos.summary();
myTodos.reset();
myTodos.summary();
