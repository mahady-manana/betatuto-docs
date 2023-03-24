---
tag: "javascript"
slug: "/javascript/object/object-values"
date: "2023-03-14"
title: Object.values()
description: "Object.values() is a method that returns an array of the values of all enumerable properties in an object."
category: "Object Methods"
order: 3
prevPath: /javascript/object/object-create
nextPath: /javascript/object/object-freeze
githubPath: /javascript/ObjectMethods/3-Values.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [
    { name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }
  ]
---

**Object.values()** is a method that returns an array of the values of all enumerable properties in an object. The order of the values in the array is the same as the order provided by a `for...in` loop.

## Syntax

```javascript
Object.values(obj)
```

### Parameter

- `obj`: The object whose enumerable property values are to be returned.

### Return Value

`Object.values()` returns an array of the values of all enumerable properties in `obj`.


### Examples

**Example 1:**

```javascript
const obj = { x: 1, y: 2, z: 3 };
const values = Object.values(obj);

console.log(values); // Output: [1, 2, 3]

```
In this example, `Object.values()` returns an array of the values of all enumerable properties in the `obj` object.

**Example 2:**

```js
const obj = { a: 'foo', b: 42, c: false };
const values = Object.values(obj);

console.log(values); // Output: ['foo', 42, false]
```

In this example, `Object.values()` returns an array of the values of all enumerable properties in the `obj` object, including a string, a number, and a boolean value.

**Example 3:**

```js
const obj = { 0: 'a', 1: 'b', 2: 'c' };
const values = Object.values(obj);

console.log(values); // Output: ['a', 'b', 'c']
```
In this example, `Object.values()` returns an array of the values of all enumerable properties in the `obj` object, which are accessed by their numeric keys.



## Notes

- `Object.values()` only returns the values of enumerable properties. Non-enumerable properties are ignored.

- `Object.values()` returns an array of values in the same order as provided by a `for...in` loop, but the order of the keys in the array is not guaranteed.

- `Object.values()` is not supported in some older browsers, such as Internet Explorer.

## Exercises

1. Create an object with multiple properties and use `Object.values()` to retrieve the values in an array.

2. Write a function that takes an object as an argument and returns an array of its property values using `Object.values()`.

3. Use `Object.values()` to find the largest value in an object that contains only numeric values.

<details>

<summary>Solutions</summary>

**Exercise 1:**

```js
const obj = { x: 1, y: 2, z: 3 };
const values = Object.values(obj);

console.log(values); // Output: [1, 2, 3]
```

**Exercise 2:**

```js
function getPropertyValues(obj) {
  return Object.values(obj);
}

const obj = { x: 1, y: 2, z: 3 };
const values = getPropertyValues(obj);

console.log(values); // Output: [1, 2, 3]
```

**Exercise 3:**

```js
const obj = { a: 10, b: 5, c: 20 };
const largestValue = Math.max(...Object.values(obj));

console.log(largestValue); // Output: 20
```

</details>
