// We create a new object called myDog and we attribute it some properties.
const myDog = {
  name: "Yuni",
  age: 7,
  color: "black and white",
};

// To reduce the type, we can simply the console.log() function
function cl(x) {
  return console.log(x);
}

// Print the properties
cl(myDog.name);
cl(myDog.age);
cl(myDog.color);

// We assign a new property to myDog
myDog.bark = "Jau Jau";

cl(myDog.bark); // Jau Jau

// Delete Properties from a JavaScript Object

// Let's delete the 'tails' property from myDog

delete myDog.tails;

cl(myDog); //{ name: 'Yuni', age: 7, color: 'black and white', bark: 'Jau Jau' } -> no 'tails
