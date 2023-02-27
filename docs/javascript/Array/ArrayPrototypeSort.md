---
tag: "javascript"
slug: "/javascript/array/array-prototype-sort"
date: "2022-11-24"
title: Array.prototype.sort()
description: "This page is a reference for the JavaScript Array method Array.prototype.sort()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeSort.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---



## Overview.

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

## Syntax

```javascript
array.sort([compareFunction])
```

## Parameters

compareFunction (optional): Specifies a function that defines the sort order. If omitted, the array is sorted in ascending, ASCII character order.

## return value

The sorted array.

## Examples

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
```


## Additionnal note

The `sort()` method modifies the original array.



## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeSort.md" target="_blank">Edit this page on Github</a>

