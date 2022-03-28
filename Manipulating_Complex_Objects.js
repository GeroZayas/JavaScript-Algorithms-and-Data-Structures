// Manipulating Complex Objects

/*Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.*/

const ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];

console.log(ourMusic[0].artist); // Daft Punk

console.log("-".repeat(40)); //separator -------------------------------

// Accessing Nested Objects Example
const ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};

console.log(ourStorage.cabinet["top drawer"].folder2); // secrets
console.log(ourStorage.desk.drawer); // stapler

console.log("-".repeat(40)); //separator -------------------------------

// Accessing Nested Objects Exercise
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"]; // maps

console.log(gloveBoxContents);

console.log("-".repeat(40)); //separator -------------------------------

// Accessing Nested Arrays Example

const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];

console.log(ourPets[0].names[1]); // Fluffy
console.log(ourPets[1].names[0]); // Spot

// Neste arrays exercise

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1]; // pine

console.log(secondTree);

console.log("-".repeat(40)); //separator -------------------------------
