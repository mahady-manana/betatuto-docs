---
tag: "javascript"
slug: "/javascript/js-object"
date: "2022-11-24"
title: JavaScript Objects
description: In JavaScript, an object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any type of data.."
category: "Get Started"
order: 9
githubPath: /javascript/GetStarted/Object.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


## Overview.

In JavaScript, an **object** is a collection of properties, where each property is a key-value pair. The value of a property can be any JavaScript data type, including strings, numbers, booleans, functions, and other objects.

An object in JavaScript is a collection of related data and/or functionality, represented as key-value pairs. It provides a way to organize and structure code by grouping related variables and functions together.

Objects are commonly used to represent real-world entities such as people, products, or events, and can be used to store and manipulate data, as well as define behaviors and methods.

In JavaScript, objects are mutable and dynamic, meaning their properties can be modified and new properties can be added or removed at runtime. They can also be passed as arguments to functions, returned from functions, and used as prototypes to create new objects.

## Object Literals

One way to create an object in JavaScript is to use **object literals**. An object literal is a comma-separated list of key-value pairs, enclosed in curly braces `{}`.

Example:

```javascript
const person = { 
  name: "John", 
  age: 30, 
  city: "New York",
  getFullName: function() {
    return this.name + " Doe";
  }
};
```

## Accessing Object Properties

You can access the properties of an object using **dot notation** or **bracket notation**.

```javascript
console.log(person.name); // Output: "John"
console.log(person['age']); // Output: 30
console.log(person.getFullName()); // Output: "John Doe"
```

## Adding and Modifying Object Properties

You can add new properties to an object or modify existing properties using dot notation or bracket notation.


```javascript
person.email = "john.doe@example.com";
person['city'] = "Los Angeles";
console.log(person); 
// Output: { name: "John", age: 30, city: "Los Angeles", email: "john.doe@example.com", getFullName: [Function] }
```

## Deleting Object Properties

You can delete a property from an object using the `delete` keyword.


```javascript
delete person.city;
console.log(person); // Output: { name: "John", age: 30, email: "john.doe@example.com", getFullName: [Function] }
```

## Object Methods

An **object method** is a property that contains a function. You can call the function using dot notation.

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
  getFullName: function() {
    return this.name + " Doe";
  },
  greet: function() {
    console.log("Hello, my name is " + this.getFullName() + ".");
  }
};

person.greet(); // Output: "Hello, my name is John Doe."
```

## Object Constructors

An **object constructor** is a function that creates an object. You can use the new keyword to create a new instance of the object.


```javascript
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.getFullName = function() {
    return this.name + " Doe";
  }
}

const person1 = new Person("John", 30, "New York");
console.log(person1); // Output: Person { name: "John", age: 30, city: "New York", getFullName: [Function] }
```

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/Object.md" target="_blank">This page is incomplete - Edit this page on Github</a>

