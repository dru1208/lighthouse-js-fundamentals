function lastIndexOf(array, value) {
  while (array.length > 1) {
    if (array.pop() === value) {
      return (array.length);
    } else continue;
  } if (array.length === 1) {
    if (array[0] === value) {
      return 0;
    } else return -1
  } else return -1
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);