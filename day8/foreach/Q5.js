// 5. Increase the age of all users in an array of objects.
// Input:
// [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 }

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

users.forEach(function (user) {
  user.age += 1; // increment age
});

users.forEach((user) => console.log(user));
