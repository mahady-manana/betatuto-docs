---
tag: "javascript"
slug: "/javascript/control-flow"
date: "2022-11-24"
updatedAt: "2023-04-07"
title: JavaScript Control Flow
description: In JavaScript, control flow refers to the order in which statements and expressions are executed within a program."
category: "Get Started"
order: 6
prevPath: /javascript/scopes
nextPath: /javascript/function
githubPath: /javascript/GetStarted/06-ControlFlow.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Control flow** in JavaScript allows you to control the sequence and frequency of statement execution in a program based on certain conditions. By using control flow statements, you can order your code execution in JavaScript.

## Conditional Statements

**Conditional statements** are an essential part of programming, and JavaScript provides several ways to implement them. They allow you to execute different blocks of code based on certain conditions. The most commonly used conditional statements in JavaScript are the `if` statement, `else` statement, `else if` statement and `switch` statement.

### `if` statement

The **if statement** is a conditional statement in JavaScript that is used to execute a block of code if a specific condition is true. Here's a breakdown of how the if statement works:

#### Syntax

```js
if (condition) {
  // code to be executed if condition is true
}
```

- The `if` keyword is followed by parentheses `()`, which contain the condition to be evaluated.
- If the condition is `true`, the code within the curly braces `{}` is executed.
- If the condition is `false`, the code within the curly braces `{}` is skipped.

#### Examples

For example, let's say we want to check if a number is greater than 10. We can use the if statement to execute a block of code if the condition is true:

```javascript
let num = 12;
if (num > 10) {
  console.log("The number is greater than 10.");
}
```

In this example, the condition `num > 10` is `true` because `num` is assigned the value of 12. Therefore, the console will output `"The number is greater than 10."`.

```js
let num = 7;
if (num > 10) {
  console.log("The number is greater than 10.");
}
```
In this example, the condition `num > 10` is `false` because num is assigned the value of 7. Therefore, the console will output nothing because the code within the curly braces `{}` is skipped.

You can also use logical operators such as `&&` (and) and `||` (or) within the condition to test multiple conditions:

```js
let num = 12;
let str = "hello";
if (num > 10 && str === "hello") {
  console.log("The number is greater than 10 and the string is 'hello'.");
}
```
In this example, both conditions (`num > 10` and `str === "hello"`) must be true in order for the code within the curly braces `{}` to be executed.


### `else` statement

In JavaScript, the **else statement** is used in conjunction with the `if` statement to execute a block of code `if` the condition in the `if` statement is `false`. Here's a breakdown of how the else statement works:

#### Syntax

