---
tag: "javascript"
slug: "/javascript/array/push"
date: "2022-11-24"
title: Array.prototype.push()
description: "The Array.prototype.push() method adds one or more elements to the end of an array and returns the new length of the array."
category: "Array Methods"
order: 2
githubPath: /javascript/Array/ArrayPrototypePush.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.push()` method adds one or more elements to the end of an array and returns the new length of the array.


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
array.push(element1[, ...[, elementN]])
array.push(element1[, element2[, ...[, elementN]]])

```

### Parameters

- `element1`: The first element to add to the array.
- `elementN` (optional): Additional elements to add to the end of the array.

### return value

The new length of the array after the elements have been added.

### Examples

```javascript
const animals = ["dog", "cat"];
const newLength = animals.push("bird");
// animals is now ["dog", "cat", "bird"]
// newLength is 3

const animals2 = ["dog", "cat"];
animals2.push("bird", "fish");
// animals2 is now ["dog", "cat", "bird", "fish"]
```

## Use cases

Adding Elements to an Array: The `push()` method is commonly used to add one or more elements to an array.

```javascript
const fruits = ["apple", "banana"];
fruits.push("orange", "mango");
// fruits is now ['apple', 'banana', 'orange', 'mango']
```

Merging Arrays: The push() method can also be used to merge multiple arrays into one.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const result = [];
result.push(...array1, ...array2, ...array3);
// result is now [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Implementing a Stack: The push() method can be used to implement a stack, which is a collection of elements that follows the Last-In-First-Out (LIFO) principle.

```javascript
const stack = [];
stack.push("item 1");
stack.push("item 2");
stack.push("item 3");
console.log(stack.pop()); // "item 3"
console.log(stack.pop()); // "item 2"
console.log(stack.pop()); // "item 1"
```

Appending Multiple Arguments to a Function: The push() method can be used to append multiple arguments to a function call.

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
numbers.push(4, 5, 6);
console.log(sum(...numbers)); // 15
```

> Note: The push() method modifies the original array and returns the new length of the array after the elements have been added.

## Notes

- The `push()` method modifies the original array.
- You can pass multiple elements as arguments to `push()`.
- The return value of `push()` is the new length of the array after the elements have been added.
- The `push()` method can be used to append elements to the end of an array, similar to the [`concat()`](/javascript/array/concat) method. However, `push()` modifies the original array, while `concat()` returns a new array.

