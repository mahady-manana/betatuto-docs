---
tag: "javascript"
slug: "/javascript/array/array-prototype-join"
date: "2022-11-24"
title: Array.prototype.join()
description: "This page is a reference for the JavaScript Array method Array.prototype.join()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeJoin.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---



## Overview.

The `join()` method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string.

## Syntax

```javascript
array.join(separator)
```

## Parameters

separator (optional): The string to use as a separator between the array elements. If omitted, the elements are separated with a comma.

## return value

A string containing all of the array elements concatenated together, separated by the specified separator string.

## Examples

```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits.join());
// Output: "apple,banana,orange"
console.log(fruits.join("-"));
// Output: "apple-banana-orange"
```


## Additionnal note

The `join()` method does not modify the original array, but instead returns a new string.



## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeJoin.md" target="_blank">Edit this page on Github</a>

