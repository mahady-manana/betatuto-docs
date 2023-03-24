---
tag: "javascript"
slug: /javascript/object/object-prototype-valueof
date: "2023-03-18"
title: Object.prototype.valueOf()
description: "The Object.prototype.valueOf() method returns the primitive value of the specified object. This method is called internally by JavaScript when an object needs to be converted to a primitive value. The value returned by this method depends on the object and its internal state."
category: "Object Methods"
order: 24
prevPath: /javascript/object/object-prototype-tostring
nextPath: /javascript/object/object-prototype-tolocalestring
githubPath: /javascript/ObjectMethods/24-PrototypeValueOf.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Object.prototype.valueOf()** method returns the primitive value of the specified object. This method is called internally by JavaScript when an object needs to be converted to a primitive value. The value returned by this method depends on the object and its internal state.


## How it works ?

When called, the `Object.prototype.valueOf()` method returns the primitive value of the object it is called on. The primitive value of an object is a value that is not an object and can be used in arithmetic or other operations. The exact value returned by the method depends on the object and its internal state.

## Examples

```js
const obj = { x: 10 };
console.log(obj.valueOf()); // { x: 10 }
```
In this example, the `valueOf()` method returns the original object, since it does not have a primitive value.


```js
const date = new Date();
console.log(date.valueOf()); // 1647559799693
```

In this example, the `valueOf()` method returns the primitive value of the [Date](/javascript/dates) object, which is the number of milliseconds since January 1, 1970.

## Detailed explanation

### Syntax

```js
object.valueOf()
```
The `valueOf()` method is called on an object.


### Parameter

The `Object.prototype.valueOf()` method does not accept any parameters.



### Return Value

The value returned by the `Object.prototype.valueOf()` method depends on the object and its internal state. If the object does not have a primitive value, the method returns the original object. Otherwise, it returns the primitive value of the object.

### Limitations

This method only works for objects that have a primitive value. Objects that do not have a primitive value will return the original object.

### Common use cases:

The `Object.prototype.valueOf()` method is commonly used to retrieve the primitive value of a JavaScript object. This can be useful in situations where the object needs to be used in arithmetic or other operations.

### Tips and tricks:

- The `Object.prototype.valueOf()` method is automatically called by JavaScript when an object needs to be converted to a primitive value. This can happen in situations such as arithmetic or comparison operations.
- When implementing custom objects, it is a good practice to define the `valueOf()` method to return the primitive value of the object. This can help to ensure that the object behaves as expected in arithmetic or comparison operations.
- If an object does not have a primitive value, the `Object.prototype.valueOf()` method can be overridden to return a custom primitive value.


### Ecmascript specification

The `Object.prototype.valueOf()` method is defined in ECMAScript 1st Edition and is still part of the current ECMAScript specification (ECMAScript 2022). It is supported by all modern web browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.valueof" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.prototype.valueOf()`:

1. Create a custom object that represents a complex number and override the `valueOf()` method to return the magnitude of the complex number.

<details>

<summary>Solution</summary>

```js
function ComplexNumber(real, imaginary) {
  this.real = real;
  this.imaginary = imaginary;
}

ComplexNumber.prototype.valueOf = function() {
  return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
};

const complex = new ComplexNumber(3, 4);
console.log(complex.valueOf()); // 5
```
In this solution, we define a custom object constructor function `ComplexNumber` that takes two arguments, representing the `real` and `imaginary` parts of the complex number. We then define a `valueOf()` method on the prototype of the `ComplexNumber` function that returns the magnitude of the complex number using the Pythagorean theorem. Finally, we create an instance of the `ComplexNumber` object with the values 3 and 4, and call the `valueOf()` method on the instance, which returns 5, the magnitude of the complex number.

</details>

2. Create a custom object that represents a temperature in Celsius and override the valueOf() method to return the temperature in Fahrenheit.

<details>

<summary>Solution</summary>

```js
function Temperature(celsius) {
  this.celsius = celsius;
}

Temperature.prototype.valueOf = function() {
  return (this.celsius * 9/5) + 32;
};

const temp = new Temperature(25);
console.log(temp.valueOf()); // 77
```

</details>

3. Create a custom object that represents a time duration in seconds and override the valueOf() method to return the duration in minutes.

<details>

<summary>Solution</summary>

```js
function Duration(seconds) {
  this.seconds = seconds;
}

Duration.prototype.valueOf = function() {
  return this.seconds / 60;
};

const duration = new Duration(120);
console.log(duration.valueOf()); // 2
```

</details>