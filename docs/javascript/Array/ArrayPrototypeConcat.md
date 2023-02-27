---
tag: "javascript"
slug: "/javascript/array/array-prototype-concat"
date: "2022-11-24"
title: Array.prototype.concat()
description: "The Array.prototype.concat() method is used to merge two or more arrays into a new array."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeConcat.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---


The **`Array.prototype.concat()`** method is used to merge two or more arrays into a new array.

## Syntax

```javascript
array.concat(array1[, array2, ...])
```

## Parameters

- array1, array2, ... (required): The arrays to merge with the original array.

## return value

A new array containing the elements of the original array and the concatenated arrays.

## Examples

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
// newArray is [1, 2, 3, 4, 5, 6]
```


## Additionnal note

The `concat()` method does not modify the original arrays, but instead returns a new array that contains the concatenated elements.

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeConcat.md" target="_blank">Edit this page on Github</a>

