// loops practice problems

let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

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
console.log({ fibArray });

let string = "rawat";
let reverseStr = "";
let strCount = 1;
while (strCount <= string.length) {
  reverseStr += string[string.length - strCount];
  strCount++
}

console.log({ reverseStr });
