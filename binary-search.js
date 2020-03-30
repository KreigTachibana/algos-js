function generateValues() {
  const array = [];
  for (var i = 0; i < 10000000; i++) {
    array.push(i);
  }
  return array;
}

function logResults(results) {
  console.log('Search     Simple                           Binary');
  console.log('number     Result     Time       Iterations Result     Time       Iterations');
  const pad = (input = '') => String(input).padEnd(10, ' ');
  results.forEach(({ search, simple, simpleTime, simpleIterations, binary, binaryTime, binaryIterations }) => {
    console.log(`${pad(search)} ${pad(simple)} ${pad(simpleTime)} ${pad(simpleIterations)} ${pad(binary)} ${pad(binaryTime)} ${pad(binaryIterations)}`);
  });
}

function simpleSearch(arr, val, iterationCb) {
  for (let i = 0; i < arr.length; i++) {
    if (iterationCb) {
      iterationCb();
    }

    if (arr[i] === val) {
      return i;
    }
  }
}

function binarySearch(arr, val, iterationCb) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    if (iterationCb) {
      iterationCb();
    }

    const mid = Math.floor((max + min) / 2);
    const arrVal = arr[mid];
    if (arrVal === val) {
      return mid;
    } else if (val > arrVal) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return null;
}



const testArr = generateValues();
const results = [];
for (var i = 0; i < 5; i++) {
  const search = Math.floor(Math.random() * testArr.length);
  const result = {
    search,
    simple: null,
    simpleTime: null,
    simpleIterations: 0,
    binary: null,
    binaryTime: null,
    binaryIterations: 0,
  };


  result.simpleTime = new Date();
  result.simple = simpleSearch(testArr, search, () => result.simpleIterations++);
  result.simpleTime = new Date() - result.simpleTime;

  result.binaryTime = new Date();
  result.binary = binarySearch(testArr, search, () => result.binaryIterations++);
  result.binaryTime = new Date() - result.binaryTime;

  results.push(result);
}

logResults(results);
