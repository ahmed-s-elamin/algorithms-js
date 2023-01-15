//given an array of integers, sort array

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = nti;
  }
}

const arr = [2, 5, 3, 4, 1];
insertSort(arr);
console.log(arr);
