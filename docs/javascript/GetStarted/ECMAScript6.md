---
tag: "javascript"
slug: "/javascript/ecmascript-6"
date: "2023-02-27"
title: JavaScript ES6
description: ES6 stands for ECMAScript 6, which is the sixth version of the ECMAScript standard. It's a major update to the JavaScript language."
category: "Get Started"
order: 9
prevPath: /javascript/error-handling
nextPath: /javascript/js-object
githubPath: /javascript/GetStarted/ECMAScript6.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**ECMAScript 2015**, also known as ES6, was a major update to the JavaScript language. It introduced several new features that make it more powerful and expressive.

One of the most significant changes in ES6 was the introduction of **class syntax**. Classes provide a more intuitive way to create objects with properties and methods, and are based on JavaScript's existing prototype-based inheritance. They offer a simpler syntax and make object-oriented programming in JavaScript more approachable.

**Arrow functions** were also introduced in ES6, providing a concise way to write functions. They are especially useful for writing callback functions or with higher-order functions like map, reduce, and filter.

**Destructuring assignments** are another addition to ES6, which allow you to extract values from arrays or objects and assign them to variables in a readable way. Additionally, the let and const keywords were introduced to provide new ways to declare variables in JavaScript, offering more control over scope and preventing accidental reassignment.

Other new features introduced in ES6 include **template literals**, which enable embedding expressions inside string literals, and the **spread operator**, which allows you to spread the elements of an array or object into another array or object.

Overall, ES6 greatly enhanced the JavaScript language, making it more expressive and efficient for developers.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 2
class-name: "table-of-contents"
```

## Arrow functions:

```javascript
// Normal function
function multiply(a, b) {
  return a * b;
}

// Arrow function
const multiply = (a, b) => a * b;
```

## `let` and `const` keywords:

```javascript
let count = 0;
count = 1;

const name = "John";
name = "Jane"; // TypeError: Assignment to constant variable.
```

## Template literals:

```javascript
const name = "John";
console.log(`Hello ${name}!`);
```

## Destructuring:

```javascript
const person = {
  name: "John",
  age: 30,
  gender: "male",
};

// Destructuring assignment
const { name, age, gender } = person;
console.log(name, age, gender);
```

## Spread operator:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

## Rest parameter:

```javascript
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7, 8));
```

## Default parameter:

```javascript
function greet(name = "John") {
  console.log(`Hello ${name}!`);
}

greet(); // "Hello John!"
greet("Jane"); // "Hello Jane!"
```

## `class` keyword:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const john = new Person("John", 30);
john.greet(); // "Hello, my name is John and I am 30 years old."
```

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/ECMAScript6.md" target="_blank">Missing information - Edit this page on Github</a>

```

```
