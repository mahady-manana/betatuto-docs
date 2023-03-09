---
tag: "javascript"
slug: "/javascript/array/last-index-of"
date: "2023-03-09"
title: Array.prototype.lastIndexOf()
description: "The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present."
category: "Array Methods"
order: 14
prevPath: /javascript/array/index-of
nextPath: /javascript/array/join
githubPath: /javascript/Array/ArrayPrototypeLastIndexOf.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---



## Overview.

The `Array.prototype.lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, from the end to the beginning.


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
array.lastIndexOf(searchElement[, fromIndex])
```

### Parameters

- `searchElement` (required): The element to search for in the array.
- `fromIndex` (optional): The index at which to start searching backwards. By default, the search starts at the last index in the array.

### return value

The index of the last occurrence of the specified element in the array, or `-1` if it is not found.

### Examples

```javascript
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastIndex = arr.lastIndexOf(4);
console.log(lastIndex); // Output: 5
```



## Use Cases

### Searching for the last occurrence of a value in an array

```javascript
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastIndex = arr.lastIndexOf(4);
console.log(lastIndex); // Output: 5
```

### Checking if an element exists in an array


```javascript
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const hasElement = arr.lastIndexOf(6) !== -1;
console.log(hasElement); // Output: false
```

### Finding the last index of a specific value in an array

```javascript
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastIndex = arr.lastIndexOf(3);
if (lastIndex !== -1) {
  arr.splice(lastIndex, 1);
}
console.log(arr); // Output: [1, 2, 3, 4, 5, 4, 2, 1]
```

## Notes

The `lastIndexOf()` method returns the index of the last occurrence of the specified element in the array, and does not modify the array.

