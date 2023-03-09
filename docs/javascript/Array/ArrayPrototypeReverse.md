---
tag: "javascript"
slug: "/javascript/array/reverse"
date: "2023-03-09"
title: Array.prototype.reverse()
description: "TThe reverse() method reverses the order of the elements in an array in place."
category: "Array Methods"
order: 18
prevPath: /javascript/array/some
nextPath: /javascript/array/reduce
githubPath: /javascript/Array/ArrayPrototypeReverse.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Overview.

The `Array.prototype.reverse()` method reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.


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
array.reverse();
```

### Parameters

### return value

The modified array with its elements reversed.

### Examples

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
// numbers is now [5, 4, 3, 2, 1]
```

## Use Cases

### Displaying a list in reverse order

The `reverse()` method is useful when you want to display a list in reverse order. For example, if you have a list of messages and you want to display them in reverse chronological order (i.e., newest first), you can use the `reverse()` method to reverse the order of the list.

```javascript
const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];
const reversedMessages = messages.reverse();
console.log(reversedMessages); // ["Message 4", "Message 3", "Message 2", "Message 1"]
```

### Reversing a string

You can use the `reverse()` method to reverse a string by converting it to an array, reversing the order of the elements, and then converting it back to a string.

```javascript
const str = "hello";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "olleh"
```

## Notes

The `reverse()` method modifies the original array and returns the reversed array.

