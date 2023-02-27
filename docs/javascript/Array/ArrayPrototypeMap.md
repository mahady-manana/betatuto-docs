---
tag: "javascript"
slug: "/javascript/array/array-prototype-map"
date: "2022-11-24"
title: Array.prototype.map()
description: "This page is a reference for the JavaScript Array method Array.prototype.map()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeMap.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---




## Overview.

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

## Syntax

```javascript
array.map(callback[, thisArg])
```

## Parameters

callback (required): A function that is called for each element in the array. It should return the value to be included in the new array.
thisArg (optional): An object to use as `this` when executing the callback function.

## return value

A new array containing the values returned by the callback function for each element in the original array.

## Examples

```javascript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2);
// doubledNumbers is [2, 4, 6]
```


## Additionnal note

The `map()` method does not modify the original array, but instead creates a new array with the results of calling the provided function on each element.

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeMap.md" target="_blank">Edit this page on Github</a>

