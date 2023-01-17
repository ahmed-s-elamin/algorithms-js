//given an array of integers, sort array

function insertSort(arr) {
  //since index 0 is sorted traverse 1 to length-1
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i]; //number to insert
    let j = i - 1; //sorted part
    //iterating over the sorted part
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j]; //shifting sorted element to right
      j--;
    }
    arr[j + 1] = nti;
  }
}

const arr = [2, 5, 3, 4, 1];
insertSort(arr);
console.log(arr);
