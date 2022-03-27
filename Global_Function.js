let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2();

const loc = "foo";
function myTest() {
  console.log(loc);
}

myTest();
console.log(loc);

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  console.log(someVar); // Head
  return someVar;
}

myFun();

console.log(someVar); // hat
