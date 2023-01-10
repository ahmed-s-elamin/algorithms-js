/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/* 
params string {s}
return {boolean}
*/

//strategy: pointers

function isPalindrome(s) {
  //regex
  s = s.replace(/[^a-z0-9]/gi, "");
  s = s.toLowerCase();

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}
