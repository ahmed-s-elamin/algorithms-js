//Given an array of integers, sort the array

/* 
psuedo code
pivot = last element
if smaller than pivot => right
if greater than pivot => left
repeat in subarrays
concatenate arrays  
*/

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1]; //point pivot
  let left = [];
  let right = [];
  //traverse arr and classify left and right arr
  for (let i = 0; i < arr.length - 1; i++) {
    //compare with pivot and push into proper arr
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  //recursively concatenate arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//worst o(n^2)
//average o(nlogn)

const arr = [2, 5, 3, 4, 1];
quickSort(arr);
console.log(arr);
