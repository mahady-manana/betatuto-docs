---
tag: "javascript"
slug: "/javascript/array/splice"
date: "2022-11-24"
title: Array.prototype.splice()
description: "This page is a reference for the JavaScript Array method Array.prototype.splice()."
category: "Array Methods"
order: 6
githubPath: /javascript/Array/ArrayPrototypeSplice.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---




## Overview.

The `Array.prototype.splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


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
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

### Parameters

- `start`: Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (-1 for the last element, -2 for the second to last element, and so on).
- `deleteCount` (optional): An integer indicating the number of old array elements to remove. If `deleteCount` is 0, no elements are removed. If `deleteCount` is greater than the number of elements between `start` and the end of the array, all elements from `start` to the end of the array will be deleted.
- `item1, item2, ...` (optional): The elements to add to the array, beginning at the `start` index. If you don't specify any elements, `splice()` will only remove elements from the array.

### return value

An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

### Examples

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// months is now ["Jan", "Feb", "March", "April", "June"]

const months2 = ["Jan", "Feb", "March", "April", "June"];
months2.splice(4, 1);
// months2 is now ["Jan", "Feb", "March", "April"]

const months3 = ["Jan", "Feb", "March", "April"];
months3.splice(1, 2, "Feb-Apr");
// months3 is now ["Jan", "Feb-Apr", "April"]

const months = ['Jan', 'March', 'April', 'June'];

// Remove one element from the second index
months.splice(1, 1); // removes 'March'
// Result: ['Jan', 'April', 'June']

// Add an element at the third index
months.splice(2, 0, 'Feb');
// Result: ['Jan', 'April', 'Feb', 'June']

// Remove all elements after the second index
months.splice(2); 
// Result: ['Dec', 'April']
```


## Notes

The `splice()` method modifies the original array.



