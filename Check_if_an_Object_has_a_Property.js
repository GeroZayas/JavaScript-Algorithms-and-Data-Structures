// Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // NOTICE the use of [].every() here:
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((elem) => elem in userObj);
}

console.log(isEveryoneHere(users)); // true
