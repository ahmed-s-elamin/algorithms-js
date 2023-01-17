//given 2 finite non-empty sets, find their cartesian product

/* 
traverse arr1 and arr2
pair each element in the first arr with each element in the second arr 
*/

function cartesian(a, b) {
  const res = [];
  //traversing A
  for (let i = 0; i < a.length; i++) {
    //travesring b
    for (let j = 0; j < b.length; j++) {
      //pairing a elements with elements of b
      res.push([a[i], b[j]]);
    }
  }
  return res;
}

const a = [1, 2];
const b = [3, 4];
console.log(cartesian(a, b)); //[ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]
