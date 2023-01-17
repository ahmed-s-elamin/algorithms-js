//given a staircase of 'n' steps
//count the number of distinct ways to climb to top
//you can either climb 1 step or 2 steps at a time

function climbing(n) {
  const ways = [1, 2]; //allowed climbs
  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n - 1];
}

console.log(climbing(1));
console.log(climbing(2));
console.log(climbing(3));
console.log(climbing(4));
console.log(climbing(5));
