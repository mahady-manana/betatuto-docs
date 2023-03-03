---
tag: "javascript"
slug: "/javascript/data-types"
date: "2022-11-24"
title: "JavaScript Data Types"
description: "In JavaScript, there are several primitive data types and one non-primitive data type: String, Number, Boolean, Null, Undefined, Symbol, Object."
category: "Get Started"
order: 3
prevPath: /javascript/variables
nextPath: /javascript/operators
githubPath: /javascript/GetStarted/DataTypes.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

In JavaScript, there are several primitive data types and one non-primitive data type.


## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 4
class-name: "table-of-contents"
```

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

## Non-Primitive Data Type in JavaScript

### Object Types

#### 1. **Object**

**Objects** are used to store collections of data and more complex entities. They are declared using curly braces `({})` and can contain key-value pairs.

```javascript
let person = {
  name: "John",
  age: 25,
  isStudent: true,
  favoriteFood: null,
}; // Object
```

#### 2. **Array**

**Arrays** are a type of object used to store ordered collections of data. They are declared using square brackets ([]) and can contain any combination of primitive data types, objects, and even other arrays.

```javascript
let colors = ['red', 'green', 'blue']; // Array
```

#### 3. **Function**

**Functions** are a type of object that can be invoked and used to perform specific tasks or calculations. They are declared using the function keyword and can accept arguments and return values.

```javascript
function addNumbers(num1, num2) {
  return num1 + num2;
} // Function
```
