---
tag: "javascript"
slug: /javascript/object/object-get-own-property-names
date: "2023-03-17"
title: Object.getOwnPropertyNames()
description: "The Object.getOwnPropertyNames() method is a built-in function in JavaScript that returns an array of all properties (including non-enumerable properties) found directly on an object."
category: "Object Methods"
order: 19
prevPath: /javascript/object/object-get-prototype-of
nextPath: /javascript/object/object-get-own-property-symbols
githubPath: /javascript/ObjectMethods/19-GetOwnPropertyNames.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Object.getOwnPropertyNames()** method is a built-in function in JavaScript that returns an array of all properties (including non-enumerable properties) found directly on an object. It can be used to introspect an object and access all of its properties, regardless of their enumerability.

## How it works ?

The `Object.getOwnPropertyNames()` method works by accepting an object as its parameter and returning an array of strings representing the names of all properties found directly on the object. These properties can be enumerable or non-enumerable, and can be own properties of the object or inherited properties from its prototype chain.

This method is a useful tool for introspecting objects and accessing their own properties, including non-enumerable properties that are not returned by other property listing methods.

## Examples

Example 1: Using `Object.getOwnPropertyNames()` to get all own properties of an object.

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const props = Object.getOwnPropertyNames(obj);

console.log(props); // Output: ["a", "b", "c"]
```

Example 2: Using `Object.getOwnPropertyNames()` to get all own and inherited properties of an object.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`My name is ${this.name}.`);
};

const cat = new Animal("Fluffy");

const props = Object.getOwnPropertyNames(cat);

console.log(props); // Output: ["name"]
```

In the above example, we created an `Animal` constructor function and added a method to its prototype. We then created a new instance of `Animal` called "`cat`" and used `Object.getOwnPropertyNames()` to get all of its properties. As we can see, only the own property "`name`" is returned, and the inherited property "`speak`" is not.

## Detailed explanation

### Syntax

```javascript
Object.getOwnPropertyNames(obj);
```

### Parameter

- `obj`: The object whose own properties are to be returned. This can be any JavaScript object.

### Return Value

The `Object.getOwnPropertyNames()` method returns an array of strings representing the names of all own properties (including non-enumerable properties) found directly on the object. If the object has no own properties, an empty array is returned.

### Limitations

- The `Object.getOwnPropertyNames()` method only returns the names of own properties found directly on the object. It does not return the names of inherited properties.

- If the object is `null` or `undefined`, a `TypeError` will be thrown.

### Common use cases:

- Introspecting an object and accessing all of its own properties, including non-enumerable properties.

- Checking for the presence of specific properties on an object.

- Iterating over the names of an object's properties in a for loop.

### Tips and tricks:

- You can use the [Array.prototype.forEach()](/javascript/array/for-each/) method to iterate over the names of an object's properties.

- The `Object.getOwnPropertySymbols()` method can be used to return an array of the symbols found on an object.

- Use the `Object.getOwnPropertyNames()` method when you need to access all of an object's own properties, including non-enumerable properties.

- Be aware that this method only returns the names of own properties, not inherited properties.

- Use the [Object.keys()](/javascript/object/object-keys/) method if you only need to access the names of an object's enumerable properties.

- In addition to returning the names of own properties, this method can also be used to return the names of properties on other types of objects, such as arrays and functions.

- This method is similar to the `Object.keys()` method, which only returns the names of enumerable properties.

### Ecmascript specification

The `Object.getOwnPropertyNames()` method was introduced in ECMAScript 5 (ES5).
This method is supported by all modern browsers, including Chrome, Firefox, Safari, Edge, and Internet Explorer 9 and above.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertynames" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.getOwnPropertyNames()`:

1. Write a function that takes an object as its parameter and returns an array of the names of all its own properties, including non-enumerable properties.

<details>

<summary>Solution</summary>

```js
function getAllProperties(obj) {
  return Object.getOwnPropertyNames(obj);
}
```

</details>

2. Write a function that takes an object as its parameter and checks if it has a property with the name "length".

<details>

<summary>Solution</summary>

```js
function hasLengthProperty(obj) {
  const props = Object.getOwnPropertyNames(obj);
  return props.includes("length");
}
```

</details>

3.  Write a function that takes an object as its parameter and iterates over the names of its properties, logging each name to the console.

<details>

<summary>Solution</summary>

```js
function logPropertyNames(obj) {
  const props = Object.getOwnPropertyNames(obj);
  props.forEach((prop) => console.log(prop));
}
```

</details>
