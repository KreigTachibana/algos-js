const testArr = [8, 0, 9, 2, 4, 6, 5, 1, 7, 3, 0, 3, 5, 7, 8];

function quicksort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[0], arr[1]];
    }
    return arr;
  }

  if (arr.length > 2) {
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const lesser = [];
    const greater = [];

    arr.forEach((el, i) => {
      if (i !== pivotIndex) {
        if (el > pivot) {
          greater.push(el);
        } else {
          lesser.push(el);
        }
      }
    });

    const lesserSorted = quicksort(lesser);
    const greaterSorted = quicksort(greater);

    return [...lesserSorted, pivot, ...greaterSorted];
  }
}

console.log('Test array', testArr);
console.log('Array.sort', testArr.sort((a, b) => a - b));
console.log('Quicksort ', quicksort(testArr));
