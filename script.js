let arr = [1, 2, 3, 4];
console.log(arr.map((item) => item * 2));

// Stack implementation using functional programming
const createStack = () => ({
  items: [],
  push(item) {
    return { ...this, items: [...this.items, item] };
  },
  pop() {
    if (this.isEmpty()) return null;
    const [last, ...rest] = this.items.reverse();
    return { value: last, stack: { ...this, items: rest.reverse() } };
  },
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  },
  isEmpty() {
    return this.items.length === 0;
  },
});

// Function to reverse a string using a stack
const reverseString = (str) => {
  const stack = str
    .split("")
    .reduce((stack, char) => stack.push(char), createStack());
  let reversedString = "";

  while (!stack.isEmpty()) {
    const { value, stack: newStack } = stack.pop();
    reversedString += value;
    stack = newStack;
  }

  return reversedString;
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5


// Example usage
// const inputString = "Hello, world!";
// console.log("Original string:", inputString);
// console.log("Reversed string:", reverseString(inputString));
