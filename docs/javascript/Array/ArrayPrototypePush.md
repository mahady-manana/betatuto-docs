---
tag: "javascript"
slug: "/javascript/array/array-prototype-push"
date: "2022-11-24"
title: Array.prototype.push()
description: "This page is a reference for the JavaScript Array method Array.prototype.push()."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypePush.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---




## Overview.

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

## Syntax

```javascript
array.push(element1[, ...[, elementN]])
```

## Parameters

element1: The first element to add to the array.
elementN (optional): Additional elements to add to the end of the array.

## return value

The new length of the array after the elements have been added.

## Examples

```javascript
const animals = ["dog", "cat"];
const newLength = animals.push("bird");
// animals is now ["dog", "cat", "bird"]
// newLength is 3

const animals2 = ["dog", "cat"];
animals2.push("bird", "fish");
// animals2 is now ["dog", "cat", "bird", "fish"]
```


## Additionnal note

The `push()` method modifies the original array and returns the new length of the array.




## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypePush.md" target="_blank">Edit this page on Github</a>

