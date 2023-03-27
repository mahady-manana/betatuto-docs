---
tag: "howto"
slug: "/howto/javascript/how-to-flatten-array-in-javascript"
date: "2023-03-25"
# updatedAt: "2023-03-09"
title: "How To Flatten Nested Array"
description: "Learn how to flatten a nested array in JavaScript with this easy-to-follow HowTo guide. Discover three different methods for flattening nested arrays."
category: "How-To"
# categoryOrder: 1
topic: Array
language: JavaScript
order: 9
githubPath: /javascript/Array/09-FlattenArray.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

In JavaScript, a nested array is an array that contains one or more arrays as elements. Sometimes, you might need to **flatten a nested array** into a single-dimensional array, where all elements are at the same level. This can be useful for various data processing and manipulation tasks.


## Examples

Here are some examples of nested arrays that we can flatten:

```js
const nestedArray1 = [1, [2, 3], 4, [5, [6, 7]]];
const nestedArray2 = [[1, 2], [3, 4], [[5, 6], 7]];
const nestedArray3 = [[1, [2, [3, 4]]], [5, [6]]];
```

After flattening these arrays, we should get the following results:

```js
const flatArray1 = [1, 2, 3, 4, 5, 6, 7];
const flatArray2 = [1, 2, 3, 4, 5, 6, 7];
const flatArray3 = [1, 2, 3, 4, 5, 6];
```

## Explanation

There are several ways to flatten a nested array in JavaScript. Here are 4 common methods:

### Method 1: Using the flat method


The flat method is a built-in method in JavaScript that can be used to flatten a nested array. The `flat` method takes an optional argument that specifies the depth of flattening. If no argument is provided, it defaults to 1.

Here's an example of how to use the flat method to flatten a nested array:

```js
const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];
const flatArray = nestedArray.flat();

console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7]
```

In this example, we define a nested array and call the flat method on it to flatten it into a single-dimensional array. The resulting array is assigned to the `flatArray` variable and logged to the console.

Note that the `flat` method is an experimental feature in some versions of JavaScript and may require a polyfill to work in all environments.

### Method 2: Flatten deeply nested array with reduce

The [**reduce**](/javascript/array/reduce/) method is a built-in method in JavaScript that can be used to recursively flatten a deeply nested array. The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

Here's an example of how to use the reduce method to flatten a deeply nested array:

```js
function flattenDeep(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const flattenedArray = flattenDeep(deeplyNestedArray);

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5]
```

In this example, we define a deeply nested array and call the `flattenDeep` function on it to flatten it into a single-dimensional array. The `reduce` method takes two arguments: a callback function and an initial value for the accumulator. The callback function takes two arguments: the accumulator and the current element in the array. If the current element is an array, we call the `flattenDeep` function recursively on that array. If it's not an array, we simply add it to the accumulator. The resulting flattened array is returned from the reduce method.

See [Array.prototype.concat](/javascript/array/concat/)

### Method 3: Using recursion

Another way to flatten a nested array is to use recursion. The idea is to iterate through each element of the array and check if it's an array. If it's an array, we call the same function recursively on that array. If it's not an array, we add it to the result array.

Here's an example of how to use recursion to flatten a nested array:

```js
function flattenArray(array) {
  const result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      result.push(element);
    }
  }

  array.forEach(flatten);
  return result;
}

const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];
const flatArray = flattenArray(nestedArray);

console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7]
```

In this example, we define a flattenArray function that takes a nested array as input and returns a flattened array. The function uses a helper function called flatten that takes an element as input and either recursively calls itself

### Method 4: Using while loop

```js
function flattenArray(arr) {
  let result = [];

  while (arr.length) {
    const value = arr.shift();

    if (Array.isArray(value)) {
      arr = value.concat(arr);
    } else {
      result.push(value);
    }
  }

  return result;
}

const nestedArray = [1, [2, 3], 4, [5, [6, 7]]];
const flatArray = flattenArray(nestedArray);

console.log(flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7]
```

In this method, we use a [**while**](/javascript/control-flow/#while-loop) loop to iterate over the elements in the array. At each iteration, we remove the first element from the array using the shift method and assign it to the value variable. If the value is an array, we concatenate it with the remaining elements in the array using the concat method. If it's not an array, we push it to the result array. We continue looping until there are no elements left in the array.

I hope this How-To Guide is helpful!