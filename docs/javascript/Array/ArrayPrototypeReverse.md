---
tag: "javascript"
slug: "/javascript/array/reverse"
date: "2022-11-24"
title: Array.prototype.reverse()
description: "TThe reverse() method reverses the order of the elements in an array in place."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeReverse.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.reverse()` method reverses the order of the elements in an array in place. The first array element becomes the last, and the last array element becomes the first.

## Syntax

```javascript
array.reverse();
```

## Parameters

## return value

The modified array with its elements reversed.

## Examples

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

## Additionnal note

The `reverse()` method modifies the original array and returns the reversed array.

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeReverse.md" target="_blank">Edit this page on Github</a>
