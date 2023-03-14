function fibonacci(n) {
  //first 2 numbers always 0, 1
  const fib = [0, 1];
  //populating array with sequence
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

//o(n)

console.log(fibonacci(1)); //[0, 1]
console.log(fibonacci(2)); //[0, 1]
console.log(fibonacci(3)); //[0, 1, 1]
