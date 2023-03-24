---
tag: "javascript"
slug: "/javascript/function"
date: "2023-02-27"
title: JavaScript Function
description: "A JavaScript Function is a block of code that performs a specific task or set of tasks. A way to encapsulate reusable code and provide a way to modularize your application."
category: "Get Started"
order: 7
prevPath: /javascript/control-flow
nextPath: /javascript/classes
githubPath: /javascript/GetStarted/Function.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Functions** are a fundamental building block of JavaScript programming. They are a way to encapsulate reusable code and provide a way to modularize your application. 

A function is a set of statements that performs a specific task. It is designed to be reusable and can be called multiple times with different arguments. Functions are a crucial part of JavaScript programming, allowing developers to create complex programs that can be easily maintained and updated.


## Syntax and Declaration

A function is declared using the `function` keyword, followed by the **function name**, and a set of parentheses `()` that may contain parameters. Its body is enclosed in curly braces `{}`.

```javascript
function functionName(parameter1, parameter2, ...) {
  // function body
  return result;
}
```

### Parameters and Arguments

**Parameters** are optional variables that are used to pass values to a function. They are enclosed within the parentheses of a function definition and are separated by commas. The values passed to a function through parameters are used to perform the desired task.

**Arguments** are the values that are passed to the function when it is called.

```javascript
// parameters a and b
function add(a, b) {
  return a + b;
}
// arguments 2 and 3
add(2, 3); // returns 5
```

### Return value

A function in JavaScript can return a value using the `return` statement. The returned value can be of any data type, including objects, arrays, and primitives. If a function does not return a value, it returns `undefined` by default.

**With return value**

```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 3); // result = 6
```

**Without return value**

```javascript
function checkError(status, callback) {
  if (status === "error") {
   throw new Error("Operation failed");
  } else {
    callback();
  }
}

const fn = checkError('error', () => {/* */}); // Error: Operation failed
const fn2 = checkError('ok', () => {/* */}) // undefined
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
const greet = (name) => console.log(`Hello, ${name}!`);

greet("John"); // prints "Hello, John!"
```

## Notes

- Functions can be declared in any scope, including global and local scopes.

- If a function does not return a value, it returns `undefined` by default.

- Functions can be assigned to variables, passed as arguments to other functions, and returned from functions.

- A function can be called with fewer or more arguments than it expects. In the case of missing arguments, the missing values will be set to `undefined`. In the case of extra arguments, they will be ignored.

- Functions can be named or anonymous. Named functions are defined with a name, while anonymous functions are not.

- Arrow functions are a shorthand syntax for creating functions in JavaScript. They have a simpler syntax and a more concise way of handling the `this` keyword.