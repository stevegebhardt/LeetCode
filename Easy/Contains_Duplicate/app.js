// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//create testing array
const nums = [1, 2, 3, 1];

//loop through array starting at index 0

//loop again starting at index 1
//conpare index values for first and second loop
//if they are equal return true, if no number is duplicated return false

const duplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < i; y++) {
      if (nums[y] === nums[i]) return true;
    }
  }
  return false;
};
