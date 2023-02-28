---
tag: "javascript"
slug: "/javascript/array"
date: "2022-11-24"
title: "Array Methods"
category: "Array Methods"
description: "An array is a collection of elements or values, it is used to store and manipulate data in a program."
categoryOrder: 2
order: 1
githubPath: /javascript/Array/index.md
contributor: [
  {
    name: "Mahady Manana",
    link: "https://twitter.com/MahadyManana"
  }
]
---

## Overview

An array is a collection of similar data types that are stored together in a contiguous block of memory.

 **Array methods** are functions that can be used to perform various operations on arrays, such as adding, removing, or modifying elements.


- [`Array.prototype.concat()`](/javascript/array/concat): returns a new array that is the combination of two or more arrays.

- [`Array.prototype.filter()`](/javascript/array/filter): returns a new array with all elements that pass the test implemented by the provided function.

- [`Array.prototype.find()`](/javascript/array/find): returns the first element in an array that satisfies a provided testing function.

- [`Array.prototype.findIndex()`](/javascript/array/find-index): returns the index of the first element in an array that satisfies a provided testing function.

- [`Array.prototype.forEach()`](/javascript/array/for-each): executes a provided function once for each array element.

- [`Array.prototype.includes()`](/javascript/array/includes): determines whether an array includes a certain value among its elements, returning true or false as appropriate.

- [`Array.prototype.indexOf()`](/javascript/array/index-of): returns the index of the first occurrence of a specified value in an array, or -1 if it is not present.

- [`Array.prototype.join()`](/javascript/array/join): joins all elements of an array into a string.

- [`Array.prototype.map()`](/javascript/array/map): returns a new array with the results of calling a provided function on every element in the calling array.

- [`Array.prototype.pop()`](/javascript/array/pop): removes the last element from an array and returns that element.

- [`Array.prototype.push()`](/javascript/array/push): adds one or more elements to the end of an array and returns the new length of the array.

- [`Array.prototype.reduce()`](/javascript/array/reduce): applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

- `Array.prototype.reverse()`: reverses the order of the elements in an array.

- [`Array.prototype.shift()`](/javascript/array/shift): removes the first element from an array and returns that element.
-
- [`Array.prototype.slice()`](/javascript/array/slice): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

- [`Array.prototype.some()`](/javascript/array/some): tests whether at least one element in the array passes the test implemented by the provided function.

- [`Array.prototype.sort()`](/javascript/array/sort): sorts the elements of an array in place and returns the sorted array.

- [`Array.prototype.splice()`](/javascript/array/splice): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- [`Array.prototype.toString()`](/javascript/array/to-string): returns a string representing the specified array and its elements.

- [`Array.prototype.unshift()`](/javascript/array/unshift): adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
// Create an array
const myArray = [1, 2, 3, 4, 5];

// push(): Add an element to the end of the array
myArray.push(6);
console.log(myArray); // [1, 2, 3, 4, 5, 6]

// pop(): Remove the last element from the array
myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5]

// shift(): Remove the first element from the array
myArray.shift();
console.log(myArray); // [2, 3, 4, 5]

// unshift(): Add an element to the beginning of the array
myArray.unshift(1);
console.log(myArray); // [1, 2, 3, 4, 5]

// slice(): Return a new array containing a subset of the elements
const slicedArray = myArray.slice(2, 4);
console.log(slicedArray); // [3, 4]

// splice(): Remove or replace elements in the array
myArray.splice(2, 1); // Remove one element starting from index 2
console.log(myArray); // [1, 2, 4, 5]
myArray.splice(2, 0, 3); // Add element 3 starting from index 2
console.log(myArray); // [1, 2, 3, 4, 5]

// indexOf(): Find the index of an element in the array
const index = myArray.indexOf(3);
console.log(index); // 2

// forEach(): Iterate over the array elements
myArray.forEach((element) => {
  console.log(element);
});

// map(): Create a new array by applying a function to each element
const mappedArray = myArray.map((element) => {
  return element * 2;
});
console.log(mappedArray); // [2, 4, 6, 8, 10]

// filter(): Create a new array with elements that pass a test
const filteredArray = myArray.filter((element) => {
  return element % 2 === 0;
});
console.log(filteredArray); // [2, 4]
```