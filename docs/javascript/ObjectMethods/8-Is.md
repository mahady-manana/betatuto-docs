---
tag: "javascript"
slug: "/javascript/object/object-is"
date: "2023-03-15"
title: Object.is()
description: "Object.is() is a JavaScript Static method that compares two values for equality, returning true if they are equal and false otherwise. It differs from other equality operators such as == and === in its treatment of special values like NaN and -0."
category: "Object Methods"
order: 8
prevPath: /javascript/object/object-keys
nextPath: /javascript/object/object-seal
githubPath: /javascript/ObjectMethods/8-Is.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**Object.is()** is a static method that compares two values for equality, returning `true` if they are equal and `false` otherwise.

It differs from other equality operators such as `==` and `===` in its treatment of special values like `NaN` and `-0`.


## Syntax

```javascript
Object.is(value1, value2);
```

### Parameter

- `value1`: The first value to compare.

- `value2`: The second value to compare.

### Return Value

A Boolean, `true` or `false`, indicating whether the two values are equal.

### Examples

```javascript
Object.is(1, 1); // true
Object.is("hello", "hello"); // true
Object.is("1", 1); // false
Object.is(NaN, NaN); // true
Object.is(0, -0); // false
```

In the above example, the first three comparisons are straightforward and return expected results. The fourth comparison is unique to `Object.is()`, which treats two `NaN` values as equal. The fifth comparison is also unique to `Object.is()`, which distinguishes between positive and negative zero.

## Ecmascript Version & Browser support

`Object.is()` was added in ECMAScript 6 (ES6) and is supported by most modern browsers, including Chrome, Firefox, Edge, Safari, and Opera.

## Notes

- `Object.is()` is not intended to be a replacement for the `==` or `===` operators. It is only intended to provide a more precise way to compare values in certain cases.

- `Object.is()` does not perform type coercion. It treats values of different types as unequal, except in the case of `NaN` and `-0`.

- `Object.is()` is useful for comparing `NaN` values, since `NaN` is the only value that is not equal to itself using the `==` and `===` operators.

- `Object.is()` is also useful for distinguishing between positive and negative zero. This can be important in some mathematical calculations.

- `Object.is()` is not supported in older browsers, such as Internet Explorer. In those cases, a polyfill can be used to provide similar functionality.

## Exercises

1. Write a function that uses `Object.is()` to compare two arrays of primitive values for equality.

<details>

<summary>Solution</summary>

```js
function isEqualArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!Object.is(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
}
```

</details>

2. Write a function that takes an array of numbers and returns the sum of those numbers, treating positive and negative zero as separate values, using `Object.is()`.
<details>

<summary>Solution</summary>

```js
function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    if (Object.is(number, 0) && 1 / number === -Infinity) {
      total -= 0;
    } else {
      total += number;
    }
  }
  return total;
}
```

</details>

3. Write a function that returns true if a given value is `NaN` and false otherwise, using `Object.is()`.

<details>

<summary>Solution</summary>

```js
function isNan(value) {
  return Object.is(value, NaN);
}
```

</details>
