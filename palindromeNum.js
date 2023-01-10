/**
 * @param {number} x
 * @return {boolean}
 */

/*
apprach 1
reversed = turning x to a string then an array then reversing it then back to string
compare reversed to x
*/

// var isPalindrome = function (x) {
//   let reversed = x.toString().split("").reverse().join("");
//   return x.toString() === reversed;
// };

/* 
apprach 2
if negative return false
reversed variable = 0
travese and extract numbers ahead of the decimal
reversed = reversed * 10 + i%10

*/

var isPalindrome = function (x) {
  if (x < 0) return false;
  let reversed = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    reversed = reversed * 10 + (i % 10);
  }
  return reversed === x;
};

console.log(isPalindrome(151));
console.log(isPalindrome(6969));
