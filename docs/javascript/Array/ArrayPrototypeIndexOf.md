---
tag: "javascript"
slug: "/javascript/array/array-prototype-indexof"
date: "2022-11-24"
title: Array.prototype.indexOf()
description: "This page is a reference for the JavaScript Array method Array.prototype.indexOf()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeIndexOf.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---



## Overview.

The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

## Syntax

```javascript
array.indexOf(searchElement[, fromIndex])
```

## Parameters

searchElement (required): The element to search for in the array.
fromIndex (optional): The index to start the search from. If not specified, the search starts from the beginning of the array.

## return value

The index of the first occurrence of the specified element in the array, or -1 if it is not found.

## Examples

```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana"));
// Output: 1
```


## Additionnal note

The `indexOf()` method returns the index of the first occurrence of the specified element in the array, and does not modify the array.



## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeIndexOf.md" target="_blank">Edit this page on Github</a>

