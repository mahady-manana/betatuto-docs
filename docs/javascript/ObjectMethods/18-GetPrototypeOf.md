---
tag: "javascript"
slug: "/javascript/object/object-get-prototype-of"
date: "2023-03-17"
title: Object.getPrototypeOf()
description: "Object.getPrototypeOf() is a built-in JavaScript method that allows you to retrieve the prototype of an object. The prototype is an object that is used as a template for creating new objects using the same constructor function."
category: "Object Methods"
order: 18
prevPath: /javascript/object/object-define-properties
nextPath: /javascript/object/object-get-own-property-names
githubPath: /javascript/ObjectMethods/18-GetPrototypeOf.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.getPrototypeOf()** is a built-in JavaScript method that allows you to retrieve the prototype of an object. The prototype is an object that is used as a template for creating new objects using the same constructor function. Understanding how prototypes work is essential for creating efficient and maintainable code in JavaScript.

## How it works ?

The `Object.getPrototypeOf()` method returns the prototype of an object. It takes one parameter, which is the object whose prototype you want to retrieve. If the object has a prototype, the method returns it. If the object does not have a `prototype`, the method returns `null`. Here's an example:

```js
function Person(name) {
  this.name = name;
}

const john = new Person("John");

console.log(Object.getPrototypeOf(john)); // Output: Person {}
```

## Examples

Here are some examples to illustrate how to use `Object.getPrototypeOf()`:

```js
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

const car = new Vehicle("Toyota", "Camry");

Object.setPrototypeOf(car, Vehicle.prototype);

console.log(Object.getPrototypeOf(car) === Vehicle.prototype); // Output: true
```

```js
const animal = {};

Object.setPrototypeOf(animal, Object.prototype);

console.log(Object.getPrototypeOf(animal) === Object.prototype); // Output: true
```

## Detailed explanation

### Syntax

```javascript
Object.getPrototypeOf(obj);
```

### Parameter

The `Object.getPrototypeOf()` method takes only one parameter, "`obj`", which is required. The "`obj`" parameter is the object whose prototype you want to retrieve.

### Return Value

The `Object.getPrototypeOf()` method returns the prototype of the specified object. If the object has a prototype, the method returns it. If the object does not have a prototype, the method returns `null`.

### Limitations

The `Object.getPrototypeOf()` method can only retrieve the prototype of an object. It cannot be used to modify the prototype of an object. If you want to modify the prototype of an object, you need to use the[ Object.setPrototypeOf()](/javascript/object/object-set-prototype-of) method. Additionally, This method only works with objects. It cannot be used with primitive values like strings, numbers, or booleans.

### Common use cases:

This method is commonly used to inspect and modify the prototype of an object. It is also useful for checking whether an object inherits from a specific prototype.

### Tips and tricks:

The `Object.getPrototypeOf()` method is part of the prototype chain in JavaScript. It is used to access and manipulate the prototype object of an object. This method is similar to the `proto` property, which is deprecated in favor of `Object.getPrototypeOf()`.

When using this method, it is important to remember that modifying the prototype object of an object can have unintended consequences. It is best to avoid modifying the prototype object of built-in objects like Array, String, and Number, as this can cause compatibility issues with other libraries and frameworks.

When checking if an object inherits from a specific prototype, you can use the `instanceof` operator instead of the `Object.getPrototypeOf()` method. For example:

```js
function Person(name) {
  this.name = name;
}

const john = new Person("John");

console.log(john instanceof Person); // Output: true
```

### Ecmascript specification

The Object.getPrototypeOf() method was introduced in ECMAScript 5.1 and is part of the core JavaScript language. It is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getprototypeof" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>
