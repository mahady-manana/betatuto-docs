---
tag: "javascript"
slug: /javascript/object/object-prototype-tostring
date: "2023-03-18"
title: Object.prototype.toString()
description: "Object.prototype.toString() is a method in JavaScript that returns a string representation of the object. It is a built-in method that can be called on any object in JavaScript."
category: "Object Methods"
order: 23
prevPath: /javascript/object/object-get-own-property-descriptors
nextPath: /javascript/object/object-prototype-valueof
githubPath: /javascript/ObjectMethods/23-PrototypeToString.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.prototype.toString()** is a method in JavaScript that returns a string representation of the object. It is a built-in method that can be called on any object in JavaScript. The string returned by this method is a combination of the object's type and its value. The string representation can be useful for debugging, logging, or even for sending data to a server. In this documentation, we will explore the workings of the `Object.prototype.toString()` method and how it can be used in JavaScript.

## How it works ?

The `Object.prototype.toString()` method works by examining the type of the object it is called on. It then returns a string that represents the type and value of the object. If the object is a primitive type, such as a string or number, the method will return a string representation of that primitive value. If the object is an array or an object literal, the method will return a string representation of the object's type and value.

## Examples

Let's look at some examples of using the `Object.prototype.toString()` method:

Example 1: Calling `toString()` on a string

```js
const str = 'Hello, World!';
console.log(str.toString()); // Output: "Hello, World!"
```

Example 2: Calling `toString()` on a number

```js
const num = 123;
console.log(num.toString()); // Output: "123"
```

Example 3: Calling `toString()` on an array

```js
const arr = [1, 2, 3];
console.log(arr.toString()); // Output: "1,2,3"
```
Example 4: Calling `toString()` on an object

```js
const obj = {name: 'John', age: 30};
console.log(obj.toString()); // Output: "[object Object]"
```

## Detailed explanation

### Syntax

The syntax for calling the Object.prototype.toString() method is as follows:

```js
object.toString()
```

### Parameter

The `Object.prototype.toString()` method does not take any parameters. It is called on the object itself.

### Return Value

The return value of this method is a string representation of the object's type and value.

### Limitations

this method has some limitations. It can only return a string representation of the object's type and value. It cannot return any other information about the object, such as its properties or methods.

### Common use cases:

The `Object.prototype.toString()` method is commonly used for debugging and logging purposes. It can also be used for sending data to a server or for comparing objects.

### Tips and tricks:

- This method is a part of the Object prototype chain in JavaScript. It can be overridden by other objects to return a custom string representation of the object.

- It is recommended to use the `Object.prototype.toString()` method for debugging and logging purposes only. It is not recommended to rely on this method for comparison or other logic in your code.

- If you want to return a custom string representation of an object, you can override the `Object.prototype.toString()` method. For example:
### Ecmascript specification

The `Object.prototype.toString()` method is a part of the ECMAScript specification. It was first introduced in ECMAScript 1 and is supported by all major browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.tostring" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.prototype.toString()`:

1. Create an array of different types of values (strings, numbers, booleans, objects, etc.) and use the `Object.prototype.toString()` method to log the type of each value to the console.

<details>

<summary>Solution</summary>

```js
const arr = ['Hello', 123, true, {name: 'John'}, null, undefined];
arr.forEach(value => console.log(value.toString()));
```

</details>

2. Create a custom object with properties for name, age, and occupation. Override the `Object.prototype.toString()` method to return a string representation of the object in the format "name is age years old and works as occupation".

<details>

<summary>Solution</summary>

```js
const person = {
  name: 'John',
  age: 30,
  occupation: 'developer',
  toString() {
    return `${this.name} is ${this.age} years old and works as ${this.occupation}`;
  }
};

console.log(person.toString());
```

</details>

3. Create a function that takes an object as an argument and logs the string representation of the object to the console using the Object.prototype.toString() method.

<details>

<summary>Solution</summary>

```js
function logObjectString(obj) {
  console.log(obj.toString());
}

const person = {
  name: 'John',
  age: 30
};

logObjectString(person);
```

</details>