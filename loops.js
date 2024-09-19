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
