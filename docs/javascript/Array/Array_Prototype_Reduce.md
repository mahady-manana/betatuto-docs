---
tag: "javascript"
slug: "/javascript/array/reduce"
date: "2022-11-24"
updated: "2023-02-26"
title: "Array.prototype.reduce()"
category: "Array"
order: 1003
contributor: [
  {
    name: "Mahady Manana",
    link: "https://www.betatuto.com/"
  }
]
---

## Overview

The `reduce()` method in JavaScript Array is used to apply a function to every element in an array and reduce the array to a single value. The `reduce()` method executes a provided function for each value of the array (from left-to-right) and reduces the array to a single value.

## Syntax

```javascript
array.reduce(callback[, initialValue])
array.reduce((accumulator, currentValue) => {/* */}, initialValue)
array.reduce((accumulator, currentValue, currentIndex) => {/* */}, initialValue)
array.reduce((accumulator, currentValue, currentIndex, array) => {/* */}, initialValue)
```

### Syntax explanation

- `array` - The array to be reduced.

- `callback` - The function to execute on each element in the array.

- `initialValue` (optional) - The initial value to use as the accumulator in the reduction.

The `callback` function takes four arguments:

- `accumulator` - The accumulated result value.

- `currentValue` - The current element being processed in the array.

- `currentIndex` (optional) - The index of the current element being processed in the array.

- `array` (optional) - The original array being processed.

### Example: Array.prototype.reduce()

```javascript
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // Output: 15
```

## Use cases

The `reduce()` method can be used in many scenarios to aggregate or transform data in an array. Here are some examples of its use cases:

### Summing an Array of Numbers

One common use case of `reduce()` is to sum an array of numbers. This can be achieved by using an initial value of 0 for the accumulator and adding each element in the array to it.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15
```

### Flattening an Array of Arrays

Another use case of `reduce()` is to flatten an array of arrays into a single array. This can be achieved by using the `concat()` method to add each array to the accumulator.

```javascript
const arrays = [[1, 2], [3, 4], [5]];
const flattened = arrays.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(flattened); // Output: [1, 2, 3, 4, 5]
```

### Grouping Objects by Property

`reduce()` can also be used to group objects in an array by a specific property. This can be achieved by using an object as the accumulator, with each key representing a unique value for the property.

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Dave", age: 30 },
];

const grouped = people.reduce((accumulator, currentValue) => {
  const age = currentValue.age;
  accumulator[age] = accumulator[age] || [];
  accumulator[age].push(currentValue);
  return accumulator;
}, {});

console.log(grouped);
/* Output:
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 },
    { name: 'Dave', age: 30 }
  ]
}
*/
```

These are just a few examples of the many ways in which `reduce()` can be used to transform or aggregate data in an array.