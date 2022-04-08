const person = {
  name: "Gero",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};

console.log(person.sayHello());

// With ES6, you can remove the function keyword and colon altogether
// when defining functions in objects. Here's an example of this syntax:

const anotherPerson = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};

console.log(anotherPerson.sayHello());
