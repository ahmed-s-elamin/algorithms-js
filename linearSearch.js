// Given an array of 'n' elements and a target 't'
// find the index of 't' in the array
// return -1 if not found

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

//o(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
