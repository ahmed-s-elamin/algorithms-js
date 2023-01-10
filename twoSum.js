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

//strategy2: hash map

function twoSum(nums, target) {}
