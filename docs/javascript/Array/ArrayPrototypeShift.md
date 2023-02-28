---
tag: "javascript"
slug: "/javascript/array/shift"
date: "2022-11-24"
title: Array.prototype.shift()
description: "The Array.prototype.shift() method removes the first element from an array and returns that removed element."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeShift.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The **`Array.prototype.shift()`** method removes the first element from an array and returns that removed element. This method changes the length of the array.

## Syntax

```javascript
array.shift();
```

## Parameters

No paramter.

## return value

The return value of the `shift()` method is the element that was removed from the array. If the array is empty, `undefined` is returned.

## Examples

```javascript
const numbers = [1, 2, 3, 4, 5];
const firstNumber = numbers.shift();
// firstNumber is 1
// numbers is now [2, 3, 4, 5]

const fruits = ["banana", "apple", "orange"];
const firstFruit = fruits.shift();
// firstFruit is 'banana', fruits is now ['apple', 'orange']

const emptyArray = [];
const removedElement = emptyArray.shift();
// removedElement is undefined, emptyArray is still []
```

## Use cases

Here are some use cases with examples for the shift() method:

### Removing the first element of an array:

```javascript
const array = [1, 2, 3, 4, 5];
const firstElement = array.shift();
console.log(array); // Output: [2, 3, 4, 5]
console.log(firstElement); // Output: 1
```

### Implementing a queue:

```javascript
const queue = [1, 2, 3];
const dequeuedElement = queue.shift();
console.log(queue); // Output: [2, 3]
console.log(dequeuedElement); // Output: 1
queue.push(4);
console.log(queue); // Output: [2, 3, 4]
```

### Creating a circular buffer:

```javascript
const buffer = [1, 2, 3];
const removedElement = buffer.shift();
buffer.push(4);
console.log(buffer); // Output: [2, 3, 4]
console.log(removedElement); // Output: 1
```
## Additionnal note

- The `shift()` method changes the original array, it doesn't return a new array.
- If you only want to get the first element of an array without removing it, you can use the index notation, like this: `const firstElement = array[0]`;

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeShift.md" target="_blank">Edit this page on Github</a>
