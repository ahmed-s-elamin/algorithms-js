/**
 * @param {number} x
 * @return {boolean}
 */

/*
apprach 1
reversed = turning x to a string then an array then reversing it then back to string
compare reversed to x
*/

var isPalindrome = function (x) {
  let reversed = x.toString().split("").reverse().join("");
  return x.toString() === reversed;
};

/* 
apprach 2
 if negative return false
 reversed variable = 0
 current variable = x
 while for current !== 0
  */
console.log(isPalindrome(151));
