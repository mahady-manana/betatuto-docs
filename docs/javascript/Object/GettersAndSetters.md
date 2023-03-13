---
tag: "javascript"
slug: "/javascript/object/getters-and-setters"
date: "2023-03-09"
title: Getters and Setters
description: "Getters and setters are methods that allow you to retrieve and set the values of object properties."
category: "Javascript Objects"
order: 7
prevPath: /javascript/object/computed-properties
nextPath: /javascript/object/methods
githubPath: /javascript/Object/GettersAndSetters.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


## Overview.

**Getters and setters** are special methods in object-oriented programming that are used to retrieve and set the values of an object's properties. They allow for controlled access to object properties and can be used to validate or modify data before it is stored or retrieved. Getters and setters are commonly used in languages like JavaScript, Java, and Python.



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

The syntax for defining a getter or setter in JavaScript is as follows:

```javascript
const objectName = {
  get propertyName() {
    // getter function body
  },
  set propertyName(value) {
    // setter function body
  }
}
```
To call a getter or setter, use the following syntax:

```javascript
objectName.propertyName;
objectName.propertyName = value;
```

### Parameter

Getters and setters do not take parameters directly. Instead, they work with the properties of the object they are attached to. When a getter is called, it retrieves the value of the associated property, and when a setter is called, it sets the value of the associated property to the provided value.

Examples:

Here's an example of an object with a getter and setter for the `name` property:


```javascript
const person = {
  _name: "",
  get name() {
    return this._name;
  },
  set name(value) {
    if (typeof value !== "string") {
      throw new Error("Name must be a string");
    }
    this._name = value;
  }
}

person.name = "John";
console.log(person.name); // output: "John"
person.name = 123; // throws an error
```

## Uses cases with examples

Getters and setters are useful in many scenarios where you want to control access to object properties or modify the data stored in an object. Here are a few examples:

### Validation
Getters and setters can be used to validate data before it's stored in an object. For example, you might define a setter for a `price` property that ensures the value is a positive number:

```javascript
const product = {
  _price: 0,
  get price() {
    return this._price;
  },
  set price(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Price must be a positive number");
    }
    this._price = value;
  }
}

product.price = 10;
console.log(product.price); // output: 10
product.price = -5; // throws an error
```
### Computed Properties

Getters and setters can be used to create computed properties that are derived from other properties of the object. For example, you might define a getter for a `fullName` property that concatenates the `firstName` and `lastName` properties:


```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(person.fullName); // output: "John Doe"
```

## Notes

- Getters and setters can be used to control access to an object's properties.
- Getters are used to retrieve the value of a property, while setters are used to set the value of a property.
- Getters and setters can be defined using object literal syntax or as part of a class.
- Getters and setters can be used to validate or modify data before it is stored or retrieved from an object's properties.
- Getters and setters can be used to create computed properties that are derived from other properties of an object.
- Getters and setters can be used to make properties private by conventionally naming the actual property name with an underscore prefix and only allowing access through the getter and setter methods.
- Getters and setters can also be used to implement data binding in user interfaces.



> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/GettersAndSetters.md}" target="_blank">Edit this page on Github</a>

