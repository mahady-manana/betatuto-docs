---
tag: "javascript"
slug: "/javascript/array/join"
date: "2023-03-09"
title: Array.prototype.join()
description: "Array.prototype.join() method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string."
category: "Array Methods"
order: 14
prevPath: /javascript/array/last-index-of
nextPath: /javascript/array/to-string
githubPath: /javascript/Array/ArrayPrototypeJoin.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Overview.

The `Array.prototype.join()` method creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string.


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
array.join(separator);
```

### Parameters

- `separator` (optional): The string to use as a separator between the array elements. If omitted, the elements are separated with a comma.

### return value

A string containing all of the array elements concatenated together, separated by the specified separator string.

### Examples

```javascript
const fruits = ["apple", "banana", "orange"];
const joinedFruits = fruits.join(", ");
// joinedFruits is "apple, banana, orange"

const numbers = [1, 2, 3];
const joinedNumbers = numbers.join("-");
// joinedNumbers is "1-2-3"

```


## Use Cases

### Converting an array to a string

`join()` method is commonly used to convert an array to a string, which can be useful in many different scenarios, such as printing or logging the contents of an array.



```javascript
const colors = ["red", "green", "blue"];
console.log(colors.join(" | ")); // Output: "red | green | blue"
```

### Formatting output


`join()` method can be used to format output by joining an array of values with a specified separator.


```javascript
const product = {
  name: "Smartphone",
  colors: ["black", "white", "gold"],
  price: 500,
};
console.log(`${product.name} - ${product.colors.join(", ")} - $${product.price}`);
// Output: "Smartphone - black, white, gold - $500"
```

### Combining elements of an array with a specific pattern


`join()` method can be used to combine elements of an array with a specific pattern, such as in building a URL string.


```javascript
const queryParams = [
  { key: "page", value: "2" },
  { key: "sort", value: "desc" },
  { key: "filter", value: "category:electronics" },
];

const queryString = queryParams.map(param => `${param.key}=${param.value}`).join("&");
console.log(queryString); // Output: "page=2&sort=desc&filter=category:electronics"
```

## Notes

- If any of the array elements is `undefined` or `null`, it will be converted to an empty string in the resulting string.
- If the array is empty, `join()` method will return an empty string.

