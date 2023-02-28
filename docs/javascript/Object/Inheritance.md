---
tag: "javascript"
slug: "/javascript/object/inheritance"
date: "2022-11-24"
title: Inheritance
description: Inheritance is a mechanism for creating new objects that inherit properties and methods from existing objects.
category: "Advanced Javascript Object"
order: 20
githubPath: /javascript/Object/Inheritance.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


## Overview.

**Object inheritance** is a way to create new objects based on existing objects in JavaScript. It allows you to create new objects that inherit the properties and methods of existing objects, and to override and add new properties and methods.

## Syntax

The syntax for creating an object that inherits from another object in JavaScript is as follows:

```javascript
const childObject = Object.create(parentObject);
```
`parentObject` is the object that you want to inherit from, and `childObject` is the new object that you're creating.
## Parameter

The parameter for object inheritance is an existing object that you want to create a new object from.

### Examples:

Here's an example of object inheritance in JavaScript:

```javascript
const parentObject = {
  property1: "value1",
  property2: "value2",
  method1() {
    console.log("This is method1");
  },
  method2() {
    console.log("This is method2");
  }
};

const childObject = Object.create(parentObject);
```

Here's an example of overriding a method in an object that inherits from another object:

```javascript
const parentObject = {
  method() {
    console.log("This is the parent method");
  }
};

const childObject = Object.create(parentObject);

childObject.method = function() {
  console.log("This is the child method");
};
```

## Uses cases with examples:

Object inheritance is useful in many scenarios where you want to create new objects that share common properties and methods with existing objects. Here are a few examples:

### Inheriting from a Prototype

Object inheritance is commonly used in JavaScript to create new objects that inherit properties and methods from a prototype object. For example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
```


### Extending an Object

Object inheritance can also be used to extend an existing object with new properties and methods. For example:


```javascript
const parentObject = {
  property1: "value1",
  property2: "value2",
  method1() {
    console.log("This is method1");
  }
};

const childObject = Object.create(parentObject, {
  property3: {
    value: "value3"
  },
  method2: {
    value: function() {
      console.log("This is method2");
    }
  }
});
```

## Notes:

- Object inheritance is a powerful feature of JavaScript that allows you to create new objects based on existing objects, which can help reduce code duplication and simplify your codebase.
- In JavaScript, object inheritance is implemented using prototypes, which is a different approach from class-based inheritance in languages like Java or C++.
- When you create a new object that inherits from another object, the child object will have access to all of the properties and methods of the parent object, but it can also override and add new properties and methods.
- One common use case for object inheritance is to create new objects that share common properties and methods with existing objects, such as prototypes or base objects.
- Object inheritance can also be used to extend existing objects with new properties and methods, which can help you customize and adapt objects to your specific needs.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/Inheritance.md}" target="_blank">Edit this page on Github</a>

