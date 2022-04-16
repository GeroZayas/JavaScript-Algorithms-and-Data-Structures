// For In Stament

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

console.log("--------");
console.log(users.Alan.online);
console.log("--------");

function countOnline(usersObj) {
  // Only change code below this line
  let totalOnline = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      totalOnline += 1;
    }
  }
  return totalOnline;
  // Only change code above this line
}

console.log(countOnline(users));
