---
tag: "javascript"
slug: "/javascript/control-flow"
date: "2022-11-24"
title: JavaScript Control Flow
description: In JavaScript, control flow refers to the order in which statements and expressions are executed within a program."
category: "Get Started"
order: 6
prevPath: /javascript/scopes
nextPath: /javascript/function
githubPath: /javascript/GetStarted/ControlFlow.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Control flow** in JavaScript refers to the sequence in which statements are executed in a program, and how many times they are executed based on conditions. Control flow statements enable you to control the order of code execution in JavaScript.


## Conditional Statements

**Conditional statements** allow you to execute certain code blocks only if certain conditions are met.

### `if` statement

The **`if` statement** executes a statement if a specified condition is truthy.

Example

```javascript
let message;

if (status === "OK") {
  message = "It works!";
}

let x = 5;
if (x > 3) {
  console.log("x is greater than 3");
}
```

### `else` statement

The **`else` statement** specifies a block of code to be executed if the same condition in the preceding `if` statement evaluates to false.

Example:

```javascript
let x = 2;
if (x > 3) {
  console.log("x is greater than 3");
} else {
  console.log("x is less than or equal to 3");
}
```

### `else...if` statement

The **`else...if` statement** specifies a new condition to test, and executes a block of code if the new condition is true and all preceding conditions were false.

Example:

```javascript
let x = 2;
if (x > 3) {
  console.log("x is greater than 3");
} else if (x === 3) {
  console.log("x is equal to 3");
} else {
  console.log("x is less than 3");
}
```

### `switch` statement

The **`else...if` statement** is used to perform different actions based on different conditions. It is often used as an alternative to long if/else statements.

Example:

```javascript
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple":
    console.log("Apple is red.");
    break;
  case "grape":
    console.log("Grape is purple.");
    break;
  default:
    console.log("I do not know this fruit.");
}
```

## Loop Statements

**Loop statements** allow you to repeat code blocks based on certain conditions.

### `while` Loop

The **`while` loop** executes a block of code as long as a specified condition is true.

Example:

```javascript
let x = 1;
while (x <= 5) {
  console.log(x);
  x++;
}
```

### `do...while` Loop

The **`do...while` loop** is similar to the `while` loop, but the block of code is executed once before the condition is checked.

Example:

```javascript
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 5);
```

### `for` Loop

The **`for` loop** repeats a block of code a specified number of times.

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### `for...in` Loop

The **`for...in` loop** iterates over the properties of an object.

Example:

```javascript
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### `for...of` Loop

The **`for...of` loop** iterates over the values of an iterable object.

Example:

```javascript
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
```

## Jump Statements

**Jump statements** allow you to interrupt the normal flow of control in a program.

### `break` Statement

The **`break` statement** terminates the current loop, switch statement, or labeled statement.

Example:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

### `continue` Statement

The **`continue` statement** skips one iteration of a loop.

Example:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/ControlFlow.md" target="_blank">Edit this page on Github</a>
