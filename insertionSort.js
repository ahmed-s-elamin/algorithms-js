//given an array of integers, sort array

function insertSort(arr) {
  // traverse from index 1
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let sorted = i - 1;
    //compare nti with sorted part
    while (sorted >= 0 && arr[sorted] > nti) {
      arr[sorted + 1] = arr[sorted];
      sorted = sorted - 1;
    }
    arr[sorted + 1] = nti;
  }
}

//O(n^2)

const arr = [2, 5, 3, 4, 1];
insertSort(arr);
console.log(arr);
