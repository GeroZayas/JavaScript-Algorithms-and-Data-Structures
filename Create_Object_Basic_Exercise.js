//Very basic exercise
// Create an object

// We create an object dog

let dog = {
  name: "Yuni",
  numLegs: 4,
  sayLegs: function () {
    // we can substitute dog.numLegs for this.numLegs
    //return "This dog has " + dog.numLegs + " legs.";
    return "This dog has " + this.numLegs + " legs.";
  },
};

console.log("The name of the dog is ");
console.log(dog.name);
console.log("The number of legs is ");
console.log(dog.numLegs);
console.log(dog.sayLegs());
