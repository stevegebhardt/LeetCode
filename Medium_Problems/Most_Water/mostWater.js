// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

//Create function that accepts and array of heights
const maxArea = (height) => {
  let maximumArea = 0;

  for (let l = 0; l < height.length; l++) {
    for (let r = 1; r < height.length; r++) {
      let area = Math.min(height[l], height[r]) * r - l;
      maximumArea = Math.max(maximumArea, area);
    }
  }
  console.log(maximumArea);
};

const array = [1, 1];
maxArea(array);
