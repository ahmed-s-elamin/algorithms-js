function isPowerOf2(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }

  return true;
}

//bitwise
/* 
function isPowerOf2(n){
    if(n < 1) return false
    return (n & (n - 1)) === 0
}
*/

console.log(isPowerOf2(2));
