---
tag: "javascript"
slug: "/javascript/array/findlast"
date: "2023-03-09"
title: Array.prototype.findLast()
description: "Array.prototype.find() is a built-in method in JavaScript, which is used to search an array and return the first element that satisfies the provided testing function."
category: "Array Methods"
order: 21
prevPath: /javascript/array/find
nextPath: /javascript/object/object-constructors
githubPath: /javascript/Array/ArrayPrototypeFindLast.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

The **`Array.prototype.FindLast()`** method is a built-in method in JavaScript Array, which is used to find the last element in an array that satisfies the given condition. This method is similar to the [`Array.prototype.find()`](/javascript/array/find) method but instead of returning the first matching element, it returns the last one.


## Syntax

```javascript
array.findLast(function (currentValue) {
  /**/
});
array.findLast(function (currentValue, index) {
  /**/
});
array.findLast(function (currentValue, index, arr) {
  /**/
});
array.findLast(function (currentValue, index, arr) {
  /**/
}, thisValue);

array.findLast((currentValue) => {
  /**/
});
array.findLast((currentValue, index) => {
  /**/
});
array.findLast((currentValue, index, arr) => {
  /**/
});
array.findLast((currentValue, index, arr) => {
  /**/
}, thisValue);
```

### Parameters

The `Array.prototype.FindLast()` method takes two parameters:

- `callback` (required): It is the function that is used to test each element of the array. The function is passed three arguments:

  - `currentValue`: the current element being processed,
  - `index`: index of the current element
  - `arr`: on which the `findLast()` method was called.

- `thisArg` (optional): It is the value of 'this' keyword that is passed to the `callback` function.

### return value

The `Array.prototype.FindLast()` method returns the value of the last element in the array that satisfies the given condition. If no element satisfies the condition, then it returns '`undefined`'.

### Examples

Let's take an example to understand the usage of the `Array.prototype.FindLast()` method:

```javascript
const numbers = [2, 5, 7, 3, 8, 9];

const found = numbers.findLast((number) => number > 5);

console.log(found); // Output: 9
```

In this example, we have an array of numbers. We want to find the last element in the array that is greater than 5. So, we use the `Array.prototype.FindLast()` method and pass a callback function that checks if the number is greater than `5` or not. The method returns the value of the last element in the array that satisfies the condition, which is `9`.

Now, let's take another example to understand the usage of the optional '`thisArg`' parameter:

```js
const numbers = [2, 5, 7, 3, 8, 9];

const object = {
  value: 5,
};

const found = numbers.findLast(function (number) {
  return number > this.value;
}, object);

console.log(found); // Output: 3
```

In this example, we have an array of numbers and an object with a '`value`' property. We want to find the last element in the array that is greater than the value of the '`value`' property in the object. So, we use the `Array.prototype.FindLast()` method and pass a `callback` function that checks if the number is greater than the value of the '`value`' property or not. We also pass the object as the value of the '`thisArg`' parameter. The method returns the value of the last element in the array that satisfies the condition, which is 3.


## Notes

- The `findLast()` method is used to find the last element in an array that satisfies a given condition.

- The method takes a `callback` function as its first parameter, which is used to test each element of the array.

- The `callback` function takes three arguments: the current element being processed, its index, and the array on which the findLast method was called.

- The method returns the value of the last element in the array that satisfies the given condition. If no element satisfies the condition, then it returns '`undefined`'.

- The `findLast()` method is similar to the [Array.prototype.find()](/javascript/array/find) method but returns the last matching element instead of the first one.

- The method does not modify the original array.

- The optional '`thisArg`' parameter can be used to specify the value of the '`this`' keyword within the callback function.

- If the '`thisArg`' parameter is not provided, the value of '`this`' within the callback function will be `undefined`.

- The `findLast()` method can be used with arrays of any data type, including strings, numbers, and objects.

- The `findLast()` method is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

- The method is not supported in Internet Explorer.
