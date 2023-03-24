---
tag: "javascript"
slug: "/javascript/object/object-prevent-extensions"
date: "2023-03-16"
title: Object.preventExtensions()
description: "The Object.preventExtensions() method is a powerful tool that can be used to prevent the extension of an object. It is a built-in JavaScript function that prevents new properties from being added to an object, but it doesn't stop the modification or deletion of the existing properties."
category: "Object Methods"
order: 13
prevPath: /javascript/object/object-is-sealed
nextPath: /javascript/object/object-is-extensible
githubPath: /javascript/ObjectMethods/13-PreventExtensions.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Object.preventExtensions()** method is a powerful tool that can be used to prevent the extension of an object. It is a built-in JavaScript function that prevents new properties from being added to an object, but it doesn't stop the modification or deletion of the existing properties. The method is commonly used to make sure that an object has a fixed structure, and that no unexpected changes can be made to it.


## How it works ?

When you call the `Object.preventExtensions()` method, it makes the object immutable by preventing the addition of new properties. This means that any attempt to add new properties to the object will fail. The method returns the same object that was passed in as an argument, but with the added property that it cannot be extended.

The `Object.preventExtensions()` method takes one parameter, which is the object that you want to make non-extensible. Any object type can be passed as a parameter to this method, including:

- Object literals: Objects created using curly braces notation `{}`.
- Arrays: Arrays are a type of object in JavaScript and can be passed as a parameter to the method.
- Objects created using the `new` operator: Objects created using constructor functions or classes can also be passed as a parameter to `Object.preventExtensions()`.
- Any other type of object that can be created in JavaScript.

## Examples

```js
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

Object.preventExtensions(myObject);

myObject.d = 4; // throws a TypeError
```

```js
const myArray = [1, 2, 3];

Object.preventExtensions(myArray);

myArray.push(4); // throws a TypeError
```

## Detailed explanation

### Syntax

```javascript
Object.preventExtensions(obj);
```

### Parameter

- `obj`: The `obj` parameter is the object that you want to make immutable. `obj` can be Object, Array or Any other type of object that can be created in JavaScript.

### Return Value

The method returns the same object that was passed in as an argument, but with the added property that it cannot be extended.

### Exceptions

If the object is not extensible, the method does nothing and returns the same object that was passed in as an argument. If you try to add a new property to an object that has been made immutable using `Object.preventExtensions()`, a `TypeError` is thrown.

### Limitations

The `Object.preventExtensions()` method only prevents the addition of new properties to an object. It does not prevent the modification or deletion of existing properties.

### Notes

It is worth noting that making an object immutable using `Object.preventExtensions()` is not the same as making it read-only. The latter can be achieved using the [Object.freeze()](/javascript/object/object-freeze/) method, which prevents any modifications or deletions of the existing properties as well.

### Common use cases

The `Object.preventExtensions()` method is commonly used to create objects with a fixed structure that cannot be modified at runtime. It is particularly useful when dealing with complex data structures or objects that are shared across multiple modules or functions.

### Tips and tricks

- It is generally recommended to use `Object.preventExtensions()` sparingly, and only when it is absolutely necessary to prevent the extension of an object. Overusing the method can make code less flexible and harder to maintain.

- If you want to make an entire object graph immutable, you can use a library such as `Immutable.js`, which provides a collection of persistent data structures that are fully immutable.

### Ecmascript specification

The `Object.preventExtensions()` method was introduced in ECMAScript 5 (2009) and is supported by all modern web browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.preventextensions" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Create an object with some properties, and then make it immutable using `Object.preventExtensions()`. Try adding a new property to the object and see what happens.

<details>

<summary>Solution</summary>

```js
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

Object.preventExtensions(myObject);

// Try adding a new property to the object
myObject.email = "john@gmail.com"; // This should throw a TypeError
```

</details>

2. Create an array with some elements, and then make it immutable using `Object.preventExtensions()`. Try adding a new element to the array and see what happens.

<details>

<summary>Solution</summary>

```js
const myArray = [1, 2, 3];

Object.preventExtensions(myArray);

// Try adding a new element to the array
myArray.push(4); // This should throw a TypeError
```

</details>
