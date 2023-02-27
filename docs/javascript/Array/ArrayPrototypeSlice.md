---
tag: "javascript"
slug: "/javascript/array/array-prototype-slice"
date: "2022-11-24"
title: Array.prototype.slice()
description: "This page is a reference for the JavaScript Array method Array.prototype.slice()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeSlice.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---




## Overview.

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array will not be modified.

## Syntax

```javascript
array.slice([start[, end]])
```

## Parameters

start (optional): Zero-based index at which to start extraction. If omitted, slice begins from index 0.
end (optional): Zero-based index at which to end extraction. Slice extracts up to but not including `end`. If omitted, slice extracts to the end of the array.

## return value

A new array containing the extracted elements.

## Examples

```javascript
const animals = ["ant", "bison", "camel", "duck", "elephant"];
const animalsSubset = animals.slice(2, 4);
// animalsSubset is ["camel", "duck"]
// animals is still ["ant", "bison", "camel", "duck", "elephant"]
```


## Additionnal note

The `slice()` method does not modify the original array.


## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeSlice.md" target="_blank">Edit this page on Github</a>

