---
tag: "javascript"
slug: /javascript/object/object-get-own-property-descriptor
date: "2023-03-17"
title: Object.getOwnPropertyDescriptor()
description: "The Object.getOwnPropertyDescriptor() method is used to get the descriptor of a property of an object. The descriptor provides information about the property, such as whether it is writable, enumerable, and configurable. "
category: "Object Methods"
order: 21
prevPath: /javascript/object/object-get-own-property-symbols
nextPath: /javascript/object/object-get-own-property-descriptors
githubPath: /javascript/ObjectMethods/21-GetOwnPropertyDescriptor.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Object.getOwnPropertyDescriptor()** method is used to get the descriptor of a property of an object. The descriptor provides information about the property, such as whether it is `writable`, `enumerable`, and `configurable`. This method is useful when you need to access information about an object property.

## How it works ?

The `Object.getOwnPropertyDescriptor()` method takes two arguments: the object that contains the property and the name of the property. It returns an object that contains the following properties:

- `configurable`: A boolean value that indicates whether the property can be deleted or modified.
- `enumerable`: A boolean value that indicates whether the property can be enumerated using a [for...in](/javascript/control-flow/#forin-loop) loop or [Object.keys()](/javascript/object/object-keys/).
- `value`: The value of the property. This property is only present if the property is not an accessor property.
- `writable`: A boolean value that indicates whether the property can be changed.

IF the specified property does not exist on the object, undefined is returned.

## Examples

Example 1: Get the descriptor of a property

```js
const obj = {
  name: "John",
  age: 25,
};

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");

console.log(descriptor);
// { value: 'John', writable: true, enumerable: true, configurable: true }
```

Example 2: Get the descriptor of an accessor property

```js
const obj = {
  _name: "John",
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");

console.log(descriptor);
// { get: [Function: get name], set: [Function: set name], enumerable: true, configurable: true }
```

## Detailed explanation

### Syntax

```javascript
Object.getOwnPropertyDescriptor(obj, prop);
```

### Parameter

- `obj`: The object that contains the property.
- `prop`: The name of the property whose descriptor is to be retrieved.

### Return Value

An object that contains the descriptor of the property.

The `descriptor` object contains the following properties:

- `configurable`: A boolean value that indicates whether the property can be deleted or modified.
- `enumerable`: A boolean value that indicates whether the property can be enumerated using a for...in loop or Object.keys().
- `value`: The value of the property. This property is only present if the property is not an accessor property.
- `writable`: A boolean value that indicates whether the property can be changed.
- `get`: A function that gets the value of the property. This property is only present if the property is an accessor property.
- `set`: A function that sets the value of the property. This property is only present if the property is an accessor property.

### Exceptions

- If the `obj` parameter is not an object, a `TypeError` is thrown.
- If the `prop` parameter is not a string, a `TypeError` is thrown.

### Limitations

The `Object.getOwnPropertyDescriptor()` method only retrieves the descriptor of the specified property. To retrieve the descriptors of all properties of an object, use [Object.getOwnPropertyDescriptors()](/javascript/object/object-get-own-property-descriptors) instead.

The descriptors of properties inherited from the object's prototype chain are not retrieved by this method.

### Common use cases:

- Retrieving property descriptors for specific properties of an object
- Checking if a property is `writable`, `enumerable` or `configurable`
- Copying property descriptors from one object to another

### Tips and tricks:

- You can use Object.getOwnPropertyDescriptor() on built-in objects such as arrays and functions as well
- If a property is inherited, `Object.getOwnPropertyDescriptor()` only returns its own descriptor, not the one from the prototype chain
- Use Object.getOwnPropertyDescriptor() when you need to retrieve information about a single property
- When you need to retrieve descriptors for multiple properties, use [Object.getOwnPropertyDescriptors()](/javascript/object/object-get-own-property-descriptors) instead
- Use [Object.defineProperty()](/javascript/object/object-define-property/) or [Object.defineProperties()](/javascript/object/object-define-properties/) in combination with `Object.getOwnPropertyDescriptor()` to modify the descriptors of properties

### Ecmascript specification

The `Object.getOwnPropertyDescriptor()` method was introduced in ECMAScript 5 and is supported in all modern web browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptor" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.getOwnPropertyDescriptor()`:

1. Write a function that takes an object and returns an array of all the property descriptors for that object.

<details>

<summary>Solution</summary>

```js
function getAllPropertyDescriptors(obj) {
   const props = Object.getOwnPropertyNames(obj);
   const descriptors = [];
   for (let i = 0; i < props.length; i++) {
      descriptors.push(Object.getOwnPropertyDescriptor(obj, props[i]));
   }
   return descriptors;
}
```

</details>

2. Write a function that takes an object and a property name, and checks if that property is writable.

<details>

<summary>Solution</summary>

```js
function isPropertyWritable(obj, propName) {
   const descriptor = Object.getOwnPropertyDescriptor(obj, propName);
   if (descriptor) {
      return descriptor.writable;
   }
   return false;
}
```

</details>

3. Write a function that takes an object and an array of property names, and sets the configurable property to true for all those properties.

<details>

<summary>Solution</summary>

```js
function makePropertiesConfigurable(obj, props) {
   for (let i = 0; i < props.length; i++) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, props[i]);
      if (descriptor) {
         descriptor.configurable = true;
         Object.defineProperty(obj, props[i], descriptor);
      }
   }
}
```

</details>
