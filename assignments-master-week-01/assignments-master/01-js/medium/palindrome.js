/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  for (i = 0; left < right; i++) {
    while (!str[left].toLowerCase().match(/[a-z]/i)) {
      left++;
    }
    while (!str[right].toLowerCase().match(/[a-z]/i)) {
      right--;
    }
    if (str[left].toLowerCase() == str[right].toLowerCase()) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
