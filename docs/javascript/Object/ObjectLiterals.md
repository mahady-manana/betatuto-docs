---
tag: "javascript"
slug: "/javascript/object/object-literals"
date: "2022-11-24"
title: Object Literals
description: Object literals are a shorthand notation for creating objects in JavaScript.
category: "Advanced Javascript Object"
order: 2
githubPath: /javascript/Object/ObjectLiterals.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

In JavaScript, an **object literal** is a way to define an object using a list of **key-value pairs**, enclosed in curly braces `{}`. Object literals are commonly used to represent complex data structures or entities in JavaScript.


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

The syntax for an object literal is as follows:

```javascript
const obj = {
  key1: value1,
  key2: value2,
  ...
};
```

Each key-value pair is separated by a comma. The `key` is always a string, and the `value` can be any valid JavaScript expression, including other objects, arrays, functions, and primitive values.

### Parameter

Object literals take in a list of key-value pairs, where the key is always a string and the value can be any valid JavaScript expression.

Here's an example of an object literal representing a person:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "running", "traveling"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
};
```

In this example, the object literal defines a person with a first name, last name, age, hobbies, and address. The hobbies property is an array of strings, and the address property is an object with its own set of properties.

## Use cases with examples

Object literals are commonly used in JavaScript for many different purposes, including:

### Storing configuration options:

```javascript
const config = {
  apiUrl: "https://example.com/api",
  maxItemsPerPage: 10,
  debug: true,
};
```

### Creating data models:

```javascript
const product = {
  id: 1,
  name: "Widget",
  price: 10.99,
  category: "Widgets",
};
```

### Grouping related functions:

```javascript
const utils = {
  formatDate(date) {
    // implementation here
  },
  formatCurrency(amount) {
    // implementation here
  },
  ...
};
```

### Defining options for a plugin or library:

```javascript
const myPlugin = {
  defaults: {
    color: "red",
    size: "medium",
    ...
  },
  init(options) {
    // implementation here
  },
  ...
};
```

## Notes

- **Object literals** are a convenient and flexible way to define objects in JavaScript.
- Object literals are often used in conjunction with other JavaScript features like destructuring and the spread operator.
- It's important to note that object literals are not the only way to create objects in JavaScript. Objects can also be created using [constructor functions](/javascript/object/object-constructors), the `new` keyword, and the `Object.create()` method, among others.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/ObjectLiterals.md}" target="_blank">Edit this page on Github</a>
