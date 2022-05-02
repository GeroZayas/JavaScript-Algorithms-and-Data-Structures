function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();

console.log(hound);

hound.color = "golden";
hound.name = "MyPerrito";
hound.numLegs = 3;

console.log(hound);
