function range(start, end, step) {
  if (start === undefined || step === undefined || end === undefined || start > end || step <= 0) {
    return [];
  } else {
    var list = [];
    while (start <= end) {
      list.push(start);
      start += step;
    } return list
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));