// loops practice problems

// let count = 1;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// fib series
// let fibCount = 0;
// let fibArray = [0, 1];

// while (fibCount <= 10) {
//   let [a, b] = [fibArray[fibArray.length - 2], fibArray[fibArray.length - 1]];
//   let c = a + b;
//   a = b;
//   b = c;
//   fibArray.push(c)
//   fibCount++;
// }
// console.log({ fibArray },'123');

let fibCount = 10;
let num1 = 0;
let num2 = 1;
let fibArray = [num1, num2];
while (fibArray.length <= fibCount) {
  let num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
  fibArray.push(num3);
}
// console.log({ fibArray });

let string = "rawat";
let reverseStr = "";
let strCount = 1;
while (strCount <= string.length) {
  reverseStr += string[string.length - strCount];
  strCount++;
}

// console.log({ reverseStr });
let n = 5;

for (let col = 1; col <= n; col++) {
  let star = "";
  for (let row = 1; row <= n; row++) {
    star += "*";
  }
  // console.log(star);
}

// *
// **
// ***
// ****
// *****

for (let col = 1; col <= n; col++) {
  let star = "";
  for (let space = 1; space <= n - col; space++) {
    star += "-";
  }
  for (let s = 1; s <= col; s++) {
    star += "*";
  }

  // console.log(star);
}

for (let col = 1; col <= n; col++) {
  let str = "";
  for (let space = 1; space <= n - col; space++) {
    str += " ";
  }
  for (let star = 1; star <= 2 * col - 1; star++) {
    str += "*";
  }
  // console.log(str);
}

// for (let i = 1; i <= n; i++) {
//   let star = "";
//   for (let j = 1; j <= n - i; j++) {
//     star += " ";
//   }
//   for (let j = 1; j <= n - i; j++) {
//     star += " ";
//   }
//   for(let k=1; k<= 2*i-1;k++){
//     star += "*";
//   }
//   console.log(star)
// }

// Problem solving of palindrome by indexing

let x = 1234;
let sum = 0;
while (x > 0) {
  let lastReminder = x % 10;
  sum += lastReminder;
  x = Math.floor(x / 10);
  // console.log(sum);
}

// fib series

let a = 0;
let b = 1;
let n2 = 10;
let i = 0;
let arr = [a, b];
while (i < n2 - 2) {
  let c = a + b;
  arr.push(c);
  a = b;
  b = c;
  i++;
}
// console.log(arr);

// fib series using for loop

function fib(n) {
  if (n == 0 || n == 1) {
    return 0;
  }

  if (n == 2) {
    return 1;
  }
  let a = 0;
  let b = 1;
  let arr = [a, b];
  for (let i = 2; i < n; i++) {
    let c = a + b;
    arr.push(c);
    b = c;
    a = b;
  }
  return arr;
}

console.log(fib(10));

function trap(height) {
  let n = height.length;
  if (n === 0) return 0;

  // Arrays to store the maximum height to the left and right of each index
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  // Calculate leftMax for each index
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Calculate rightMax for each index
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Calculate total trapped water
  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;
}

// Example usage
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
