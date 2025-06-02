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

function longestPalindromicSubstring(s) {
  if (!s || s.length === 0) return "";

  let start = 0;
  let maxLength = 1;

  // Helper function to expand around center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // Return length and starting position of palindrome
    return [right - left - 1, left + 1];
  }

  for (let i = 0; i < s.length; i++) {
    // Check odd length palindromes (single character center)
    let [len1, start1] = expandAroundCenter(i, i);
    // Check even length palindromes (between two characters)
    let [len2, start2] = expandAroundCenter(i, i + 1);

    // Update if we find a longer palindrome
    if (len1 > maxLength) {
      start = start1;
      maxLength = len1;
    }
    if (len2 > maxLength) {
      start = start2;
      maxLength = len2;
    }
  }

  return s.substring(start, start + maxLength);
}

// Example usage:
console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // Output: "bb"
console.log(longestPalindromicSubstring("racecar")); // Output: "racecar"
