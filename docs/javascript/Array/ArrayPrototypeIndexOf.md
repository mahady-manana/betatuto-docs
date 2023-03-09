---
tag: "javascript"
slug: "/javascript/array/index-of"
date: "2022-11-24"
title: Array.prototype.indexOf()
description: "Array.prototype.indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present."
category: "Array Methods"
order: 13
githubPath: /javascript/Array/ArrayPrototypeIndexOf.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present.


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
array.indexOf(searchElement[, fromIndex])
```

### Parameters

- `searchElement` (required): The element to search for in the array.
- `fromIndex` (optional): The index to start the search from. If not specified, the search starts from the beginning of the array.

### return value

The index of the first occurrence of the specified element in the array, or `-1` if it is not found.

### Examples

```javascript
const numbers = [2, 5, 9, 2];
console.log(numbers.indexOf(5)); // Output: 1
console.log(numbers.indexOf(2)); // Output: 0
console.log(numbers.indexOf(7)); // Output: -1
```

## Use Cases

### Checking if an element exists in an array

You can use `indexOf()` to check whether a specific element exists in an array or not. If the method returns `-1`, the element does not exist in the array. If the method returns a non-negative integer, the element exists in the array.

```javascript
const fruits = ["apple", "banana", "orange", "pear"];
const searchFruit = "banana";

if (fruits.indexOf(searchFruit) !== -1) {
  console.log(`${searchFruit} exists in the array.`);
} else {
  console.log(`${searchFruit} does not exist in the array.`);
}
```

### Removing an element from an array

You can use `indexOf()` along with the [`Array.prototype.splice()`](/javascript/array/splice) method to remove an element from an array.

```javascript
const fruits = ["apple", "banana", "orange", "pear"];
const elementToRemove = "orange";

if (fruits.indexOf(elementToRemove) !== -1) {
  fruits.splice(fruits.indexOf(elementToRemove), 1);
  console.log(
    `The element ${elementToRemove} has been removed from the array.`
  );
} else {
  console.log(`The element ${elementToRemove} does not exist in the array.`);
}

console.log(fruits); // Output: ['apple', 'banana', 'pear']
```

## Notes

- `indexOf()` compares the searched element against each element of the array using strict equality (`===`).
- If you want to find the last index of an element, you can use the [`Array.prototype.lastIndexOf()`](/javascript/array/last-index-of) method.
- If you want to check whether an element is present in an array, you can use the [`Array.prototype.includes()`](<(/javascript/array/includes)>) method.
