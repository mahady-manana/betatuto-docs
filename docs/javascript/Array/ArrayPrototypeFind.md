---
tag: "javascript"
slug: "/javascript/array/find"
date: "2023-03-09"
title: Array.prototype.find()
description: "Array.prototype.find() is a built-in method in JavaScript, which is used to search an array and return the first element that satisfies the provided testing function."
category: "Array Methods"
order: 20
prevPath: /javascript/array/reduce
nextPath: /javascript/array/findlast
githubPath: /javascript/Array/ArrayPrototypeFind.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

**`Array.prototype.find()`** is a built-in method in JavaScript, which is used to search an array and return the first element that satisfies the provided testing function. This method returns `undefined` if the element is not found in the array.

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
array.find(function (currentValue) {
  /**/
});
array.find(function (currentValue, index) {
  /**/
});
array.find(function (currentValue, index, arr) {
  /**/
});
array.find(function (currentValue, index, arr) {
  /**/
}, thisValue);

array.find((currentValue) => {
  /**/
});
array.find((currentValue, index) => {
  /**/
});
array.find((currentValue, index, arr) => {
  /**/
});
array.find((currentValue, index, arr) => {
  /**/
}, thisValue);
```

### Parameters

- `callback(currentValue, index, arr)` - A function that accepts up to three arguments. The `currentValue` represents the current element of the array, `index` represents the index of the current element, and `arr` represents the array that `find()` was called upon.

- `thisValue` (Optional) - An object that specifies the value to be used as `this` when executing the callback function. If not provided, the default value is `undefined`.

### return value

The first element of the array that satisfies the provided testing function; otherwise, `undefined` is returned.

### Examples

```javascript
const numbers = [2, 5, 7, 8, 10];
const evenNumber = numbers.find((number) => number % 2 === 0);
console.log(evenNumber); // Output: 2
```

In the above example, `find()` method is used to find the first even number in the array. The callback function checks whether the current number is divisible by 2 or not. If the current number is divisible by 2, then it is an even number, and `find()` returns that number.

```js
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alex" },
];
const user = users.find((user) => user.id === 2);
console.log(user); // Output: { id: 2, name: 'Jane' }
```

In the above example, `find()` method is used to find the object with `id` equal to 2 in the array of objects. The callback function checks whether the `id` property of the current object is equal to 2 or not. If the `id` property is equal to 2, then `find()` method returns that object.

## Notes

- `find()` method is a built-in function of the Array object in JavaScript.

- It is used to find the first element in an array that satisfies a given condition.

- `find()` method takes a callback function as an argument, which is executed on each element of the array until the condition is satisfied.

- It does not modify the original array.

- It works with arrays of any data type.

- The `callback` function should return `true` if the current element satisfies the condition, and `false` otherwise.

- The `callback` function can take up to three arguments: the current element being processed, the index of the current element, and the array on which the find() method is called.

- It returns the value of the first element in the array that satisfies the condition, or `undefined` if no element satisfies the condition.

- If the array being searched is empty, the find() method will return `undefined`.

- `find()` method stops searching the array as soon as it finds the first element that satisfies the condition.

- It was introduced in ECMAScript 2015 (ES6), so it may not be available in older browsers.
