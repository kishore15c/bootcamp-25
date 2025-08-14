// 5. Extract objects from an array based on a age property value greater than 18.
// Input:
// [
//     { name: "Alice", age: 12 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 }
// ];
// Output:
// {name: 'Bob', age: 30}
// {name: 'Charlie', age: 22}

let people = [
  { name: "Alice", age: 12 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

let adults = people.filter((person) => person.age > 18);

adults.forEach((person) => console.log(person));
// Output:
// {name: 'Bob', age: 30}
// {name: 'Charlie', age: 22}
