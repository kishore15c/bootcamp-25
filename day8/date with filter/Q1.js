// 1. Filter out falsy values from an array
// Input:
// [0, "", false, null, undefined, 1, "hello"]
// Output:
// [1, "hello"]

let arr1 = [0, "", false, null, undefined, 1, "hello"];
let truthyValues = arr1.filter(Boolean);

console.log(truthyValues);
