---
tag: "javascript"
slug: "/javascript/object/property-descriptors"
date: "2022-11-24"
title: Object Property Descriptors
description: "Object property descriptors are a way to define and modify the behavior of object properties in JavaScript."
category: "Advanced Javascript Object"
order: 10
githubPath: /javascript/Object/PropertyDescriptors.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Object property descriptors** are a way to define and modify the behavior of object properties in JavaScript. They allow you to specify various attributes for object properties, such as whether they can be modified, enumerated, or deleted, and whether they are writable, configurable, or enumerable.


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


## Syntax

The syntax for defining a property descriptor for an object property is as follows:

```javascript
Object.defineProperty(obj, prop, descriptor);
```

`obj` is the object that the property belongs to, `prop` is the name of the property, and `descriptor` is an object that contains the attributes of the property.

### Examples:

Here's an example of defining a property descriptor for an object property in JavaScript:

```javascript
const obj = {};

Object.defineProperty(obj, 'property', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(obj.property); // 42
obj.property = 43; // Throws an error in strict mode
console.log(obj.property); // 42
delete obj.property; // Throws an error in strict mode
console.log(obj.property); // 42
```

In this example, we're defining a property descriptor for an object property called `property`. We're setting the `value` of the property to `42`, and we're making it non-writable and non-configurable, but enumerable. This means that the property can be accessed and enumerated, but cannot be modified or deleted.

## Uses cases with examples:

Object property descriptors are useful in many scenarios where you want to define and modify the behavior of object properties. Here are a few examples:

### Immutability

Object property descriptors can be used to make object properties immutable, which can help prevent accidental modification of object properties. For example:

```javascript
const obj = {};

Object.defineProperty(obj, 'property', {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false
});
```

In this example, we're making the property of the `obj` object non-writable and non-configurable, which means that it cannot be modified or deleted.

### Computed Properties

Object property descriptors can also be used to create computed properties that are dynamically generated based on other object properties. For example:

```javascript
const obj = {
  _property1: 10,
  _property2: 20,
  get computedProperty() {
    return this._property1 + this._property2;
  },
  set computedProperty(value) {
    this._property1 = value / 2;
    this._property2 = value / 2;
  }
};

console.log(obj.computedProperty); // 30
obj.computedProperty = 40;
console.log(obj.computedProperty); // 40
console.log(obj._property1); // 20
console.log(obj._property2); // 20
```

## Notes

- Object property descriptors provide a flexible way to control the behavior of object properties in JavaScript, which can help you write more robust and maintainable code.
- By using property descriptors, you can specify whether object properties can be modified, enumerated, or deleted, and you can also control whether they are writable, configurable, or enumerable.
- Property descriptors can be used to implement a wide range of functionality, such as defining immutable object properties, creating computed properties, and controlling object property access and modification.
- It's important to use property descriptors judiciously and with care, as they can affect the behavior of your code in subtle and unexpected ways.
- When defining a property descriptor for an object property, it's important to consider the impact that the descriptor will have on the object and any other code that interacts with it.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/PropertyDescriptors.md}" target="_blank">Edit this page on Github</a>
