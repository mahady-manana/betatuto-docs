---
tag: "javascript"
slug: "/javascript/object/object-from-entries"
date: "2023-03-14"
title: Object.fromEntries()
description: "Object.fromEntries() is a static method that transforms a list of key-value pairs into an object. It takes an iterable object, such as an array, and returns a new object with properties corresponding to the key-value pairs."
category: "Object Methods"
order: 6
prevPath: /javascript/object/object-entries
nextPath: /javascript/object/object-keys
githubPath: /javascript/ObjectMethods/6-FromEntries.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

`Object.fromEntries()` is a static method that transforms a list of key-value pairs into an object. It takes an iterable object, such as an array, and returns a new object with properties corresponding to the key-value pairs. The iterable parameter must contain elements that are iterable themselves and have exactly two elements in them, representing key-value pairs. Object.fromEntries() was introduced in ECMAScript 2019 and may not be supported in all browsers.


## Syntax

```javascript
Object.fromEntries(iterable);
```

### Parameter

- `iterable`: An iterable object, such as an array, that contains key-value pairs.

### Return Value

A new object with properties corresponding to the key-value pairs.


### Examples

**Converting an array of key-value pairs to an object**

```javascript
const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(entries);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

**Converting a Map object to an object**

```js
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const obj = Object.fromEntries(map);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

**Converting an array of objects with key-value pairs to an object**

```js
const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 }];
const obj = Object.fromEntries(arr.map(({ key, value }) => [key, value]));
console.log(obj); // { a: 1, b: 2, c: 3 }
```

## Notes

- If the iterable contains duplicate keys, the last value will overwrite the previous values.

- If an object with a prototype is passed to `Object.fromEntries()`, the resulting object will have the same prototype as the original object.

- If the iterable contains non-string keys, they will be converted to strings before being used as property names.

- This method is the inverse of [**Object.entries()**](/javascript/object/object-entries), meaning it creates an object from an array of key-value pairs.

- The input array must be an iterable object, such as an array or a Map object.

- If any element of the input array is not an array, or if the sub-array does not have exactly two elements, an error will be thrown.

- The resulting object will have its own prototype, and will not inherit properties from Object.prototype.

- The method is only available in ES2019 and later, so it may not be available in older browsers or environments.

## Exercises

1. Convert an object to an array of key-value pairs using [**Object.entries()**](/javascript/object/object-entries) and then convert it back to an object using `Object.fromEntries()`.

2. Use `Object.fromEntries()` to create an object from a URLSearchParams object.

3. Use `Object.fromEntries()` to create a new object from an existing object with the values of all the properties multiplied by 2.


<details>

<summary>Solutions</summary>

**Exercise 1**

```js
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj);
const newObj = Object.fromEntries(arr);
console.log(newObj); // { a: 1, b: 2, c: 3 }
```

**Exercise 2**

```js
const params = new URLSearchParams('key1=value1&key2=value2');
const obj = Object.fromEntries(params);
console.log(obj); // { key1: 'value1', key2: 'value2' }
```

**Exercise 3**

```js
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj).map(([key, value]) => [key, value * 2]);
const newObj = Object.fromEntries(entries);
console.log(newObj); // { a: 2, b: 4, c: 6 }
```

</details>
