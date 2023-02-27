---
tag: "javascript"
slug: "/javascript/array/array-prototype-some"
date: "2022-11-24"
title: Array.prototype.some()
description: "This page is a reference for the JavaScript Array method Array.prototype.some()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeSome.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---



## Overview.

The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value indicating whether such an element exists or not.

## Syntax

```javascript
array.some(callback[, thisArg])
```

## Parameters

callback: A function that will be called for each element in the array. The function should return a boolean value indicating whether the element meets the test condition or not.
thisArg (optional): Object to use as `this` when executing the callback function.

## return value

A boolean value indicating whether at least one element in the array passes the test implemented by the provided function.

## Examples

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some(function(num) {
  return num % 2 === 0;
});
// hasEvenNumber is true
```


## Additionnal note

The `some()` method does not modify the original array and returns a boolean value indicating whether at least one element meets the test condition or not.



## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeSome.md" target="_blank">Edit this page on Github</a>

