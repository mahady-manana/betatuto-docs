---
tag: "javascript"
slug: "/javascript/data-types"
date: "2022-11-24"
updatedAt: "2023-03-14"
title: "JavaScript Data Types"
description: "Data types in programming languages define the types of values that can be used in a program. In JavaScript, data types are used to specify the type of value that a variable can hold."
category: "Get Started"
order: 3
prevPath: /javascript/variables
nextPath: /javascript/operators
githubPath: /javascript/GetStarted/DataTypes.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**Data types** in programming languages define the types of values that can be used in a program. In JavaScript, data types are used to specify the type of value that a variable can hold.

In JavaScript, there are several primitive data types and non-primitive data type. It's important to note that JavaScript is a dynamically typed language, meaning that variables can change their data type during the execution of a program.

## Primitive Data Types in JavaScript

### String

**Strings** are used to represent textual data. They can be declared using single quotes `(')` or double quotes `(")`.

```javascript
const website = "BE-DEV - Betatuto Developers Community"; // String
```

### Number

**Numbers** are used to represent numerical data. They can be integers or floating-point numbers.

```javascript
const age = 26; // Number
const age = 100.0005; // Number
```

### Boolean

**Boolean** values represent `true/false` values.

```javascript
const isHeLearn = true; // Boolean
const isFinished = false; // Boolean
```

### Undefined

The **undefined** data type represents a value that is not yet defined.

```javascript
let whatIsIt; // Undefined
```

### Null

The **null** data type represents a deliberate non-value or absence of any object value.

```javascript
const hiddenTresor = null; // Null
```

### Symbol

The **symbol** data type represents a unique identifier that can be used as the key of an object property.

```javascript
let id = Symbol("id"); // Symbol
```

## Non-Primitive Data Type or Complex data types in JavaScript

### Object

[**Objects**](/javascript/js-object) are used to store collections of data and more complex entities. They are declared using curly braces `({})` and can contain key-value pairs.

```javascript
let person = {
  name: "John",
  age: 25,
  isStudent: true,
  favoriteFood: null,
}; // Object
```

### Array

[**Arrays**](/javascript/js-array) are a type of object used to store ordered collections of data. They are declared using square brackets ([]) and can contain any combination of primitive data types, objects, and even other arrays.

```javascript
let colors = ["red", "green", "blue"]; // Array
```

### Function

[**Functions**](/javascript/function) are a type of object that can be invoked and used to perform specific tasks or calculations. They are declared using the function keyword and can accept arguments and return values.

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
} // Function
```

### Date

Used to represent dates and times.

A [**Date**](/javascript/dates) object represents a single moment in time. It allows you to work with dates (year, month, day, hour, minute, second, and millisecond) and perform various operations on them.

```js
const now = new Date(); // creates a Date object with the current date and time
console.log(now.getFullYear()); // returns the current year
console.log(now.getMonth()); // returns the current month (0-indexed)
console.log(now.getDate()); // returns the current day of the month
```

### RegExp

Used to represent regular expressions.

A **RegExp** object represents a regular expression, which is a pattern used to match character combinations in strings. Regular expressions can be used to validate input, search for patterns, and replace text.

```js
const pattern = /[a-z]+/g; // creates a regular expression that matches one or more lowercase letters
const text = 'Hello World';
console.log(text.match(pattern)); // returns ['ello', 'orld']
```

### Map

A type of object used to store collections of data as key-value pairs with more flexibility and functionality compared to the basic Object type.

A [**Map**](/javascript/maps) object is a collection of key-value pairs, where each key can be of any type. Unlike objects, maps can have keys of any type, including objects and functions. Maps are iterable, which means you can use them in loops and other iterator contexts.

```js
const map = new Map();
const key1 = 'name';
const key2 = { id: 1 };
map.set(key1, 'John');
map.set(key2, { firstName: 'John', lastName: 'Doe' });
console.log(map.get(key1)); // returns 'John'
console.log(map.get(key2)); // returns { firstName: 'John', lastName: 'Doe' }
```

### Set

A type of object used to store unique collections of data.

A [**Set**](/javascript/sets) object is a collection of unique values, where each value can be of any type. Sets can be used to remove duplicates from arrays, perform set operations (union, intersection, difference), and more. Sets are iterable, which means you can use them in loops and other iterator contexts.

```js
const set = new Set();
set.add('apple');
set.add('banana');
set.add('apple'); // this will not add a duplicate value
console.log(set.size); // returns 2
console.log(set.has('banana')); // returns true
```
