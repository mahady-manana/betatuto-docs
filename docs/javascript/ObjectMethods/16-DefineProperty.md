---
tag: "javascript"
slug: "/javascript/object/object-define-property"
date: "2023-03-16"
title: Object.defineProperty()
description: "Object.defineProperty() is a powerful JavaScript method that allows developers to add new properties to an object or modify existing properties. This method gives developers fine-grained control over the behavior of object properties, allowing for advanced data manipulation and object-oriented programming techniques."
category: "Object Methods"
order: 16
prevPath: /javascript/object/object-set-prototype-of
nextPath: /javascript/object/object-define-properties
githubPath: /javascript/ObjectMethods/16-DefineProperty.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.defineProperty()** is a powerful JavaScript method that allows developers to add new properties to an object or modify existing properties. This method gives developers fine-grained control over the behavior of object properties, allowing for advanced data manipulation and object-oriented programming techniques.

## How it works ?

`Object.defineProperty()` is used to define a new property on an object, or to modify an existing property. The method takes three arguments: the object on which to define or modify the property, the name of the property, and a descriptor object that specifies the behavior of the property.

The descriptor object can include several different properties, including `value`, `writable`, `enumerable`, and `configurable`. These properties allow developers to specify the initial value of the property, whether it can be changed, whether it can be enumerated, and whether it can be deleted or redefined.

Once a property has been defined using `Object.defineProperty()`, it can be accessed and modified like any other property on the object. However, the behavior of the property may be restricted based on the values specified in the descriptor object.

## Examples

Let's consider an example where we define a new property on an object:

```js
const person = { name: "John Doe" };

Object.defineProperty(person, "age", {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(person.age); // 30
person.age = 35;
console.log(person.age); // 30
```

In this example, we define a new property called "`age`" on the "`person`" object. We set the initial value of the property to `30` and specify that the property should not be `writable` or `configurable`, but should be `enumerable`. This means that the property can be accessed and enumerated, but cannot be changed or deleted.

## Detailed explanation

### Syntax

```javascript
Object.defineProperty(obj, prop, descriptor);
```

### Parameter

- `obj`: The object on which to define or modify the property.

- `prop`: The name of the property to define or modify.

- `descriptor`: An object that specifies the behavior of the property. The `descriptor` object can include several different properties, including:
  - `value`: The initial value of the property.
  - `writable`: Whether the property can be changed or not. Default is false.
  - `enumerable`: Whether the property can be enumerated or not. Default is false.
  - `configurable`: Whether the property can be deleted or redefined. Default is false.
  - `get`: A function that retrieves the value of the property.
  - `set`: A function that sets the value of the property.

### Return Value

`Object.defineProperty()` returns the object that was passed as the first argument (`obj`).

### Exceptions

`Object.defineProperty()` may throw a `TypeError` if the object is not configurable and an attempt is made to modify its `writable` or `value` properties.

### Limitations

`Object.defineProperty()` can only define or modify properties on the specified object. It cannot be used to define or modify properties on objects that are higher up in the prototype chain. Additionally, the enumerable and configurable properties of a property cannot be changed once it has been defined using `Object.defineProperty()`.

### Tips and tricks

- When defining properties using `Object.defineProperty()`, it is important to use the "`use strict`" directive to prevent unexpected behavior.

- If a property is being defined on an object that has already been defined using `Object.defineProperty()`, the same descriptor object can be reused to modify the existing property.

- `Object.defineProperty()` is part of the Object methods in JavaScript, which includes other methods such as `Object.create()` and `Object.keys()`. This method is often used in combination with other methods and techniques in object-oriented programming.

- `Object.defineProperty()` is commonly used in JavaScript libraries and frameworks to create custom properties on objects. It is also useful when working with objects that have non-standard behavior or custom getters and setters.

- When using `Object.defineProperty()`, it is best practice to provide a clear and descriptive name for the property being defined or modified. Additionally, it is important to carefully consider the behavior of the property and the values specified in the descriptor object to ensure that the property behaves as intended.

### Ecmascript specification

Object.defineProperty() was introduced in ECMAScript 5. It is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperty" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.defineProperty()`:



1. Define a new property on an object that contains a function as its value:

<details>

<summary>Solution</summary>

```js
const myObject = {};
Object.defineProperty(myObject, 'myFunction', {
  value: function() { console.log('Hello World!'); },
  writable: false,
  enumerable: true,
  configurable: false
});
myObject.myFunction(); // logs "Hello World!"
```

</details>

2. Modify an existing property on an object to add a getter and a setter:

<details>

<summary>Solution</summary>

```js
const myObject = { myProperty: 5 };
Object.defineProperty(myObject, 'myProperty', {
  get: function() { return this._myProperty; },
  set: function(value) { this._myProperty = value * 2; },
  enumerable: true,
  configurable: true
});
myObject.myProperty = 10;
console.log(myObject.myProperty); // logs 20
```

</details>
