function Palindrome(value) {
  let str = "" + value;
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      console.log("value is not palindrome");
      return false;
    }
  }
  console.log("value is palindrome");
}

Palindrome(1211);

function lengthOfLongestSubstring(s) {
  const seenChars = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If the character is already seen, adjust the left pointer
    if (seenChars.has(currentChar) && seenChars.get(currentChar) >= left) {
      left = seenChars.get(currentChar) + 1;
    }

    // Update the map with the current character's index
    seenChars.set(currentChar, right);

    // Calculate the current window length and update the max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
