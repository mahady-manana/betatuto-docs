---
tag: "javascript"
slug: "/javascript/array/map"
date: "2023-03-09"
title: Array.prototype.map()
description: "The `Array.prototype.map()` method creates a new array with the results of calling a provided function on every element in the calling array."
category: "Array Methods"
order: 8
prevPath: /javascript/array/slice
nextPath: /javascript/array/filter
githubPath: /javascript/Array/ArrayPrototypeMap.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Overview.

The `Array.prototype.map()` method creates a new array with the results of calling a provided function on every element in the calling array.



## Syntax

```javascript
array.map(callback[, thisArg])
```

### Parameters

- `callback`: A function that is called once for each element in the array. The `callback` function should return a new value for the element. It takes three arguments:
  - `currentValue`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed in the array.
  - `array` (optional): The array that `map` was called upon.
- `thisArg` (optional): An object to which the `this` keyword can refer inside the callback function. If this parameter is not specified, `undefined` is used as the default value.

### return value

A new array containing the values returned by the callback function for each element in the original array.

### Examples

```javascript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2);
// doubledNumbers is [2, 4, 6]
```

## Use Cases

The `map()` method is useful when you need to transform each element in an array into a new value based on some logic.

### Transforming data

For example, if you have an array of objects and you need to extract a specific property from each object, you could use the `map()` method to create a new array containing only those properties.

```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const userIds = users.map((user) => user.id);
// userIds is [1, 2, 3]
```

### Rendering data

Another use case for the `map()` method is when you need to render a list of items in a UI. You can use `map()` to transform an array of data into an array of UI components.

```javascript
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const productItems = products.map((product) => {
  return `
    <div>
      <h2>${product.name}</h2>
      <p>${product.price}</p>
    </div>
  `;
});

// productItems is an array of HTML strings that can be rendered in the UI
```

## Notes

The `map()` method does not modify the original array, but instead creates a new array with the results of calling the provided function on each element.

