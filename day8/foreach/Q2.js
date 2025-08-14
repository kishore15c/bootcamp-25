// 2. Skip negative numbers in an array:
// Input:
// [1, -2, 3, -4, 5]
// Output:
// [1, 3, 5]

let numbers = [1, -2, 3, -4, 5];
let positives = [];

numbers.forEach(function (num) {
  if (num >= 0) {
    // skip if negative
    positives.push(num);
  }
});

console.log(positives);
