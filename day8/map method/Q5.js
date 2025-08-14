/*5. Map an array of strings to an array of text display with letter spacing.
Input:
["hello", "world", "javascript"]
Output:
['h e l l o', 'w o r l d', 'j a v a s c r i p t']*/

let words = ["hello", "world", "javascript"];
let spaced = words.map((word) => word.split("").join(" "));

console.log(spaced);
