function Palindrome(value) {
    let str = ""+value;
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
  
  Palindrome(1211)