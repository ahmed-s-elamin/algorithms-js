function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

//o(n)

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(5)); //120
