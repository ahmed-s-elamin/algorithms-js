//given a staircase of 'n' steps
//count the number of distinct ways to climb to top
//you can either climb 1 step or 2 steps at a time

// function climbing(n) {
//   const ways = [1, 2]; //allowed climbs
//   for (let i = 2; i <= n; i++) {
//     ways[i] = ways[i - 1] + ways[i - 2];
//   }
//   return ways[n - 1];
// }

//recursive
function climb(n) {
  if (n < 2) return 1;

  return climb(n - 1) + climb(n - 2);
}

//O(2^n)

console.log(climb(1));
console.log(climb(2));
console.log(climb(3));
console.log(climb(4));
console.log(climb(5));
