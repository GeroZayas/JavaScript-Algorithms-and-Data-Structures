// Iterate Over All Properties

/*You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.*/

function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

/*Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:*/

let ownProps1 = [];
let prototypeProps1 = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps1.push(property);
  } else {
    // NOTICE this is not a hasOwnProperty case, it's prototype
    prototypeProps1.push(property);
  }
}

console.log(ownProps1); // [ 'name' ]
console.log(prototypeProps1); // [ 'numLegs' ]

// Exercise

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
