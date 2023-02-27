---
tag: "javascript"
slug: "/javascript/array/array-prototype-lastindexof"
date: "2022-11-24"
title: Array.prototype.lastIndexOf()
description: "This page is a reference for the JavaScript Array method Array.prototype.lastIndexOf()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeLastIndexOf.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---



## Overview.

The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present.

## Syntax

```javascript
array.lastIndexOf(searchElement[, fromIndex])
```

## Parameters

searchElement (required): The element to search for in the array.
fromIndex (optional): The index to start the search from. If not specified, the search starts from the end of the array.

## return value

The index of the last occurrence of the specified element in the array, or -1 if it is not found.

## Examples

```javascript
const fruits = ["apple", "banana", "orange", "banana"];
console.log(fruits.lastIndexOf("banana"));
// Output: 3
```


## Additionnal note

The `lastIndexOf()` method returns the index of the last occurrence of the specified element in the array, and does not modify the array.


## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeLastIndexOf.md" target="_blank">Edit this page on Github</a>

