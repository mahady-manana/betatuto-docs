---
tag: "javascript"
slug: "/javascript/variables"
date: "2022-11-24"
title: "JS Variables: let, const and var"
description: "Variables are used to store values that can be referenced and manipulated by your code. JavaScript Variables can be declared with let, const, and var."
category: "Get Started"
order: 2
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
to-heading: 2
class-name: "table-of-contents"
```

## `let`

The `let` keyword is used to declare a variable that can be reassigned later. It has block scope, which means it's only accessible within the block of code in which it's defined. 

Here's an example:

```javascript
{
  let x = 10;
  console.log(x); // Output: 10
}

console.log(x); // Throws ReferenceError: x is not defined
```
## `const`

The `const` keyword is used to declare a variable that cannot be reassigned. It also has block scope. 

Here's an example:


```javascript
{
  const x = 10;
  console.log(x); // Output: 10
}

console.log(x); // Throws ReferenceError: x is not defined
```

## `var`
The `var` keyword is used to declare a variable that can be reassigned, and it has function scope. This means it's accessible anywhere within the function in which it's defined. 
Here's an example:

```javascript
function foo() {
  var x = 10;
  console.log(x); // Output: 10
}

foo();
console.log(x); // Throws ReferenceError: x is not defined

```

> Note: While `var` is still used in legacy code and some modern frameworks, it is generally recommended to use `let` and `const` instead.