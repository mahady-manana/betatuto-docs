---
tag: "javascript"
slug: "/javascript/array/array-prototype-foreach"
date: "2022-11-24"
title: Array.prototype.forEach()
description: "The Array.prototype.forEach() method is used to execute a provided function once for each array element."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeForEach.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---

## Overview.

The `Array.prototype.forEach()` method is used to execute a provided function once for each array element.

## Syntax

```javascript
array.forEach(callback[, thisArg])
```

## Parameters

callback (required): A function to execute on each element of the array.
thisArg (optional): An object to use as `this` when executing the callback function.

## return value

undefined

## Examples

```javascript
const numbers = [1, 2, 3];
numbers.forEach((number) => console.log(number));
// Output: 1 2 3
```


## Additionnal note

The `forEach()` method does not create a new array, but instead executes a function on each element of the existing array.
## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeForEach.md" target="_blank">Edit this page on Github</a>

