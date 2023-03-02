---
tag: "javascript"
slug: "/javascript/object/object-cloning"
date: "2022-11-24"
title: Object Cloning
description: Object cloning is the process of creating a new object that is a copy of an existing object in JavaScript.
category: "Advanced Javascript Object"
order: 10
githubPath: /javascript/Object/ObjectCloning.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Object cloning** is the process of creating a new object that is a copy of an existing object in JavaScript. Cloning objects is a common task in programming, and it allows you to create new objects with the same properties and values as existing objects, which can be useful in many scenarios.

There are several ways to clone objects in JavaScript, including using the spread operator, Object.assign(), and JSON.parse() and JSON.stringify(). Here are some examples:


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


### Using the spread operator:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
```

In this example, we're using the spread operator to create a new object `obj2` that is a copy of `obj1`.

### Using Object.assign(): Shallow copy

A shallow copy creates a new object that shares the same properties as the original object, but any nested objects or arrays are still referenced to the original object. To create a shallow copy of an object, you can use the `Object.assign()` or spread operator.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
```

### Using JSON.parse() and JSON.stringify():

A deep copy creates a new object that is completely independent of the original object, meaning that any nested objects or arrays are also cloned. To create a deep copy of an object, you can use the `JSON.parse()` and `JSON.stringify()` methods.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = JSON.parse(JSON.stringify(obj1));
```

## `structuredClone()`

There is a new method called `structuredClone` that allows for efficient object cloning. The `structuredClone()` method is available as a built-in utility for creating deep copies of objects.

Here's an example:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = structuredClone(obj1);
console.log(obj2); // { a: 1, b: 2 }
```

The `structuredClone()` method takes one parameter, which is the object that you want to clone.

## Uses cases with examples:

Object cloning is a useful technique in many scenarios, such as:

### Modifying objects without affecting the original object:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, b: 3 };
console.log(obj2); // { a: 1, b: 3 }
console.log(obj1); // { a: 1, b: 2 }
```

### Creating object templates:

```javascript
const objTemplate = { a: 1, b: 2 };

function createObj() {
  return { ...objTemplate };
}

const obj1 = createObj();
const obj2 = createObj();
console.log(obj1); // { a: 1, b: 2 }
console.log(obj2); // { a: 1, b: 2 }
```

## Notes

- `structuredClone()` method creates a deep copy of an object, meaning that all nested objects and arrays are also copied. However, it cannot copy functions or undefined values.
  
- Shallow copy only copies the top-level properties of an object, any nested objects or arrays are still referenced to the original object.
  
- Deep copy creates a new object that is completely independent of the original object, but it cannot copy functions or undefined values.
  
- `JSON.parse()` and `JSON.stringify()` methods are not guaranteed to preserve object methods or properties that are not JSON-compatible.

  > <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/ObjectCloning.md}" target="_blank">Edit this page on Github</a>
