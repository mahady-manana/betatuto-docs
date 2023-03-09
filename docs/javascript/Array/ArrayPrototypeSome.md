---
tag: "javascript"
slug: "/javascript/array/some"
date: "2023-03-09"
title: Array.prototype.some()
description: "The Array.prototype.some() method tests whether at least one element in the array passes the test implemented by the provided function."
category: "Array Methods"
order: 17
prevPath: /javascript/array/sort
nextPath: /javascript/array/reverse
githubPath: /javascript/Array/ArrayPrototypeSome.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Overview.

The `Array.prototype.some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value indicating whether such an element exists or not.


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

### Syntax

```javascript
array.some(callback[, thisArg])
array.some((element) => {/**/}, thisArg)
array.some((element, index) => {/**/}, thisArg)
array.some((element, index, array) => {/**/}, thisArg)
```

### Parameters

- `callback` (required): A function that accepts up to three arguments. The some() method calls the callback function for each element in the array until the callback returns a truthy value. The callback is passed three arguments:
  - `element`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array `some()` was called upon.
- `thisArg` (optional): Object to use as `this` when executing callback.

### return value

A `boolean` value indicating whether at least one element in the array passes the test implemented by the provided function.

### Examples

```javascript
const array = [2, 5, 8, 1, 4];
const hasEven = array.some((element) => element % 2 === 0);
console.log(hasEven); // Output: true

const words = ["apple", "banana", "grape", "orange"];
const hasLongWord = words.some((word) => word.length > 6);
console.log(hasLongWord); // Output: true

const emptyArray = [];
const hasEmptyElement = emptyArray.some((element) => element === undefined);
console.log(hasEmptyElement); // Output: false
```
## Use cases

Here are some examples of how the `some()` method can be used:

Example 1: Checking if an array contains a specific value

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasThree = numbers.some((number) => number === 3);
// hasThree is true
const hasSix = numbers.some((number) => number === 6);
// hasSix is false
```

Example 2: Checking if any element satisfies a condition

```javascript
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const hasYoungPerson = people.some((person) => person.age < 30);
// hasYoungPerson is true
const hasOldPerson = people.some((person) => person.age > 40);
// hasOldPerson is false
```

Example 3: Checking if an array contains at least one truthy value

```javascript
const values = [0, '', false, null, undefined, 42];
const hasTruthyValue = values.some(Boolean);
// hasTruthyValue is true
const allFalsyValues = values.every(Boolean);
// allFalsyValues is false
```

## Notes

The `some()` method does not modify the original array and returns a `boolean` value indicating whether at least one element meets the test condition or not.
