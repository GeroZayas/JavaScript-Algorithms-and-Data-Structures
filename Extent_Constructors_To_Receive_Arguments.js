// Extent constructors to receive arguments

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Lolito", "brown");

console.log(terrier); // Dog { name: 'Lolito', color: 'brown', numLegs: 4 }
