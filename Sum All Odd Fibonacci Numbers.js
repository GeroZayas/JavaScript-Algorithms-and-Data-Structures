//Sum All Odd Fibonacci Numbers

/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.*/

function sumFibs(num) {
  var fib = [1, 1];
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    if (fib[i] > num) {
      break;
    }
    if (fib[i] % 2 !== 0) {
      sum += fib[i];
    }
  }
  return sum + 2;
}

sumFibs(4);
