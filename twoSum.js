//given an array of integers nums and integer target,return indices of the two numbers such that they add up to target
//you may not use the same element twice, you can return answer in any order

//startegy1: pointers i for first and j for i+1 cons for this is time complexity is o(n^2)

/* function twoSum(nums, target) {
    //first pointer
    for (let i = 0; i < nums.length; i++) {
        //second pointer
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
}
} */

//strategy2: hash map, more optimal

function twoSum(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    //pointing to current number as i is increasing
    const currNum = nums[i];
    const numToFind = target - currNum;

    if (hashMap[numToFind] >= 0) {
      return [hashMap[numToFind], i];
    } else {
      hashMap[currNum] = i;
    }
  }
}

console.log(twoSum([1, 3, 5], 6));
