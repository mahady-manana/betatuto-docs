---
tag: "javascript"
slug: "/javascript/js-array"
date: "2023-02-27"
title: JavaScript Arrays
description: "An array is a data structure in JavaScript used to store a collection of elements of the same or different data types in a single variable."
category: "Get Started"
order: 8
githubPath: /javascript/GetStarted/Array.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

In JavaScript, an **array** is a collection of values or elements that can be of any data type, including other arrays. Arrays can be used to store and manipulate multiple values as a single entity.

Arrays in JavaScript are mutable, which means that you can modify, add or remove elements from them after they are created.

### Array Constructor

You can create an array in JavaScript using the [Array constructor](/javascript/array/constructors) function or using array literal notation.

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

- [`Array.prototype.concat()`](/javascript/array/concat)

- [`Array.prototype.filter()`](/javascript/array/filter)

- [`Array.prototype.find()`](/javascript/array/find)

- [`Array.prototype.findIndex()`](/javascript/array/find-index)

- [`Array.prototype.forEach()`](/javascript/array/for-each)

- [`Array.prototype.includes()`](/javascript/array/includes)

- [`Array.prototype.indexOf()`](/javascript/array/index-of)

- [`Array.prototype.join()`](/javascript/array/join)

- [`Array.prototype.map()`](/javascript/array/map)

- [`Array.prototype.pop()`](/javascript/array/pop)
- [`Array.prototype.push()`](/javascript/array/push)

- [`Array.prototype.reduce()`](/javascript/array/reduce)

- [`Array.prototype.reverse()`](/javascript/array/reverse)
- [`Array.prototype.shift()`](/javascript/array/shift)

- [`Array.prototype.slice()`](/javascript/array/slice)
- [`Array.prototype.some()`](/javascript/array/some)

- [`Array.prototype.sort()`](/javascript/array/sort)

- [`Array.prototype.splice()`](/javascript/array/splice)

- [`Array.prototype.toString()`](/javascript/array/to-string)

- [`Array.prototype.unshift()`](/javascript/array/unshift)

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/Array.md" target="_blank">Edit this page on Github</a>
