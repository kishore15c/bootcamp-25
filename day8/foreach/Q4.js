// 4. Increment all elements in an array by 1.
// Input:
// [1, 2, 3]
// Output:
// [2, 3, 4]

let nums = [1, 2, 3];

nums.forEach(function (value, index, arr) {
  arr[index] = value + 1; // modify in place
});

console.log(nums); // Output: [2, 3, 4]
