// 4. Filter out strings that match a specific pattern
// Input:
// ["apple", "banana", "cherry", "grape"]
// Output:
// ["banana"]

let fruits = ["apple", "banana", "cherry", "grape"];
let patternMatch = fruits.filter((fruit) => /ana/.test(fruit));

console.log(patternMatch);
