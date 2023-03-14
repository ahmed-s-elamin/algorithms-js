// Given a sorted array of 'n' elements and a target 't'
// find the index of 't' in the array
// return -1 if not found

/* 
using pointer l & r
get middle = (l + r)/2
if t = mid, return mid
if t < mid, r = mid -1
if t > mid, l = mid +1
*/

function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target === arr[mid]) return mid;
    if (target < mid) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 10, 4, 6], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
