const testArr = [8, 0, 9, 2, 4, 6, 5, 1, 7, 3, 0, 3, 5, 7, 8];

function bubblesort (arr) {
  let ret = [...arr];

  while (true) {
    let swapped = false;
    for (let i = 1; i < ret.length; i++) {
      if (ret[i] < arr[i - 1]) {
        let buffer = ret[i];
        ret[i] = ret[i - 1];
        ret[i - 1] = buffer;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return ret;
}

console.log('Test array', testArr);
console.log('Array.sort', testArr.sort((a, b) => a - b));
console.log('Bubblesort', bubblesort(testArr));
