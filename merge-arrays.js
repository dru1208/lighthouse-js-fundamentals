function numsort (a, b) {
  return a - b;
}
function merge (arr1, arr2) {
  for (let num = 0; num < arr2.length; num ++) {
    arr1.push(arr2[num]);
  }
  arr1.sort(numsort);
  return arr1
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);