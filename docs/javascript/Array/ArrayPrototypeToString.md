---
tag: "javascript"
slug: "/javascript/array/to-string"
date: "2023-03-09"
title: Array.prototype.toString()
description: "The Array.prototype.toString() method adds one or more elements to the beginning of an array and returns the new length of the array."
category: "Array Methods"
order: 15
prevPath: /javascript/array/join
nextPath: /javascript/array/sort
githubPath: /javascript/Array/ArrayPrototypeToString.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---



## Overview.

The `Array.prototype.toString()` method adds one or more elements to the beginning of an array and returns the new length of the array.


## Syntax

```javascript
array.unshift(element1[, ...[, elementN]])
```

### Parameters

- `element1`: The first element to add to the array.
- `elementN` (optional): Additional elements to add to the beginning of the array.

### return value

The new length of the array after the elements have been added.

### Examples

```javascript
const numbers = [2, 3, 4];
const newLength = numbers.unshift(1);
// numbers is now [1, 2, 3, 4]
// newLength is 4

const numbers2 = [4, 5];
numbers2.unshift(1, 2, 3);
// numbers2 is now [1, 2, 3, 4, 5]
```


## Notes

The `unshift()` method modifies the original array and returns the new length of the array.


> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeToString.md" target="_blank">Edit this page on Github</a>

