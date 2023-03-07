---
tag: "javascript"
slug: "/javascript/variables"
date: "2022-11-24"
updatedAt: "2023-03-07"
title: "JS Variables: let, const and var"
description: "Variables are used to store values that can be referenced and manipulated by your code. JavaScript Variables can be declared with let, const, and var."
category: "Get Started"
order: 2
prevPath: /javascript/
nextPath: /javascript/data-types
githubPath: /javascript/GetStarted/Variables.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---

In JavaScript, variables are used to store values that can be referenced and manipulated by your code. There are three keywords used to declare variables: **`let`**, **`const`**, and **`var`**.

## Table of Contents

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

## `let`

The `let` keyword is used to declare a variable that can be reassigned later. It has block scope, which means it's only accessible within the block of code in which it's defined.

**Declaration**

You can declare a variable by using the `let` keyword followed by the variable name and value. You can also initialize the variable without a value.

```js
let variableName;
let variableName = value;
```

Examples

```js
// with value
let name = "Betatuto.com";
// without value
let description;
// (re)assign value
if ((conditions = true)) {
  description = "Docs about JavaScript, TypeScript, React.js, Node.js";
}
```

**Redeclaration**

Variables declared with `let` cannot be redeclared within the same block.

```js
let name = "JavaScript";
let name = "TypeScript"; // SyntaxError: Identifier 'name' has already been declared
```

**Block scoping**

Variables declared with `let` are block-scoped, meaning they are only accessible within the block they are declared in. A block is defined by a pair of curly braces `{}`. It is not accessible before it is declared.

Here's an example:

```javascript
console.log(myNumber); // ReferenceError: myNumber is not defined
let myNumber = 10;
```

**Temporal Dead Zone**

When a `let` variable is declared within a block, it is in the "temporal dead zone" until it is initialized. This means that you cannot access the variable until it has been initialized.

```js
{
  console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization
  let myVariable = 10;
}
```

**Hoisting**

Variables declared with `let` are not hoisted. This means that they are not accessible before they are declared.

> `let` variables in JavaScript are block-scoped, cannot be redeclared within the same block, are not hoisted, and are in the temporal dead zone until they are initialized. They are a useful tool for managing scope and preventing variable name collisions.

## `const`

The `const` keyword is used to declare variables that are block-scoped and cannot be reassigned. This means that variables declared with `const` are only accessible within the block they are declared in and their value cannot be changed after they are assigned.

**Declaration**

You can declare a `const` variable by using the `const` keyword followed by the variable name.

```js
const variableName = value;
```

**Block Scoping**

Variables declared with `const` are block-scoped, meaning they are only accessible within the block they are declared in.

```js
{
  const ten = 10;
}
console.log(ten); // ReferenceError: ten is not defined
```

**Reassignment**

Variables declared with `const` cannot be reassigned.

```js
const myNumber = 10;
myNumber = 20; // TypeError: Assignment to constant variable.
```

**Hoisting**

Variables declared with `const` are not hoisted.

**Temporal Dead Zone**

When a const variable is declared within a block, it is in the "temporal dead zone" until it is initialized. This means that you cannot access the variable until it has been initialized.

## `var`

The `var` keyword is used to declare a variable that can be reassigned, and it has function scope. This means it's accessible anywhere within the function in which it's defined.

You can declare a `var` variable by using the `var` keyword followed by the variable name. You can initialize the variable with or without a value.



```js

const variableName;
const variableName = value;
```

**Function Scoping**

Variables declared with `var` are function-scoped, meaning they are only accessible within the function they are declared in.

```js
function myFunction() {
  var myVariable = 10;
  console.log(myVariable); // 10
}
console.log(myVariable); // ReferenceError: myVariable is not defined
```

**Reassignment**
Variables declared with `var` can be reassigned.

```js
var myVariable = 10;
myVariable = 20;
console.log(myVariable); // 20
```
**Hoisting**

Variables declared with `var` are hoisted. This means that they are accessible before they are declared.

```javascript
console.log(myVariable); // undefined
var myVariable = 10;
```

> Note: While `var` is still used in legacy code and some modern frameworks, it is generally recommended to use `let` and `const` instead.
