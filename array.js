// separate 0 and 1
function separateZeroAndOne(arr) {
  let i = 0;
  let j = arr.length - 1;
  console.log(arr);
  while (i <= j) {
    // if (arr[i] == 0) {
    //   i++;
    // }
    // if (arr[i] == 1) {
    //   let a = arr[j];
    //   arr[j] = arr[i];
    //   arr[i] = a;
    //   j--;
    //   if (a == 0) {
    //     i++;
    //   }
    // }
    if (arr[i] == 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    } else {
      i++;
    }
  }
  return arr;
}

// console.log(separateZeroAndOne([1, 0, 0, 1, 0, 1, 1, 0, 0]));

const repeatedChar = (string) => {
  let stringCount = {};

  for (let str of string) {
    if (stringCount[str]) {
      stringCount[str]++;
    } else {
      stringCount[str] = 1;
    }
  }
  return stringCount;
};

// console.log(repeatedChar("kashish"));

// reverse an array

function reverseArray(array) {
  for (let idx = 0; idx < Math.floor(array.length / 2); idx++) {
    let temp = array[idx];
    array[idx] = array[array.length - 1 - idx];
    array[array.length - 1 - idx] = temp;
  }
  return array;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

//merge sorted array

function mergeSortedArray(a, b) {
  let c = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }

  // Add remaining elements from `a` or `b` if any
  while (i < a.length) {
    c.push(a[i]);
    i++;
  }

  while (j < b.length) {
    c.push(b[j]);
    j++;
  }

  return c;
}
// console.log(mergeSortedArray([1, 2, 4, 9, 11], [0, 3, 4, 6]));

// max consecutive ones in a binary array

function maxConsecutiveOnes(arr) {
  let finalAns = 0;
  let currentAns = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentAns++;
    } else {
      if (finalAns < currentAns) {
        finalAns = currentAns;
      }
      currentAns = 0;
    }

    if (i == arr.length - 1) {
      if (finalAns < currentAns) {
        finalAns = currentAns;
      }
    }
  }
  return finalAns;
}

// console.log(
//   maxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1])
// );

// return missing number from an array from 1 to n

function returnMissingNumbers(arr, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let currentValue = Math.abs(arr[i]);
    if (arr[currentValue - 1] > 0) {
      arr[currentValue - 1] = -arr[currentValue - 1];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
}

// console.log(returnMissingNumbers([8, 2, 3, 2, 5, 6, 6, 8], 8));

// two sum

function twoSum(arr, target) {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] == 6) {
  //       return [i, j];
  //     }
  //   }
  // }

  let sortedArr = arr.map((a, i) => [a, i]).sort((a, b) => a[0] - b[0]);
  let i = 0;
  let j = sortedArr.length - 1;

  while (i < j) {
    if (sortedArr[i][0] + sortedArr[j][0] == target) {
      return [sortedArr[i][1], sortedArr[j][1]];
    } else if (sortedArr[i][0] + sortedArr[j][0] > target) {
      j--;
    } else if (sortedArr[i][0] + sortedArr[j][0] < target) {
      i++;
    }
  }
}

// console.log(twoSum([3, 2, 4], 6));

// 2d array
// creating a 2d array
function create2dArray(row, column) {
  const arr = new Array(row).fill(new Array(column).fill(0));
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr;
}

console.log(create2dArray(5, 6));
