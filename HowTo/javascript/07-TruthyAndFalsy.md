---
tag: "howto"
slug: "/howto/javascript/truthy-and-falsy-value-javascript"
date: "2023-03-28"
# updatedAt: "2023-03-09"
title: "Truthy vs Falsy Values in JavaScript"
description: "Truthy and falsy values in JavaScript are values that can be implicitly converted to a boolean true or false when used in a boolean context. Truthy values are those that evaluate to true, while falsy values are those that evaluate to false."
category: "How-To"
# categoryOrder: 1
topic: Basic concepts
language: JavaScript
order: 7
githubPath: /javascript/07-TruthyAndFalsy.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Truthy and falsy values** in JavaScript are values that can be implicitly converted to a boolean `true` or `false` when used in a boolean context. **Truthy values** are those that evaluate to `true`, while **falsy values** are those that evaluate to `false`. Understanding truthy and falsy values is important because it can help you write more concise and expressive code.

In JavaScript, every value has an inherent boolean value, either `true` or `false`. When you use a value in a boolean context, JavaScript automatically converts that value to a boolean using a process known as **type coercion**. The result of this conversion is either `true` or `false`.


## Truthy Values


A **truthy value** is any value that is considered `true` when encountered in a boolean context. In other words, a value is truthy if it converts to `true` when coerced to a boolean.

Here are some examples of truthy values:

```js
if ("hello") {
  console.log("This will be printed because 'hello' is truthy.");
}

if (42) {
  console.log("This will be printed because 42 is truthy.");
}

if (true) {
  console.log("This will be printed because true is truthy.");
}
```

The following values are also truthy:

- Any non-empty string, such as `"Hey !"`, `"0"` or `"false"`.
- Any non-zero number, such as `42` or `-1`.
- The boolean value `true`.
- Any object, including arrays and functions.
- The special value `Infinity`.
- The special value `-Infinity`.


Here are some examples of truthy values that are a bit more surprising:



```js
if ([]) {
  console.log("This will be printed because an empty array is truthy.");
}

if ({}) {
  console.log("This will be printed because an empty object is truthy.");
}

if (new Date()) {
  console.log("This will be printed because a Date object is truthy.");
}
```

In all of these cases, the value in the `if` statement is truthy, so the code inside the `if` block will be executed.


## Falsy Values

A **falsy value** is any value that is considered `false` when encountered in a boolean context. In other words, a value is falsy if it converts to `false` when coerced to a boolean.

Here are some examples of falsy values:

```js
if (false) {
  console.log("This will not be printed because false is falsy.");
}

if (0) {
  console.log("This will not be printed because 0 is falsy.");
}

if (null) {
  console.log("This will not be printed because null is falsy.");
}

if (undefined) {
  console.log("This will not be printed because undefined is falsy.");
}

if (NaN) {
  console.log("This will not be printed because NaN is falsy.");
}

if ("") {
  console.log("This will not be printed because an empty string is falsy.");
}
```
In all of these cases, the value in the `if` statement is falsy, so the code inside the `if` block will not be executed.

In addition to the examples above, the following values are also falsy:

- The boolean `false`
- The value `null`
- The value `undefined`
- The number `0`
- The empty string (`''` or `""`)
- The value `NaN`

## Converting Values to Booleans

In JavaScript, you can explicitly convert a value to a `boolean` using the `Boolean()` function. This is often useful when you want to convert a value to a boolean and are not sure whether the value is truthy or falsy.

Here are some examples of how to use the `Boolean()` function:

```js
console.log(Boolean("hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
```

In all of these cases, the `Boolean()` function returns either `true` or `false`, depending on whether the original value is truthy or falsy.

You can also use the double negation operator (`!!`) to convert a value to a `boolean`. This is a shorthand way of using the `Boolean()` function:

```js
console.log(!!"hello"); // true
console.log(!!42); // true
console.log(!!{}); // true
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!0); // false
console.log(!!""); // false
```

In all of these cases, the double negation operator returns either `true` or `false`, depending on whether the original value is truthy or falsy.


## Truthy And Falsy With Conditional Statements

Understanding truthy and falsy values is particularly important when working with conditional statements like `if`, `else`, and `switch`.

Here's an example of using a truthy value in an `if` statement:

```js
const myVariable = "hello";

if (myVariable) {
  console.log("myVariable is truthy.");
} else {
  console.log("myVariable is falsy.");
}
```
In this example, the value of `myVariable` is truthy, so the code inside the `if` block will be executed, and `"myVariable is truthy."` will be printed to the console.

Here's an example of using a falsy value in an if statement:

```js
let myVariable = null;

if (myVariable) {
  console.log("myVariable is truthy.");
} else {
  console.log("myVariable is falsy.");
}
```

In this example, the value of `myVariable` is falsy, so the code inside the `else` block will be executed, and `"myVariable is falsy."` will be printed to the console.

## Notes

### Truthy values:

- All non-empty strings (e.g. `"hello"`, `"false"`)
- All non-zero numbers (e.g. `42`, `-1`, `0.5`)
- Boolean `true`
- Any object (including arrays and functions)
- The value `Infinity`
- The value `-Infinity`


### Falsy values:

- The boolean `false`
- The value `null`
- The value `undefined`
- The number `0`
- The empty string (`''` or `""`)
- The value `NaN`


It's worth noting that when using a value in a boolean context, other values may be coerced to `true` or `false` depending on their type or value. However, the above list represents the values that are inherently truthy or falsy in JavaScript.

## Conclusion

In JavaScript, **truthy and falsy values** are values that evaluate to `true` or `false` in a boolean context. Understanding truthy and falsy values can help you write more concise and expressive code, especially when working with conditional statements like `if` and `switch`.