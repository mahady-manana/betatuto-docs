---
tag: "javascript"
slug: "/javascript/array/pop"
date: "2023-03-09"
title: Array.prototype.pop()
description: "The Array.prototype.pop() method removes the last element from an array and returns that element."
category: "Array Methods"
order: 6
prevPath: /javascript/array/splice
nextPath: /javascript/array/slice
githubPath: /javascript/Array/ArrayPrototypePop.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Overview.

The `Array.prototype.pop()` method removes the last element from an array and returns that element. This method changes the length of the array.



## Syntax

```javascript
array.pop();
```

### Parameters

No parameter.

### return value

The removed element from the array, or `undefined` if the array is empty.

### Examples

```javascript
const fruits = ["apple", "banana", "orange"];
const lastFruit = fruits.pop();
// lastFruit is "orange"
// fruits is now ["apple", "banana"]
```

## Notes

- The `pop()` method modifies the original array.
- If the array is empty, `pop()` returns `undefined`.
- It is possible to use `pop()` together with [`push()`](/javascript/array/push) to implement a basic stack data structure.

