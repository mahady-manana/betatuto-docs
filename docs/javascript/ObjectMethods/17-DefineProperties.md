---
tag: "javascript"
slug: "/javascript/object/object-define-properties"
date: "2023-03-16"
title: Object.defineProperties()
description: "Object.defineProperties() is a built-in method in JavaScript that allows developers to define new properties or modify existing ones on an object, in a way that provides greater control and customization over the behavior of the object."
category: "Object Methods"
order: 17
prevPath: /javascript/object/object-define-property
nextPath: /javascript/object/object-get-prototype-of
githubPath: /javascript/ObjectMethods/17-DefineProperties.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.defineProperties()** is a method in JavaScript that allows you to define new properties or modify existing ones on an object. This method is part of the Object constructor and is used to create and configure properties on an object, in a way that provides greater control and customization over the behavior of the object. With this method, you can specify various attributes such as getters, setters, enumerable, writable, and configurable properties for each property in the object.

In this documentation, we will cover how Object.defineProperties() works, its syntax, parameters, return values, exceptions, limitations and mores.

## How it works ?

`Object.defineProperties()` takes two arguments: the object you want to modify and an object containing the properties you want to define or modify. The second argument should be an object with property descriptors. A property `descriptor` is an object that describes the attributes of a property, such as its `value`, whether it is writable, and whether it can be deleted.

`Object.defineProperties()` iterates through the properties of the property `descriptor` object and applies each property descriptor to the object you want to modify. This method creates new properties or modifies existing ones, depending on whether the properties already exist in the object or not.

The ability to define properties dynamically is a powerful feature that allows developers to build flexible and extensible applications.

## Examples

Here are some examples to illustrate how to use `Object.defineProperties()`:

```js
const obj = {};

Object.defineProperties(obj, {
  prop1: {
    value: "JavaScript",
    writable: true,
  },
  prop2: {
    value: "TypeScript",
    writable: false,
  },
});

console.log(obj.prop1); // JavaScript
console.log(obj.prop2); // TypeScript

// ::checked This works since prop1 is writable checked::

obj.prop1 = "React";
console.log(obj.prop1); // React

// ::error TypeError: Cannot assign to read only property 'prop2' of object '#<Object>' error::
obj.prop2 = "Node";
```

```js
const obj = {
  prop1: 1,
};

Object.defineProperties(obj, {
  prop1: {
    // This will modify the existing property
    value: 2,
  },
  prop2: {
    // This will create a new property
    value: "Hello",
    writable: false,
  },
});

console.log(obj.prop1); // 2
console.log(obj.prop2); // Hello
```

## Detailed explanation

### Syntax

```javascript
Object.defineProperties(obj, props);
```

### Parameter

- `obj`: The object on which to define or modify properties.

- `props`: An object literal that contains one or more property descriptors. A property descriptor is an object that contains the following properties:
  - `configurable`: A boolean that indicates whether the property can be deleted or modified. Defaults to `false`.
  - `enumerable`: A boolean that indicates whether the property is enumerable in a `for...in` loop. Defaults to `false`.
  - `value`: The value of the property, or a function that computes the value. Defaults to `undefined`.
  - `writable`: A boolean that indicates whether the property can be modified. Defaults to `false`.
  - `get`: A function that gets the value of the property. Defaults to `undefined`.
  - `set`: A function that sets the value of the property. Defaults to `undefined`.

### Return Value

The modified object.

### Exceptions

`TypeError`: If the first argument is not an object, or if the second argument is not an object literal.

### Limitations

- `Object.defineProperties()` cannot be used to modify built-in properties of an object, such as Object.prototype.
- Once an object is sealed or frozen with [Object.seal()](/javascript/object/object-seal/) or [Object.freeze()](/javascript/object/object-freeze/), you cannot add or remove properties or modify existing properties using `Object.defineProperties()`.

### Common use cases:

- Defining multiple properties on an object at once.

- Defining getters and setters for computed properties.

- Adding custom behavior to an object by defining methods as properties.

### Tips and tricks:

- Use Object.defineProperties() sparingly, and only when necessary. In most cases, it is better to define properties using object literals or constructors.

- Use meaningful names for properties, and make sure to document their purpose and behavior.

- Use the configurable and enumerable properties of a property descriptor carefully, as they can affect the behavior of other parts of your code.

- Consider using the Object.freeze() or Object.seal() methods to prevent unintended modification of object properties.

- When defining multiple properties at once, use object literals to make your code more concise and readable.

- Use computed property names to dynamically define property names.

- Use the Object.getOwnPropertyDescriptors() method to retrieve an object's property descriptors.

### Ecmascript specification

`Object.defineProperties()` was introduced in ECMAScript 5 (2009).
It is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.defineproperties" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.defineProperties)`:

1. Defining Multiple Properties

Create an object using `Object.defineProperties()` with the following properties:

- `name`: a string representing a person's name
- `age`: a number representing a person's age
- `city`: a string representing a person's city of residence
- `fullName`: a getter function that returns the person's full name as a string in the format "Last Name, First Name"

<details>

<summary>Solution</summary>

```js
const person = {};
Object.defineProperties(person, {
  name: { value: "John Doe" },
  age: { value: 30 },
  city: { value: "New York" },
  fullName: {
    get() {
      const [firstName, lastName] = this.name.split(" ");
      return `${lastName}, ${firstName}`;
    },
  },
});
```

</details>

2.  Modifying Existing Properties

Create an object using Object.defineProperties() with the following properties:

- `name`: a string representing a person's name
- `age`: a number representing a person's age
- `city`: a string representing a person's city of residence
- `incrementAge`: a method that increments the person's age by 1

<details>

<summary>Solution</summary>

```js
const person = {};
Object.defineProperties(person, {
  name: { value: "John Doe" },
  age: { value: 30, writable: true },
  city: { value: "New York" },
  incrementAge: {
    value() {
      this.age++;
    },
  },
});
```

</details>

3.  Using Computed Property Names
    Create an object using Object.defineProperties() with the following properties:

- `firstName`: a string representing a person's first name
- `lastName`: a string representing a person's last name
- `[fullName]`: a getter function that returns the person's full name as a string in the format "Last Name, First Name"

<details>

<summary>Solution</summary>

```js
const fullName = Symbol("fullName");
const person = {};
Object.defineProperties(person, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
  [fullName]: {
    get() {
      return `${this.lastName}, ${this.firstName}`;
    },
  },
});
```

</details>
