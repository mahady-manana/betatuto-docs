---
tag: "javascript"
slug: "/javascript/object/object-is-frozen"
date: "2023-03-16"
title: Object.isFrozen()
description: "Object.isFrozen() is a method in JavaScript that determines whether an object is frozen. Freezing an object prevents new properties from being added to it, and prevents existing properties from being modified or deleted."
category: "Object Methods"
order: 11
prevPath: /javascript/object/object-has-own
nextPath: /javascript/object/object-is-sealed
githubPath: /javascript/ObjectMethods/11-IsFrozen.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.isFrozen()** is a method in JavaScript that determines whether an object is frozen. Freezing an object prevents new properties from being added to it, and prevents existing properties from being modified or deleted.


## How it works ?

`Object.isFrozen()` returns a boolean value indicating whether the specified object is frozen. If the object is frozen, the method returns `true`. Otherwise, it returns `false`. Object are frozen with [Object.freeze()](/javascript/object/object-freeze/) method.

The `Object.isFrozen()` method can be described as a function that takes an object as an argument and returns a boolean value indicating whether the object is frozen or not.

## Examples

```js
const obj1 = {
  prop1: 'Hello',
  prop2: 'world'
};

const obj2 = Object.freeze(obj1);

console.log(Object.isFrozen(obj1)); // false
console.log(Object.isFrozen(obj2)); // true
```

In this example, we create an object `obj1` with two properties, and then freeze it using [Object.freeze()](/javascript/object/object-freeze/). We then use `Object.isFrozen()` to check whether the objects are frozen.


## Detailed explanation

### Syntax

```javascript
Object.isFrozen(obj)
```

### Parameter

- `obj`: The object to check.

### Return Value

The method returns a boolean value indicating whether the specified object is frozen.


### Limitations

`Object.isFrozen()` only checks whether the specified object is frozen. It does not provide information about why an object is frozen, or which properties are frozen.

### Notes

Freezing an object is a form of immutability in JavaScript. Freezing an object is a shallow operation, meaning that it only affects the top-level properties of the object. Nested objects and arrays are not automatically frozen when the parent object is frozen.

### Common use cases

`Object.isFrozen()` is commonly used in applications that require immutable data structures or objects that cannot be modified once they are created. It is also useful for detecting errors in code that accidentally tries to modify frozen objects.

### Tips and tricks

When using `Object.isFrozen()`, it is important to keep in mind that freezing an object only affects its top-level properties. If an object contains nested objects or arrays, those will need to be frozen separately.

If you need to freeze an object and all its nested objects and arrays, you can use a library like `Immutable.js` or `immer.js` to create deeply frozen objects.


### Ecmascript specification

The `Object.isFrozen()` method is specified in the ECMAScript 5 (ES5) standard.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isfrozen" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>


## Exercises

These Exercises/Solutions should help you practice using the `Object.isFrozen()` method and gain a better understanding of how it works.

1. Write a function that takes an object as input and returns a boolean value indicating whether the object is frozen.

<details>

<summary>Solution</summary>

```js
function isObjectFrozen(obj) {
  return Object.isFrozen(obj);
}

// Example usage:
const obj = Object.freeze({a: 1, b: 2});
console.log(isObjectFrozen(obj)); // true
```

</details>


2. Write a function that takes an array of objects as input and returns a new array containing only the frozen objects.

<details>

<summary>Solution</summary>

```js
function getFrozenObjects(arr) {
  return arr.filter(obj => Object.isFrozen(obj));
}

// Example usage:
const arr = [Object.freeze({a: 1, b: 2}), {c: 3}, Object.freeze({d: 4, e: 5})];
console.log(getFrozenObjects(arr)); // [{a: 1, b: 2}, {d: 4, e: 5}]
```

</details>


3. Write a function that takes an object as input and returns a new object that is a frozen copy of the input object, including all nested objects and arrays.

<details>

<summary>Solution</summary>

```js
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(function (prop) {
    if (obj.hasOwnProperty(prop)
        && obj[prop] !== null
        && (typeof obj[prop] === "object" || typeof obj[prop] === "function")
        && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
}

// Example usage:
const obj = deepFreeze({a: {b: 1, c: 2}, d: [3, 4, 5]});
console.log(Object.isFrozen(obj)); // true
console.log(Object.isFrozen(obj.a)); // true
console.log(Object.isFrozen(obj.d)); // true
```

</details>