---
tag: "javascript"
slug: "/javascript/classes"
date: "2023-02-27"
updatedAt: "2023-03-22"
title: JavaScript Classes
description: "Classes are a blueprint for creating objects in JavaScript that allow for defining properties and methods that the objects can have."
category: "Get Started"
order: 7.5
prevPath: /javascript/function
nextPath: /javascript/js-array
githubPath: /javascript/GetStarted/Classes.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**JavaScript classes** were introduced in ECMAScript 2015 (ES6) as a new syntax for creating objects and dealing with inheritance. Classes are syntactical sugar for the prototypal inheritance model used in JavaScript.

A class is a blueprint for creating objects. It encapsulates data and behavior into a single unit. An instance of a class is an object that has the properties and methods defined by the class.

## How it works?

JavaScript classes are based on the prototype model, which means that objects are created from a blueprint or template that defines their properties and methods. Classes are defined using the `class` keyword, and can have **constructors**, **methods**, and **properties**.


## Examples

Let's take a look at a simple example of a JavaScript class:


```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('Alice', 30);
person.sayHello(); // Output: "Hello, my name is Alice and I am 30 years old."
```
In this example, we define a `Person` class with a constructor that takes a `name` and an `age` parameter, and sets them as properties of the object. We also define a `sayHello` method that logs a greeting message to the console.

We then create a new `Person` object and call the `sayHello` method on it.

## Detailed explanation

### Syntax

You can define a class using the `class` keyword, followed by the name of the class. The class can have a constructor method and other methods defined inside it.


```javascript
class ClassName {
  constructor(parameter1, parameter2, ...) {
    // constructor code
  }

  methodName1(parameter1, parameter2, ...) {
    // method code
  }

  methodName2(parameter1, parameter2, ...) {
    // method code
  }

  // more methods...
}
```

The `class` keyword is used to define a new class, followed by the class name. The constructor method is a special method that is called when a new object is created from the class. It takes one or more parameters, which are used to set the initial state of the object.

Methods are defined using the same syntax as regular functions, and can take parameters and return values.


### Parameters

JavaScript classes can have constructors that take one or more parameters, which are used to set the initial state of the object. Additionally, methods can also take parameters.

For example:

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area()); // Output: 50
```

In this example, the `Rectangle` class takes two parameters (`width` and `height`) in its constructor. The area method does not take any parameters, but uses the `width` and `height` properties to calculate and return the area of the rectangle.


### Return values for Class Methods

Methods in **JavaScript classes** can return values using the `return` keyword. The type and format of the return value can be any valid JavaScript value, including objects, arrays, and functions.

For example:

```js
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }
}

const counter = new Counter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
```

In this example, the `Counter` class has an initial `count` value of 0, and two methods that increment and decrement the `count` value by 1 and return the new value.

### `super`  

The `super` keyword is used to refer to the parent class of a derived class. This allows the derived class to call methods and access properties defined in the parent class. The `super` keyword is often used in constructors of derived classes to initialize the properties inherited from the parent class.

Here's an example:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the parent constructor with super
  }

  speak() {
    console.log(`${this.name} barks.`);
    super.speak(); // call the parent method with super
  }
}

let dog = new Dog('Rex');
dog.speak(); // output: "Rex barks." and "Rex makes a noise."
```

In this example, we have a `Dog` class that extends the `Animal` class. The `Dog` class calls the parent constructor with `super(name)` to initialize the `name` property inherited from the `Animal` class. The `Dog` class also overrides the `speak()` method of the `Animal` class and calls the parent method with `super.speak()` to output the default message of the Animal class before the custom message of the Dog class.

### `extends`

The `extends` keyword in JavaScript is used to create a subclass that inherits the properties and methods of a superclass. The `extends` keyword is used in class declarations to specify the superclass that the derived class extends.

Here's an example:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex');
dog.bark(); // output: "Rex barks."
dog.speak(); // output: "Rex makes a noise."
```

### Exceptions

JavaScript classes can throw and catch exceptions using the `try`, `catch`, and `finally` keywords. This allows you to handle errors and unexpected behavior in a controlled way.

For example:

```js
class Calculator {
  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
  }
}

const calculator = new Calculator();
try {
  console.log(calculator.divide(10, 0)); // Output: Error: Cannot divide by zero
} catch (error) {
  console.error(error);
}
```

In this example, the `Calculator` class has a divide method that checks if the second parameter is zero and throws an error if it is. We then use a try and catch block to handle the error and log an error message to the console.

### Limitations

JavaScript classes can be less performant than other object-oriented programming languages, due to the dynamic nature of the language and the use of prototypes.

### Notes

JavaScript classes can inherit properties and methods from other classes using the `extends` keyword. This allows you to create a hierarchy of classes that share common functionality.

### Tips and tricks

JavaScript classes are commonly used to encapsulate related functionality and data, and to create reusable code. They can be used to create complex applications, libraries, and frameworks, and to provide a consistent API for interacting with different parts of the codebase.

When writing JavaScript classes, it's important to follow best practices to ensure that the code is maintainable, reusable, and easy to understand. Some best practices include:

- Using descriptive and consistent naming conventions for classes, methods, and properties.
- Keeping classes and methods small and focused on a single responsibility.
- Using comments and documentation to explain the purpose and functionality of the code.
- Ensuring that classes are testable and have a clear API for interacting with other parts of the codebase.
- Avoiding the use of global variables and side effects.

Some tips and tricks for working with JavaScript classes include:

- Using the `super` keyword to call methods in the parent class.
- Using static properties and methods to define behavior that is shared across all instances of a class.