```js
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

- The `if` keyword is followed by parentheses `()`, which contain the condition to be evaluated.
- If the condition is `true`, the code within the first set of curly braces `{}` is executed.
- If the condition is `false`, the code within the second set of curly braces `{}` after the `else` keyword is executed.

#### Example

For example, let's say we want to check if a number is greater than 10, and if it is not, we want to output a message. We can use the `else` statement to execute a block of code if the condition in the `if` statement is false:

```js
let num = 7;
if (num > 10) {
  console.log("The number is greater than 10.");
} else {
  console.log("The number is not greater than 10.");
}
```

In this example, the condition `num > 10` is `false` because `num` is assigned the value of 7. Therefore, the console will output `"The number is not greater than 10."` because the code within the second set of curly braces {} after the else keyword is executed.

### `else...if` statement

The `else if` statement in JavaScript is used in conjunction with `if` and `else` statements to provide additional conditions to be evaluated. It allows for a program to check multiple conditions and execute different blocks of code depending on which condition is met.

#### Syntax
The syntax for the `else if` statement is as follows:

```js
if (condition1) {
  // code block to be executed if condition1 is true
} else if (condition2) {
  // code block to be executed if condition2 is true
} else {
  // code block to be executed if none of the conditions are true
}
```

In this structure, the `if` statement is evaluated first. If its condition is `true`, the corresponding code block is executed. If the condition is `false`, the `else if` statement is evaluated next. If its condition is `true`, the corresponding code block is executed. This process continues until a condition is found to be `true` or until the final `else` statement is reached, in which case the final code block is executed.

The `else if` statement can be used in a variety of scenarios, such as checking for multiple user inputs, handling different edge cases, or providing different responses based on varying inputs. It allows for more complex decision-making in a program and is a powerful tool in JavaScript.

#### Example

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

The **switch statement** in JavaScript is used to perform different actions based on different conditions. It provides a more concise way of writing multiple `if...else` statements when a single expression is evaluated against multiple values.

#### Syntax

The syntax for the `switch` statement is as follows:

```js
switch(expression) {
  case value1:
    // code to be executed if expression matches value1
    break;
  case value2:
    // code to be executed if expression matches value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
```
In this structure, the `expression` is evaluated once and then compared to each `case` value. If there is a match, the corresponding code block is executed. If none of the `case` values match, the default block is executed.

It is important to note that each code block in the `switch` statement is followed by a `break` statement, which is used to prevent the code from executing the next code block. If a break statement is omitted, the execution will continue into the next code block, which can lead to unexpected behavior.

The `switch` statement can be useful in a variety of scenarios, such as checking for different user inputs or handling different edge cases. It can also make code more readable and concise when compared to multiple if...else statements. However, it is important to use it appropriately and ensure that each case is properly separated with a `break` statement.

#### Example

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

**Loop statements** in JavaScript are used to execute a block of code repeatedly. These statements allow you to iterate over a set of values, perform an operation on each value, and exit the loop when a certain condition is met. There are four types of loop statements in JavaScript: `while` loop, `do...while` loop, `for` loop, `for...of` loop and `for...in` loop.

### `while` Loop

The **while loop** in JavaScript is a control flow statement that allows you to execute a block of code repeatedly while a specified condition is true. The condition is evaluated before each iteration of the loop, and if the condition is true, the code block is executed. If the condition is false, the loop terminates and control is passed to the next statement after the loop.

#### Syntax

The basic syntax for a` while` loop is as follows:

```js
while (condition) {
  // code block to be executed
}
```
The condition in the parentheses is evaluated before each iteration of the loop. If the condition is `true`, the code block inside the curly braces is executed. This process continues until the condition becomes `false`.

#### Example

Here is an example of a while loop that counts from 1 to 5:



```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

In this example, the loop starts with `i` equal to 1. The condition `i <= 5` is `true`, so the code block is executed, which logs the value of `i` to the console. The value of `i` is then incremented by `1` using the `i++` operator. This process continues until the value of `i` is 6, at which point the condition becomes `false` and the loop terminates.

The `while` loop is useful when you don't know the exact number of iterations needed to complete a task. However, you need to be careful to avoid infinite loops, where the condition is always true and the loop never terminates.

### `do...while` Loop

The **do...while loop** in JavaScript is similar to the `while` loop, but with one important difference: the code block is executed at least once before the condition is checked. This means that the code block will always run at least once, even if the condition is initially false.

#### Syntax

The basic syntax for a `do...while` loop is as follows:

```js
do {
  // code block to be executed
} while (condition);
```
The code block inside the curly braces is executed first, and then the condition in the parentheses is evaluated. If the condition is true, the code block is executed again. If the condition is false, the loop terminates and control is passed to the next statement after the loop.



#### Example

Here is an example of a `do...while` loop that asks the user to enter a number between 1 and 10:

```javascript
let num;
do {
  num = prompt("Enter a number between 1 and 10:");
} while (num < 1 || num > 10);

console.log("You entered: " + num);
```
In this example, the `do` block prompts the user to enter a number, and the value is stored in the num variable. The `while` condition checks whether `num` is less than 1 or greater than 10. If the condition is `true`, the loop continues and the user is prompted again. If the condition is `false`, the loop terminates and the value of num is logged to the console.

The `do...while` loop is useful when you need to execute a code block at least once, even if the condition is false. However, you should still be careful to avoid infinite loops, where the condition is always true and the loop never terminates

### `for` Loop

The **for loop** in JavaScript is used to execute a block of code repeatedly for a specific number of times. It consists of three optional statements - initialization, condition, and final-expression - and a statement to be executed repeatedly. The initialization statement is executed only once before the loop starts. The condition statement is checked before each iteration, and if it evaluates to true, the loop continues to execute. The final-expression is executed at the end of each iteration.

Here's an example of using the for loop:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
This code will output the numbers from 0 to 4, as the loop will execute 5 times (i.e., when `i` is 0, 1, 2, 3, and 4).

### `for...in` Loop

The **`for...in` loop** is used to iterate over the properties of an object.

Example:

```javascript
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### `for...of` Loop

The **`for...of` loop**  is used to iterate over iterable objects such as arrays, strings, and maps.

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
