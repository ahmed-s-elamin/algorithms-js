function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

//o(n)

console.log(factorial(0)); //1
console.log(factorial(5)); //120
