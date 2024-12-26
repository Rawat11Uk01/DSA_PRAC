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
console.log(mergeSortedArray([1, 2, 4, 9, 11], [0, 3, 4, 6]));
