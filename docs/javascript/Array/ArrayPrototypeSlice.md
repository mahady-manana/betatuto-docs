---
tag: "javascript"
slug: "/javascript/array/slice"
date: "2023-03-09"
title: Array.prototype.slice()
description: "The Array.prototype.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end."
category: "Array Methods"
order: 7
prevPath: /javascript/array/pop
nextPath: /javascript/array/map
githubPath: /javascript/Array/ArrayPrototypeSlice.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---




## Overview.

The `Array.prototype.slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array will not be modified.


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
array.slice()
array.slice(start)
array.slice(start, end)
array.slice(start, end, step) 

```

### Parameters

- `start` (optional): Zero-based index at which to start extraction. If omitted, slice begins from index 0.
- `end` (optional): Zero-based index at which to end extraction. Slice extracts up to but not including `end`. If omitted, slice extracts to the end of the array.
- `step` (optional): The increment between the elements to be sliced. If omitted, the default value is 1. If negative, the slicing will be done from right to left.
 
### return value

A new array containing the extracted elements.

### Examples

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


## Notes

The `slice()` method does not modify the original array.


