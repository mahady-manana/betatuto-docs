---
tag: "javascript"
slug: "/javascript/variables"
date: "2022-11-24"
updatedAt: "2023-03-09"
title: "JS Variables: let, const and var"
description: "Variables are used to store values that can be referenced and manipulated by your code. JavaScript Variables can be declared with let, const, and var."
category: "Get Started"
order: 2
prevPath: /javascript/introduction
nextPath: /javascript/data-types
githubPath: /javascript/GetStarted/Variables.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---

In JavaScript, **variables** are used to store values that can be referenced and manipulated by your code. There are three keywords used to declare variables: **`let`**, **`const`**, and **`var`**.

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

JavaScript variables are declared as follow:

```js
const variableName = value;
let variableName = value; // you can declare variable without value with let
var variableName = value; // you can declare variable without value with var
```

The syntax is simple: use `const`, `let`, or `var` followed by the variable name and the `=` sign, followed by the variable's value. You can omit the value with `let` and `var` and assign it later. We will discuss this later in the tutorial.

Now, let's break things down to make it clear. But before we move on to the famous keywords (`const`, `let`, `var`), let's take a look at how variable names should be named first.

## Variable Naming Rules and Conventions

### Naming Rules (Must Be Followed):

Variable names must follow some naming rules

- Variable names must begin with a **letter**, **underscore** (`_`), or **dollar sign** (`$`). They cannot begin with a number.
- After the first character, variable names can contain letters, numbers, underscores, or dollar signs.
- Variable names are case-sensitive, so `myVariable` and `myvariable` are different variables.
- Certain words are reserved and cannot be used as variable names. These words are known as **keywords** or **reserved words**. you can check the list here: [JavaScript Keywords](/javascript/javascript-keywords)

### Naming Conventions (Recommended)

- Use meaningful names that describe the purpose of the variable.
- Constants should be in all caps and use underscores between words.
- Use descriptive names for function parameters.
- Variables that are intended to be private should start with an underscore (`_`).
- Avoid single-letter variable names unless they are commonly used as such (e.g. `i` for a loop index).
- For variable names with more than one word:
  - **Camel Case**: This convention involves writing the first word in lower case and the subsequent words in upper case. For example, `firstName`, `totalAmount`, `isEmployee`. [**RECOMANDED**]
  - **Pascal Case**: In this convention, the first letter of every word is capitalized. For example, `FirstName`, `TotalAmount`, `IsEmployee`.
  - **Snake Case**: This convention involves separating words with an underscore. For example, `first_name`, `total_amount`, `is_employee`.
  - **Kebab Case**: This convention is similar to snake case, but it separates words with a hyphen instead of an underscore. For example, `first-name`, `total-amount`, `is-employee`.
- Avoid using global variables as they can cause naming conflicts and make the code harder to maintain.

## let

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

## const

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

## var

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

## Summary

- JavaScript variables are used to store values or data.

- Variable names should be descriptive and self-explanatory, making it easier for developers to understand what is stored in the variable.

- In JavaScript, variable names are case-sensitive.

- There are three types of variables in JavaScript: `const`, `let` and `var`.

- `const` is used to declare a constant variable whose value cannot be changed once assigned.

- `let` is used to declare a variable whose value can be changed.

- `var` is an older way of declaring variables that is less commonly used now.

- Variables can be initialized with an initial value when declared or they can be left undefined.

- When declaring a variable without an initial value, it is good practice to use `let`.
- The scope of a variable determines where it can be accessed in the code. Variables declared inside a function are only accessible inside that function (local scope), while variables declared outside of functions can be accessed from anywhere in the code (global scope). See [JavaScript Scopes](/javascript/scopes)

- JavaScript has a concept called **hoisting** where variables declared with `var` are automatically moved to the top of their scope. This can lead to unexpected behavior and bugs, so it is generally recommended to use `let` or `const` instead.

- It is a good practice to initialize variables with meaningful default values, especially if the value will be used before it is explicitly set.

- Avoid using reserved keywords as variable names in JavaScript as they have special meanings and are used for specific purposes in the language.

- Use camelCase when naming variables in JavaScript as it is the common convention in the language.
