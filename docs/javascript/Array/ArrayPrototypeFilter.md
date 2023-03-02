---
tag: "javascript"
slug: "/javascript/array/filter"
date: "2022-11-24"
title: Array.prototype.filter()
description: "The Array.prototype.filter() method is used to create a new array with all elements that pass the test implemented by the provided function."
category: "Array Methods"
order: 9
githubPath: /javascript/Array/ArrayPrototypeFilter.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.filter()` method is used to create a new array with all elements that pass the test implemented by the provided function. It is one of the many methods available in JavaScript to manipulate arrays. `filter()` is a powerful and flexible method that can be used in a variety of ways.

> The `filter()` method does not modify the original array, but instead returns a new array that contains only the elements that pass the test.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 3
class-name: "table-of-contents"
```

## Syntax

```javascript
array.filter(callback[, thisArg])
array.filter(callback(element[, index[, array]])[, thisArg])

```

### Parameters

- `callback` (required): A function that tests each element of the array. It should return `true` to keep the element, or `false` otherwise. The function takes three parameters:

  - `element`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array filter was called upon.

- `thisArg` (optional): An object to use as this when executing the callback function.

### return value

A new array containing all elements that pass the test implemented by the provided callback function.

### Examples

**Filter even numbers**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// evenNumbers is [2, 4]
```

**Filter objects based on a property**

```javascript
const people = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Bob", age: 20 },
];
const adults = people.filter((person) => person.age >= 25);
// adults is [{ name: 'John', age: 25 }, { name: 'Sarah', age: 30 }]
```

**Use with thisArg**

```javascript
const data = [1, 2, 3, 4, 5];
const context = { threshold: 3 };
const result = data.filter(function (item) {
  return item > this.threshold;
}, context);
// result is [4, 5]
```

## Use Cases

### Filtering Arrays

The most common use case of the `filter()` method is to filter arrays. You can use the `filter()` method to remove unwanted elements from an array based on a certain condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Filter out even numbers
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
```

### Searching Arrays

ou can also use the `filter()` method to search an array for elements that match a certain condition. For example, if you have an array of objects, you can use the `filter()` method to find objects that match a certain property.

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Find users older than 30
const olderUsers = users.filter(function (user) {
  return user.age > 30;
});

console.log(olderUsers); // Output: [{ name: "Charlie", age: 35 }]
```

### Removing Duplicate Values

You can use the `filter()` method to remove duplicate values from an array. The idea is to create a new array that contains only the unique values from the original array.

```javascript
const fruits = ["banana", "apple", "orange", "apple", "pear"];

// Filter out all duplicates
const uniqueFruits = fruits.filter(function (fruit, index, array) {
  return array.indexOf(fruit) === index;
});

console.log(uniqueFruits); // Output: ["banana", "apple", "orange", "pear"]
```

### Creating Subsets of Arrays

You can use the `filter()` method to create subsets of arrays based on a certain condition. For example, if you have an array of objects, you can use the `filter()` method to create a new array that contains only objects that match a certain property.

```javascript
const users = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
];

// Create a subset of male users
const maleUsers = users.filter(function (user) {
  return user.gender === "male";
});

console.log(maleUsers); // Output: [{ name: "Bob", age: 30, gender: "male" }, { name: "Charlie", age: 35, gender:
```

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeFilter.md" target="_blank">Missing information & Error - Edit this page on Github</a>
