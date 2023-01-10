/**
 * @param {string[]} strs
 * @return {string}
 */

/* 
prefix = first element
traverse strs from second element
compare to refix
cut prefix last character
*/

function longestCommonPrefix(strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}
