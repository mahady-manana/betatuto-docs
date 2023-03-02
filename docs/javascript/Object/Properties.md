---
tag: "javascript"
slug: "/javascript/object/properties"
date: "2022-11-24"
title: Object Properties
description: "Object Properties are the values associated with an object, and can be accessed using the dot notation or bracket notation"
category: "Advanced Javascript Object"
order: 4
githubPath: /javascript/Object/Properties.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


## Overview.

In JavaScript, objects are a fundamental part of the language and are used to store data in key-value pairs. An **object's properties** are the values associated with a key, and can be accessed using the dot notation or bracket notation `[]`.



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

The syntax for accessing object properties is as follows:

```javascript
objectName.propertyName;
objectName["propertyName"];
```

### Parameter

The parameter for accessing object properties is the name of the property that you want to access. It can be a string or a variable that holds a string value.

### Examples

Let's take a look at some examples of how to access object properties:


```javascript
// Creating an object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

// Accessing object properties using dot notation
console.log(car.make); // Output: Toyota

// Accessing object properties using bracket notation
console.log(car["model"]); // Output: Camry
```

## Uses cases with examples

Retrieving and displaying data from an object:


```javascript
// Creating an object with employee details
const employee = {
  name: "John Doe",
  age: 30,
  designation: "Software Engineer",
  department: "IT"
};

// Displaying employee details
console.log(`Name: ${employee.name}`);
console.log(`Age: ${employee.age}`);
console.log(`Designation: ${employee.designation}`);
console.log(`Department: ${employee.department}`);
```
Dynamically accessing object properties using variables:

```javascript
// Creating an object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

// Creating a variable to hold the property name
const propertyName = "make";

// Accessing object properties using bracket notation and a variable
console.log(car[propertyName]); // Output: Toyota
```
## Notes

- **Object properties** can hold any type of data, including numbers, strings, booleans, arrays, and even other objects.
- If you try to access a property that does not exist, the value returned will be `undefined`.
- Object properties can be added, modified, or deleted using the dot notation or bracket notation.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/Properties.md}" target="_blank">Edit this page on Github</a>

