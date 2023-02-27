---
tag: "javascript"
slug: "/javascript/classes"
date: "2023-02-27"
title: JavaScript Classes
description: Classes are a blueprint for creating objects in JavaScript that allow for defining properties and methods that the objects can have.."
category: "Get Started"
order: 7
githubPath: /javascript/GetStarted/Classes.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**JavaScript classes** were introduced in ECMAScript 2015 (ES6) as a new syntax for creating objects and dealing with inheritance. Classes are syntactical sugar for the prototypal inheritance model used in JavaScript.

A class is a blueprint for creating objects. It encapsulates data and behavior into a single unit. An instance of a class is an object that has the properties and methods defined by the class.

## Defining a Class

You can define a class using the `class` keyword, followed by the name of the class. The class can have a constructor method and other methods defined inside it.

Here's an example of a class definition:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}
```

## Creating Objects from a Class

To create an object from a class, you use the `new` keyword, followed by the name of the class and any arguments required by the constructor.

```javascript
const myRectangle = new Rectangle(10, 20);
```

## Inheritance

Classes can also inherit from other classes using the extends keyword. When a class extends another class, it inherits all the properties and methods of the parent class.

```javascript
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
```

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/Classes.md" target="_blank">This is incomplete - Edit this page on Github</a>
