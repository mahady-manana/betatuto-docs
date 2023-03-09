---
tag: "javascript"
slug: "/javascript/array/pop"
date: "2022-11-24"
title: Array.prototype.pop()
description: "The Array.prototype.pop() method removes the last element from an array and returns that element."
category: "Array Methods"
order: 6
githubPath: /javascript/Array/ArrayPrototypePop.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.pop()` method removes the last element from an array and returns that element. This method changes the length of the array.


```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 3
class-name: "table-of-contents"
```


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

