---
tag: "javascript"
slug: "/javascript/object/methods"
date: "2022-11-24"
title: Object Methods
description: "Object methods are functions that are attached to objects in object-oriented programming."
category: "Advanced Javascript Object"
order: 18
githubPath: /javascript/Object/Methods.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Object methods** are functions that are attached to objects in object-oriented programming. They are used to define the behavior of an object and to perform actions on that object. Object methods can access and modify the properties of the object they are attached to. In JavaScript, object methods are defined using the function keyword, and they can be called using dot notation.

## Syntax

The syntax for defining an object method in JavaScript is as follows:
Create a full documentation of Object Methods, follow the structure below

```javascript
const objectName = {
  methodName: function (parameters) {
    // function body
  },
};
```

or using ES6+ arrow function syntax:

```javascript
const objectName = {
  methodName(parameters) => {
    // function body
  }
}
```

To call an object method, use the following syntax:

```javascript
objectName.methodName(parameters);
```

## Parameter

Object methods can take any number of parameters, just like regular functions. The parameters are defined in the method's parameter list and are separated by commas. When calling an object method, you can pass in arguments for each parameter in the same order that they appear in the parameter list.

### Examples

Here's an example of an object method that calculates the area of a rectangle:

```javascript
const rectangle = {
  width: 10,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.area()); // output: 200
```

## Uses cases with examples

Object methods are useful in a variety of situations where you want to define behavior for an object. Here are a few examples:

### Validation

Object methods can be used to validate data before it's added to an object. For example, you might define a validate method that checks if an email address is valid:

```javascript
const user = {
  name: "John",
  email: "",
  validate: function () {
    if (!this.email.includes("@")) {
      return false;
    }
    return true;
  },
};

console.log(user.validate()); // output: false
user.email = "john@example.com";
console.log(user.validate()); // output: true
```

### Manipulation

Object methods can be used to manipulate the data stored in an object. For example, you might define a convertToUSD method that converts a price property from Euros to USD:

```javascript
const product = {
  name: "Product A",
  price: 10,
  currency: "EUR",
  convertToUSD: function () {
    if (this.currency === "EUR") {
      this.price *= 1.1; // convert from Euros to USD
      this.currency = "USD";
    }
  },
};

console.log(product.price); // output: 10
product.convertToUSD();
console.log(product.price); // output: 11
console.log(product.currency); // output: "USD"
```

## Notes

- Object methods can be added to an object at any time using dot notation or square bracket notation.
- Object methods can access and modify the object's properties using the `this` keyword.
- Object methods can be passed as arguments to other functions.
  When an object method is called, the `this` keyword refers to the object that the method is attached to.
- Object methods can be defined using the function keyword or arrow function syntax.
- When defining an object method using the function keyword, the `function` keyword can be omitted for shorter syntax using method shorthand.
- Arrow functions used as object methods cannot access the object's `this` keyword and would refer to the global object.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/Methods.md}" target="_blank">Edit this page on Github</a>
