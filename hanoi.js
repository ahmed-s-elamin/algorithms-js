/* problem
remove the entire stack obeying:
1. only one disk maybe moved at a time
2. each move consists of taking the upper disk
from top of the stacks and replacing it on top of another stack
3. no disc can be placed on top of a smaller disk 
*/

function hanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disc 1 ${fromRod} to ${toRod}`);
    return;
  }
  hanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`moved dik ${n} from ${fromRod} to ${toRod}`);
  hanoi(n - 1, usingRod, toRod, fromRod);
}

hanoi(3, "A", "C", "B");
