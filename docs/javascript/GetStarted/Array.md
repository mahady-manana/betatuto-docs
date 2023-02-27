---
tag: "javascript"
slug: "/javascript/js-array"
date: "2023-02-27"
title: JavaScript Arrays
description: An array is a data structure in JavaScript used to store a collection of elements of the same or different data types in a single variable."
category: "Get Started"
order: 8
githubPath: /javascript/GetStarted/Array.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

In JavaScript, an **array** is a collection of values or elements that can be of any data type, including other arrays. Arrays can be used to store and manipulate multiple values as a single entity.

Arrays in JavaScript are mutable, which means that you can modify, add or remove elements from them after they are created.

### Creating an Array

You can create an array in JavaScript using the Array constructor function or using array literal notation.

```javascript
// using Array constructor
const array1 = new Array();

// using array literal notation
const array2 = [];
```

You can also initialize the array with values using array literal notation.

```javascript
const array3 = [1, 2, 3, 4, 5];
const array4 = ["apple", "banana", "orange"];
```

## Accessing Array Elements

You can access elements of an array using its index, which starts from 0 for the first element.

```javascript
const array = [1, 2, 3];
console.log(array[0]); // 1
console.log(array[1]); // 2
console.log(array[2]); // 3
```

## Modifying Array Elements

You can modify the value of an element in an array by assigning a new value to it using its index.

```javascript
const array = [1, 2, 3];
array[1] = 4;
console.log(array); // [1, 4, 3]
```

## Array Methods

JavaScript provides a number of built-in methods for working with arrays.

- `Array.prototype.concat()`: returns a new array that is the combination of two or more arrays.

- `Array.prototype.filter()`: returns a new array with all elements that pass the test implemented by the provided function.

- `Array.prototype.find()`: returns the first element in an array that satisfies a provided testing function.

- `Array.prototype.findIndex()`: returns the index of the first element in an array that satisfies a provided testing function.

- `Array.prototype.forEach()`: executes a provided function once for each array element.

- `Array.prototype.includes()`: determines whether an array includes a certain value among its elements, returning true or false as appropriate.

- `Array.prototype.indexOf()`: returns the index of the first occurrence of a specified value in an array, or -1 if it is not present.

- `Array.prototype.join()`: joins all elements of an array into a string.

- `Array.prototype.map()`: returns a new array with the results of calling a provided function on every element in the calling array.

- `Array.prototype.pop()`: removes the last element from an array and returns that element.

- `Array.prototype.push()`: adds one or more elements to the end of an array and returns the new length of the array.

- `Array.prototype.reduce()`: applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

- `Array.prototype.reverse()`: reverses the order of the elements in an array.

- `Array.prototype.shift()`: removes the first element from an array and returns that element.
-
- `Array.prototype.slice()`: returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

- `Array.prototype.some()`: tests whether at least one element in the array passes the test implemented by the provided function.

- `Array.prototype.sort()`: sorts the elements of an array in place and returns the sorted array.

- `Array.prototype.splice()`: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- `Array.prototype.toString()`: returns a string representing the specified array and its elements.

- `Array.prototype.unshift()`: adds one or more elements to the beginning of an array and returns the new length of the array.

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

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/Array.md" target="_blank">Edit this page on Github</a>
