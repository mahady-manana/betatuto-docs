---
tag: "javascript"
slug: "/javascript/array/sort"
date: "2023-03-09"
title: Array.prototype.sort()
description: "The `Array.prototype.sort()` method sorts the elements of an array in place and returns the sorted array."
category: "Array Methods"
order: 16
prevPath: /javascript/array/to-string
nextPath: /javascript/array/some
githubPath: /javascript/Array/ArrayPrototypeSort.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---



## Overview.

The `Array.prototype.sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.


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
array.sort([compareFunction])
array.sort((a, b) => {/**/})
```

### Parameters

- `compareFunction` (optional): A function that defines the sort order. If omitted, the array is sorted lexicographically (in dictionary order), with numbers sorted as strings.
The `compareFunction` parameter is a function that takes two arguments and returns a value indicating whether the first argument should be sorted before or after the second argument. The function should return a negative value if the first argument should be sorted before the second, a positive value if the first argument should be sorted after the second, or zero if the two arguments are equal.

The function can be defined in two ways:

As a function declaration:

```javascript
function compareFunction(a, b) {
  // return a negative value if a should be sorted before b
  // return a positive value if a should be sorted after b
  // return zero if a and b are equal
}
```
As an anonymous function:

```javascript
array.sort(function(a, b) {
  // return a negative value if a should be sorted before b
  // return a positive value if a should be sorted after b
  // return zero if a and b are equal
});
```

If the `compareFunction` parameter is not provided, the array elements are converted to strings and sorted in lexicographic order.

### return value

The sorted array.

### Examples

```javascript
const fruits = ["apple", "orange", "banana", "kiwi"];
fruits.sort();
// fruits is now ["apple", "banana", "kiwi", "orange"]

const numbers = [42, 8, 16, 23, 4, 15];
numbers.sort();
// numbers is now [15, 16, 23, 4, 42, 8]

const numbers2 = [42, 8, 16, 23, 4, 15];
numbers2.sort((a, b) => a - b);
// numbers2 is now [4, 8, 15, 16, 23, 42]

const fruits = ["apple", "banana", "cherry", "date"];

// sort fruits in descending order
fruits.sort(function(a, b) {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(fruits); // ["date", "cherry", "banana", "apple"]
```


## Notes

The `sort()` method modifies the original array.



> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeSort.md" target="_blank">Edit this page on Github</a>

