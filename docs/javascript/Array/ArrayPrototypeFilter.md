---
tag: "javascript"
slug: "/javascript/array/array-prototype-filter"
date: "2022-11-24"
title: Array.prototype.filter()
description: "The Array.prototype.filter() method is used to create a new array with all elements that pass the test implemented by the provided function."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeFilter.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---




## Overview.

The `Array.prototype.filter()` method is used to create a new array with all elements that pass the test implemented by the provided function.

## Syntax

```javascript
array.filter(callback[, thisArg])
```

## Parameters

callback (required): A function that tests each element of the array. It should return `true` to keep the element, or `false` otherwise.
thisArg (optional): An object to use as `this` when executing the callback function.

## return value

A new array containing all elements that pass the test implemented by the provided function.

## Examples

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// evenNumbers is [2, 4]
```


## Additionnal note

The `filter()` method does not modify the original array, but instead returns a new array that contains only the elements that pass the test.



## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeFilter.md" target="_blank">Edit this page on Github</a>

