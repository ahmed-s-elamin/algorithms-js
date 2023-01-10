/**
 * @param {string} s
 * @return {number}
 */

/* 
create res = 0
use a map to store roman variables
turn s to array
if roman map < roman string -
else +
return res
*/

function RomanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;
  s = s.split("").forEach((num, i) => {
    //if the next roman is greater then substract
    if (map[num] < map[s[i + 1]]) res -= map[num];
    else res += map[num];
  });
  return res;
}
