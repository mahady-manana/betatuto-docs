---
tag: "javascript"
slug: "/javascript/object/object-is-extensible"
date: "2023-03-16"
title: Object.isExtensible()
description: "Object.isExtensible() is a built-in function in JavaScript that is used to determine if an object is extensible or not. Extensible objects are those that allow the addition of new properties and methods to them."
category: "Object Methods"
order: 14
prevPath: /javascript/object/object-prevent-extensions
nextPath: /javascript/object/object-set-prototype-of
githubPath: /javascript/ObjectMethods/14-IsExtensible.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.isExtensible()** is a built-in function in JavaScript that is used to determine if an object is extensible or not. Extensible objects are those that allow the addition of new properties and methods to them. This function is useful when you need to check if an object can be modified or not.

## How it works ?

The `Object.isExtensible()` method checks if the given object is extensible or not. An object is extensible if new properties can be added to it.

When an object is created, it is extensible by default. However, you can make an object non-extensible by using the [Object.preventExtensions()](/javascript/object/object-prevent-extensions) function. Once an object is made non-extensible, you cannot add new properties or methods to it. The `Object.isExtensible()` function helps you determine if an object is extensible or not.

## Examples

```js
const obj1 = { a: 1, b: 2 };
console.log(Object.isExtensible(obj1)); // true

Object.preventExtensions(obj1);
console.log(Object.isExtensible(obj1)); // false
```

In this example, we create an object called `obj1` with two properties `a` and `b`. We then use the `Object.isExtensible()` function to check if the object is extensible, which returns `true`. Next, we use the `Object.preventExtensions()` function to make the object non-extensible. We then use the `Object.isExtensible()` function again to check if the object is extensible, which returns `false`.

## Detailed explanation

### Syntax

```javascript
Object.isExtensible(obj);
```

Here, `obj` is the object that you want to check if it is extensible or not.

### Parameter

`obj`: the object you want to check if it is extensible or not.

If `obj` is not an object, it returns `false`.

### Return Value

The `Object.isExtensible()` method returns a boolean value:

- `true`: If the object is extensible, i.e., new properties can be added to it.
- `false`: If the object is not extensible, i.e., new properties cannot be added to it.

### Exceptions

The `Object.isExtensible()` function does not `throw` any exceptions.

### Limitations

The `Object.isExtensible()` method only checks if an object is extensible or not. It does not check if a property can be added to an object.

### Tips and tricks

- The `Object.isExtensible()` method is useful when you want to check if an object can be extended with new properties.

- It is recommended to use the `Object.isExtensible()` method before adding new properties to an object to ensure that the object is extensible.

- To make an object non-extensible, you can use the [Object.preventExtensions()](/javascript/object/object-prevent-extensions) method.

### Ecmascript specification

The Object.isExtensible() method was introduced in ECMAScript 5 (2009).
This method is supported in all modern browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.isextensible" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Write a function that takes an object as a parameter and returns a boolean value indicating whether the object is extensible or not.

<details>

<summary>Solution</summary>

```js
function isObjectExtensible(obj) {
  return Object.isExtensible(obj);
}

// Example usage
const obj1 = {a: 1, b: 2};
console.log(isObjectExtensible(obj1)); // true

const obj2 = {a: 1, b: 2};
Object.preventExtensions(obj2);
console.log(isObjectExtensible(obj2)); // false
```

</details>

2. Write a function that takes an object as a parameter and adds a new property to it only if the object is extensible.


<details>

<summary>Solution</summary>

```js
function addPropertyToObject(obj, propName, propValue) {
  if (Object.isExtensible(obj)) {
    obj[propName] = propValue;
    return true;
  }
  return false;
}

// Example usage
const obj1 = {a: 1, b: 2};
console.log(addPropertyToObject(obj1, 'c', 3)); // true
console.log(obj1); // {a: 1, b: 2, c: 3}

const obj2 = {a: 1, b: 2};
Object.preventExtensions(obj2);
console.log(addPropertyToObject(obj2, 'c', 3)); // false
console.log(obj2); // {a: 1, b: 2}
```

</details>


3. Write a function that takes an object as a parameter and returns the number of properties in the object only if the object is extensible.


<details>

<summary>Solution</summary>

```js
function getNumberOfProperties(obj) {
  if (Object.isExtensible(obj)) {
    return Object.keys(obj).length;
  }
  return 0;
}

// Example usage
const obj1 = {a: 1, b: 2};
console.log(getNumberOfProperties(obj1)); // 2

const obj2 = {a: 1, b: 2};
Object.preventExtensions(obj2);
console.log(getNumberOfProperties(obj2)); // 0
```

</details>
