---
tag: "javascript"
slug: "/javascript/sets"
date: "2023-03-06"
title: JavaScript Sets
description: "A set is an object in JavaScript that allows you to store unique values, whether they are primitive values or object references."
category: "Get Started"
order: 15
prevPath: /javascript/dates
nextPath: /javascript/maps
githubPath: /javascript/GetStarted/Sets.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

A **Set** is an object in JavaScript that allows you to store unique values, whether they are primitive values or object references. The values in a set can be of any data type, and they are stored in the order they were inserted. A set cannot have duplicate values.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 4
class-name: "table-of-contents"
```

## Creating a Set

To create a set in JavaScript, you can use the `Set` constructor. You can initialize a set with an iterable object such as an array, or you can create an empty set.

```js
// Creating an empty set
const mySet = new Set();

// Creating a set from an array
const myArray = [1, 2, 3];
const mySet = new Set(myArray);
```

## JavaScript Sets Methods

JavaScript Sets has a bult-in methods you can use such as: `add()`, `has()`, `delete()`, `size`, `clear()`

### `add()`: Adding Values to a Set

To add a value to a set, you can use the `add()` method.

```js
const mySet = new Set();
mySet.add("hello");
mySet.add("world");
```

### `has()`: Checking if a Value is in a Set

To check if a value is in a set, you can use the `has()` method.

```js
const mySet = new Set(["hello", "world"]);
mySet.has("hello"); // true
mySet.has("goodbye"); // false
```

### `delete()`: Removing a Value from a Set

To remove a value from a set, you can use the `delete()` method.

```js
const mySet = new Set(["hello", "world"]);
mySet.delete("hello");
```

### `size`: Getting the Size of a Set

You can get the size of a set using the `size` property.

```js
const mySet = new Set(["hello", "world"]);
mySet.size; // 2
```

### `clear()`: Clearing a Set

To remove all values from a set, you can use the `clear()` method.

```js
const mySet = new Set(["hello", "world"]);
mySet.clear();
```

## Iterating Over a Set

You can use a `for...of` loop to iterate over a set.

```js
const mySet = new Set(["hello", "world"]);
for (const value of mySet) {
  console.log(value);
}
```

You can also use the `forEach()` method to iterate over a set.

```js
const mySet = new Set(["hello", "world"]);
mySet.forEach((value) => {
  console.log(value);
});
```

## Converting a Set to an Array

You can convert a set to an array using the `Array.from()` method.

```js
const mySet = new Set(["hello", "world"]);
const myArray = Array.from(mySet);
```

## Using Sets for Union, Intersection, and Difference Operations

Sets can be useful for performing set operations such as union, intersection, and difference.

```js
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Union
const union = new Set([...setA, ...setB]); // Set { 1, 2, 3, 4 }

// Intersection
const intersection = new Set([...setA].filter((x) => setB.has(x))); // Set { 2, 3 }

// Difference
const difference = new Set([...setA].filter((x) => !setB.has(x))); // Set { 1 }
```

JavaScript sets are a powerful tool for storing and manipulating unique values. They can be used for a wide range of applications, from simple data storage to complex set operations. With the various methods available for working with sets, you can easily add, remove, and iterate over values, as well as perform set operations
