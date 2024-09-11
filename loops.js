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

// for (let col = 1; col <= 2 * n - 1; col++) {
//   let star = "";
//   for (let s1 = 1; s1 <= n; s1++) {
//     star += " ";
//   }
//   for (let star = 1; star <= ; star++) {
//     str += "*";
//   }
// }

// for (let col = 1; col <= 3(n - 1); col++) {
//   let star = "";
//   for(let s1; s1 <= n - col; s1++){
//     star =" "
//   }
// }

function printDiamond(n) {
  // Upper part of the diamond
  for (let i = 1; i <= n; i++) {
    let str = "";

    // Printing leading spaces
    for (let j = i; j < n; j++) {
      str += " ";
    }

    // Printing stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }

    console.log(str);
  }

  // Lower part of the diamond
  for (let i = n - 1; i >= 1; i--) {
    let str = "";

    // Printing leading spaces
    for (let j = n; j > i; j--) {
      str += " ";
    }

    // Printing stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }

    console.log(str);
  }
}

// Example usage:
printDiamond(5);
