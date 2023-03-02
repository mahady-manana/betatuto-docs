---
tag: "javascript"
slug: "/javascript/array/concat"
date: "2022-11-24"
title: Array.prototype.concat()
description: "The Array.prototype.concat() method is used to merge two or more arrays into a new array."
category: "Array Methods"
order: 4
githubPath: /javascript/Array/ArrayPrototypeConcat.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


The **`Array.prototype.concat()`** method is used to merge two or more arrays into a new array.

The `concat()` method can also be used with non-array values, which will be added to the new array as individual elements.

If any of the arguments passed to the `concat()` method are themselves arrays, the elements of those arrays are added to the new array individually (i.e., the arrays are flattened).

The `concat()` method can be chained together with other array methods, allowing you to perform multiple operations on an array in a single line of code.

> `concat(`) method does not modify the original array. Instead, it returns a new array that contains the concatenated elements.

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
array.concat(array1[, array2, ...])
array.concat(array1, array2, ..., arrayN)

```

### Parameters

- `array1, array2, ...arrayN`:  (required): The arrays to merge with the original array.

### return value

A new array containing the elements of the original array and the concatenated arrays.

### Examples

```javascript
const array_a = [1, 2, 3];
const array_b_ = [4, 5, 6];
const newArray = array_a.concat(array_b);
// newArray is [1, 2, 3, 4, 5, 6]

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(7, 8, 9, array2, [10, 11]);
// newArray is [1, 2, 3, 7, 8, 9, 4, 5, 6, 10, 11]

const array3 = ['a', 'b', 'c'];
const array4 = ['d', ['e', 'f']];
const array5 = array3.concat(array4);
// array5 is ['a', 'b', 'c', 'd', ['e', 'f']]

const array6 = [1, 2, 3];
const array7 = [4, 5, 6];
const newArray2 = array6.concat(array7).reverse();
// newArray2 is [6, 5, 4, 3, 2, 1]

```

