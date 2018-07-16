function concat(array1, array2) {
  var num = 0
  if (array2.length === 0) {
    return array1
  }
  while (num <= array2.length) {
    array1.push(array2[num]);
    num ++;
    if (num === array2.length) {
      break;
    }
  } return array1
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);