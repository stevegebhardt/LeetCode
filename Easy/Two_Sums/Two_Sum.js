//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums = [2, 7, 11, 15];
const target = 9;
//Expected output : [0, 1]
//Explination: Because nums[0] + nums[1] == 9, we return [0, 1].

//Solution
const twoSum = (nums, target) => {
  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === target) [x, y];
    }
  }
};

twoSum(nums, target);
