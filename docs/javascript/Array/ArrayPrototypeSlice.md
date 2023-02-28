---
tag: "javascript"
slug: "/javascript/array/slice"
date: "2022-11-24"
title: Array.prototype.slice()
description: "The Array.prototype.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeSlice.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---




## Overview.

The `Array.prototype.slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array will not be modified.

## Syntax

```javascript
array.slice()
array.slice(start)
array.slice(start, end)
array.slice(start, end, step) 

```

## Parameters

- `start` (optional): Zero-based index at which to start extraction. If omitted, slice begins from index 0.
- `end` (optional): Zero-based index at which to end extraction. Slice extracts up to but not including `end`. If omitted, slice extracts to the end of the array.
- `step` (optional): The increment between the elements to be sliced. If omitted, the default value is 1. If negative, the slicing will be done from right to left.
 
## return value

A new array containing the extracted elements.

## Examples

```javascript
const array = [1, 2, 3, 4, 5];

// Extract the subarray [2, 3, 4]
const subarray1 = array.slice(1, 4);
console.log(subarray1); // [2, 3, 4]

// Extract the subarray [2, 4]
const subarray2 = array.slice(1, 5, 2);
console.log(subarray2); // [2, 4]

// Extract the subarray [4, 3, 2]
const subarray3 = array.slice(-2, 0, -1);
console.log(subarray3); // [4, 3, 2]
```


## Additionnal note

The `slice()` method does not modify the original array.


## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeSlice.md" target="_blank">Edit this page on Github</a>

