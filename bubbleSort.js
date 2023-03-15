//Given an array of integers, sort the array

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      let curr = arr[i];
      let next = arr[i + 1];
      if (curr > next) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

//o(n^2)

const arr = [2, 5, 3, 4, 1];
bubbleSort(arr);
console.log(arr);
