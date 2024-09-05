// // let arr = [1, 2, 3, 4];
// // console.log(arr.map((item) => item * 2));

// // Stack implementation using functional programming
// const createStack = () => ({
//   items: [],
//   push(item) {
//     return { ...this, items: [...this.items, item] };
//   },
//   pop() {
//     if (this.isEmpty()) return null;
//     const [last, ...rest] = this.items.reverse();
//     return { value: last, stack: { ...this, items: rest.reverse() } };
//   },
//   peek() {
//     if (this.isEmpty()) return null;
//     return this.items[this.items.length - 1];
//   },
//   isEmpty() {
//     return this.items.length === 0;
//   },
// });

// // Function to reverse a string using a stack
// const reverseString = (str) => {
//   const stack = str
//     .split("")
//     .reduce((stack, char) => stack.push(char), createStack());
//   let reversedString = "";

//   while (!stack.isEmpty()) {
//     const { value, stack: newStack } = stack.pop();
//     reversedString += value;
//     stack = newStack;
//   }

//   return reversedString;
// };

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5)); // Output: 5

// function findMiddleNode(head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// }

// // Create a new linked list node
// const createNode = (value, next = null) => ({ value, next });

// // Create a linked list from an array
// const createLinkedList = (arr) => {
//   return arr.reduceRight((acc, value) => createNode(value, acc), null);
// };

// // Print the linked list
// const printLinkedList = (node) => {
//   let current = node;
//   let result = "";
//   while (current) {
//     result += `${current.value} -> `;
//     current = current.next;
//   }
//   console.log(result + "null");
// };

// // Usage
// const list = createLinkedList([1, 2, 3]);
// printLinkedList(list); // Output: 1 -> 2 -> 3 -> null

// // Binary Search Function (Recursive)
// const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
//   if (left > right) return -1; // Base case: target not found

//   const mid = Math.floor((left + right) / 2);

//   if (arr[mid] === target) {
//     return mid; // Target found, return the index
//   }
//   if (arr[mid] < target) {
//     return binarySearch(arr, target, mid + 1, right); // Search in the right half
//   } else {
//     return binarySearch(arr, target, left, mid - 1); // Search in the left half
//   }
// };

// // Usage
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarySearch(arr, 5)); // Output: 4
// console.log(binarySearch(arr, 10)); // Output: -1

// // Example usage
// // const inputString = "Hello, world!";
// // console.log("Original string:", inputString);
// // console.log("Reversed string:", reverseString(inputString));

// // Binary Search Function with Error Handling
// const binarySearch2 = (arr, target, left = 0, right = arr.length - 1) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     throw new Error("Input array must be a non-empty array.");
//   }
//   if (arr.some((_, i, a) => i > 0 && a[i] < a[i - 1])) {
//     throw new Error("Input array must be sorted.");
//   }

//   if (left > right) return -1; // Base case: target not found

//   const mid = Math.floor((left + right) / 2);

//   if (arr[mid] === target) {
//     return mid; // Target found, return the index
//   }
//   if (arr[mid] < target) {
//     return binarySearch2(arr, target, mid + 1, right); // Search in the right half
//   } else {
//     return binarySearch2(arr, target, left, mid - 1); // Search in the left half
//   }
// };

// // Usage
// try {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   console.log(binarySearch2(arr, 5)); // Output: 4
//   console.log(binarySearch2(arr, 10)); // Output: -1
// } catch (e) {
//   console.error(e.message);
// }

// Create a new linked list node
const createNode = (value, next = null) => ({ value, next });

// Create a linked list from an array
const createLinkedList = (arr) => {
  return arr.reduceRight((acc, value) => createNode(value, acc), null);
};

// Print the linked list
const printLinkedList = (node) => {
  const result = [];
  let current = node;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" -> ") + " -> null");
};

// Usage
const list = createLinkedList([1, 2, 3]);
printLinkedList(list); // Output: 1 -> 2 -> 3 -> null

let num1 = 0;
let num2 = 1;
let count = 10;

let fib = [num1, num2];

while (count > 0) {
  let num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
  fib.push(num3);
  count--;
}
console.log({ fib });
