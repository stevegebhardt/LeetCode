// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

const number = 1000021;

const isPalindrome = (number) => {
  let pali = number.toString();
  for (let i = 0; i < pali.length; i++) {
    if (pali[i] !== pali[pali.length - 1 - i]) {
      console.log(false);
    }
  }
  console.log(true);
};

isPalindrome(number);
