---
tag: "javascript"
slug: "/javascript/array/pop"
date: "2022-11-24"
title: Array.prototype.pop()
description: "The Array.prototype.pop() method removes the last element from an array and returns that element."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypePop.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

## Syntax

```javascript
array.pop();
```

## Parameters

No parameter.

## return value

The removed element from the array, or `undefined` if the array is empty.

## Examples

```javascript
const fruits = ["apple", "banana", "orange"];
const lastFruit = fruits.pop();
// lastFruit is "orange"
// fruits is now ["apple", "banana"]
```

## Additionnal note

- The `pop()` method modifies the original array.
- If the array is empty, `pop()` returns `undefined`.
- It is possible to use `pop()` together with [`push()`](/javascript/array/push) to implement a basic stack data structure.

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypePop.md" target="_blank">Edit this page on Github</a>
