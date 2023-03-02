---
tag: "javascript"
slug: "/javascript/object/object-destructuring"
date: "2022-11-24"
title: Object Destructuring
description: Object destructuring is a shorthand syntax for extracting properties from objects and binding them to variables.
category: "Advanced Javascript Object"
order: 9
githubPath: /javascript/Object/ObjectDestructuring.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Object destructuring** in JavaScript is a way to extract values from an object and assign them to variables. It provides a convenient syntax for extracting values from nested objects and arrays as well.


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

The syntax for object destructuring in JavaScript is as follows:

```javascript
const { property1, property2, ...rest } = objectName;
```

In this syntax, `property1` and `property2` are the names of the properties that you want to extract from the `objectName` object. The `...rest` syntax is used to assign any remaining properties to a variable named rest.

### Examples

Here's an example of object destructuring in JavaScript:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, lastName, age } = person;

console.log(firstName); // output: "John"
console.log(lastName); // output: "Doe"
console.log(age); // output: 30
```

Here's an example of nested object destructuring:

```javascript
const person = {
  name: {
    first: "John",
    last: "Doe",
  },
  age: 30,
};

const {
  name: { first, last },
  age,
} = person;

console.log(first); // output: "John"
console.log(last); // output: "Doe"
console.log(age); // output: 30
```

## Uses cases with examples:

Object destructuring is useful in many scenarios where you want to extract values from an object and assign them to variables. Here are a few examples:

### Function Parameters

Object destructuring is often used in function parameters to extract values from an object. For example:

```javascript
function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person = {
  name: "John",
  age: 30,
};

greet(person); // output: "Hello, John. You are 30 years old."
```

### Renaming Variables

Object destructuring can be used to rename variables when extracting values from an object. For example:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName: first, lastName: last, age } = person;

console.log(first); // output: "John"
console.log(last); // output: "Doe"
console.log(age); // output: 30
```

### Default Values

Object destructuring can be used to provide default values for properties that may not exist on an object. For example:

```javascript
const person = {
  firstName: "John",
  age: 30,
};

const { firstName, lastName = "Doe", age } = person;

console.log(firstName); // output: "John"
```

## Notes:

- Object destructuring can be a powerful tool for working with objects in JavaScript, making it easy to extract values and work with nested objects and arrays.
- It's important to note that object destructuring only works with objects and not with arrays.
- When using object destructuring in function parameters, you can provide default values for properties using the `=` syntax.
- Object destructuring can be used to rename variables when extracting values from an object, which can make your code more readable and concise.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/ObjectDestructuring.md}" target="_blank">Edit this page on Github</a>
