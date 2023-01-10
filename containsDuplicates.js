/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
sort array
traverse and check if current num = next num
*/

function containsDuplicate(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 4, 5, 8, 3, 5]));
