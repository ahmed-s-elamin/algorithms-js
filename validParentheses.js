/**
 * @param {string} s
 * @return {boolean}
 */

/* 
create obj
create stack
traverse string
*/

function isValid(s) {
  const obj = { "(": ")", "[": "]", "{": "}" };
  stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] !== obj[stack.pop()]) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("([)"));
