class Vegetable {
  // We declare a constructor inside our Vegetable class
  constructor(name) {
    // Notice the "this"
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

class SpaceShuttle {
  // Notice constructor here:
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet); // Should display 'Jupiter'
