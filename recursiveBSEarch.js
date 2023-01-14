// Given a sorted array of 'n' elements and a target 't'
// find the index of 't' in the array
// return -1 if not found

function search(arr, target, l, r) {
  if (l > r) return -1;

  let mid = Math.floor((l + r) / 2);

  if (target === arr[mid]) {
    return mid;
  }
  if (target < mid) {
    return search(arr, target, l, mid - 1);
  } else {
    return search(arr, target, mid + 1, arr.length - 1);
  }
}

function binarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
