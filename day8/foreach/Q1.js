// "forEach" Method in JavaScript: Practical Questions:
// 1. Find the length of each string in an array:
// Input:
// ["apple", "banana", "grape"];
// Output:
// [5, 6, 5]

let fruits = ["apple", "banana", "grape"];
let lengths = []; // to store lengths of each string

fruits.forEach(function (item) {
  lengths.push(item.length); // get string length and push to array
});

console.log(lengths);
