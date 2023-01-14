function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

//test
console.log(fib(6)); //3
