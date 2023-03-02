---
tag: "javascript"
slug: "/javascript/operators"
date: "2022-11-24"
title: "JavaScript Operators"
description: "Operators are symbols used in JavaScript to perform various operations, such as arithmetic, comparison, and logical operations."
category: "Get Started"
order: 4
githubPath: /javascript/GetStarted/Operators.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**Operators** are symbols used in JavaScript to perform various operations, such as arithmetic, comparison, and logical operations. Here's a brief overview of some of the most common operators in JavaScript:

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

## Arithmetic Operators in JavaScript

**Arithmetic operators** are used to perform mathematical calculations.

Here are some examples:

| Operator | Description         |
| -------- | ------------------- |
| +        | Addition            |
| -        | Subtraction         |
| \*       | Multiplication      |
| /        | Division            |
| %        | Modulus (remainder) |

### Examples :

```javascript
3 + 5; // => 8
7 - 2; // => 5
4 * 6; // => 24
10 / 2; // => 5
9 % 2; // => 1
```

## Comparison Operators in JavaScript

**Comparison operators** are used to compare two values and return a Boolean value (`true` or `false`).

Here are some examples:

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `>`      | Greater than             |
| `>`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |
| `===`    | Strict Equal to          |
| `!==`    | Strict Not equal to      |

### Examples :

```javascript
3 == 3; // => true
7 > 2; // => true
4 < 6; // => true
10 != 2; // => true
9 <= 9; // => true
9 >= 9; // => true
9 === 9; // => true
"9" === 9; // => false
"9" !== 9; // => true
```
## Logical Operators

**Logical operators** are used to combine multiple conditions and return a Boolean value (`true` or `false`). Here are some examples:

| Operator | Description |
| -------- | ----------- |
| &&       | AND         |
| !        | NOT         |

## Assignment Operators

**Assignment operators** are used to assign a value to a variable. Here are some examples:

| Operator | Description         | Example                           |
| -------- | ------------------- | --------------------------------- |
| =        | Assign              | let x = 5                         |
| +=       | Add and assign      | x += 3 is equivalent to x = x + 3 |
| -=       | Subtract and assign | x -= 2 is equivalent to x = x - 2 |
| \*=      | Multiply and assign | x *= 4 is equivalent to x = x * 4 |
| /=       | Divide and assign   | x /= 2 is equivalent to x = x / 2 |
| %=       | Modulus and assign  | x %= 3 is equivalent to x = x % 3 |


## Other Operators

There are many other operators in JavaScript, including:

The `typeof` operator, which returns the data type of a value.

The `delete` operator, which deletes a property from an object.

The `in` operator, which checks if a property exists in an object.

The `instanceof` operator, which checks if an object is an instance of a specific class.

By understanding these various operators and how to use them, you'll be able to write more powerful and complex JavaScript code.