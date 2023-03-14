// function isPowerOf2(n) {
//   if (n < 1) return false;

//   while (n > 1) {
//     if (n % 2 !== 0) return false;
//     n = n / 2;
//   }

//   return true;
// }

// o(log n)

function isPowerOf2(n) {
  if (n < 1) return false;
  if (n == 1) {
    return true;
  } else if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//o(1)

console.log(isPowerOf2(1)); //false
console.log(isPowerOf2(2)); //true
console.log(isPowerOf2(4)); //true
console.log(isPowerOf2(5)); //false
