function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
//o(2^n)
console.log(fib(1)); //1
console.log(fib(6)); //8
