---
tag: "javascript"
slug: "/javascript/function"
date: "2023-02-27"
title: JavaScript Function
description: "A JavaScript Function is a block of code that performs a specific task or set of tasks."
category: "Get Started"
order: 7
githubPath: /javascript/GetStarted/Function.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Functions** are a fundamental building block of JavaScript programming. They are a way to encapsulate reusable code and provide a way to modularize your application. Functions are blocks of code that perform a specific task when invoked.

## Syntax and Declaration

A function is declared using the `function` keyword, followed by the **function name**, and a set of parentheses `()` that may contain parameters. The function body is enclosed in curly braces `{}`.

```javascript
function functionName(parameter1, parameter2, ...) {
  // function body
  return result;
}
```

## Parameters and Arguments

**Function parameters** are variables that are listed as a part of a function's declaration.

**Arguments** are the values that are passed to the function when it is called. The number of arguments passed to a function can vary.

```javascript
// parameters a and b
function add(a, b) {
  return a + b;
}
// arguments 2 and 3
add(2, 3); // returns 5
```

## `return` Statement

Functions can return a value using the `return` statement. The `return` statement terminates the function execution and returns a value to the calling function.

```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 3); // result = 6
```

## Anonymous Functions

An **anonymous function** is a function without a name. Anonymous functions are often used as callback functions or as arguments to other functions.

```javascript
const sum = function (a, b) {
  return a + b;
};

sum(2, 3); // returns 5
```

## Arrow Function

An **arrow function** is a concise syntax for writing function expressions. It uses a set of parentheses `()` for the parameters (if there are any), followed by the `=>` symbol, and a pair of curly braces `{}` for the function body (if it has multiple statements) or a single expression (if it has only one statement).

```javascript
const functionName = (param1, param2) => {
  // function body
};
```

```javascript
const greet = name => console.log(`Hello, ${name}!`);

greet("John"); // prints "Hello, John!"
```

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/Function.md" target="_blank">Edit this page on Github</a>

F
