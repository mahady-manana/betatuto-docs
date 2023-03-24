---
tag: "javascript"
slug: "/javascript/object/object-set-prototype-of"
date: "2023-03-16"
title: Object.setPrototypeOf()
description: "Object.setPrototypeOf() is a method in JavaScript that allows you to set the prototype (i.e., the inheritance) of an object to another object. This method is often used in object-oriented programming to create hierarchies of objects with shared functionality."
category: "Object Methods"
order: 15
prevPath: /javascript/object/object-is-extensible
nextPath: /javascript/object/object-define-property
githubPath: /javascript/ObjectMethods/15-SetPrototypeOf.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.setPrototypeOf()** is a method in JavaScript that allows you to set the prototype (i.e., the inheritance) of an object to another object. This method is often used in object-oriented programming to create inheritance hierarchies or overriding prototype methods.

<blockquote class="warn-alert">
 
 **WARNING**

`Object.setPrototypeOf()` is not recommended for use in performance-critical code, as it can have a significant impact on performance. Additionally, modifying the prototype of an object can have unintended consequences and should be done with caution.

</blockquote>

## How it works ?

The `Object.setPrototypeOf()` method takes two parameters: the object you want to set the prototype for, and the object that should become the new prototype. The new prototype can be an object or `null`.

When you call `Object.setPrototypeOf(obj, prototype)`, JavaScript sets the prototype of `obj` to `prototype`. If `prototype` is `null`, the object will not have any prototype and will not inherit any properties or methods.

If you set the prototype of an object to another object, any properties or methods defined on the prototype will become available on the object. If a property or method is not defined on the object itself, JavaScript will look for it on the prototype and any other prototypes in the prototype chain.

## Examples

Here are some simple examples of using `Object.setPrototypeOf()`:

**Example 1: Setting the prototype of an object to another object**

```js
const myObj = { a: 1 };

const myProto = { b: 2 };

Object.setPrototypeOf(myObj, myProto);

console.log(myObj.b); // 2
```

In this example, we create an object `myObj` with a property `a` set to `1`. We then create another object `myProto` with a property `b` set to `2`. We use `Object.setPrototypeOf()` to set the prototype of `myObj` to `myProto`. When we log `myObj`.`b`, we get `2` because `b` is defined on the prototype of `myObj`.

**More example**

```js
// Example 1
let person = {
  name: "John",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

let employee = {
  position: "Manager",
};

Object.setPrototypeOf(employee, person);
employee.greet(); // outputs "Hello, my name is undefined and I am undefined years old."

// Example 2
let animal = {
  makeSound() {
    console.log("The animal makes a sound.");
  },
};

let dog = {
  makeSound() {
    console.log("The dog barks.");
  },
};

Object.setPrototypeOf(dog, animal);
dog.makeSound(); // outputs "The dog barks."
```

In Example 1, we create a `person` object with a `greet` method and an `employee` object with a `position` property. We then set the prototype of `employee` to `person`, which means that `employee` inherits the `greet` method from person. However, when we call `employee.greet()`, the this keyword is not defined because the object doesn't have a `name` or `age` property.

In Example 2, we create an `animal` object with a `makeSound` method and a `dog` object with a `makeSound` method that overrides the animal's `makeSound` method. We then set the prototype of `dog` to `animal`, which means that `dog` inherits the `makeSound` method from `animal`.

## Detailed explanation

### Syntax

```javascript
Object.setPrototypeOf(obj, prototype);
```

The `obj` parameter is the object whose prototype is to be set. The `prototype` parameter is the new prototype object.

### Parameter

The `obj` and `prototype` parameters are both required. The `obj` parameter must be an object, and the `prototype` parameter must either be null or an object.

### Return Value

`Object.setPrototypeOf()` returns the modified object. If the object cannot be modified (e.g. if it is a built-in object), a `TypeError` is thrown.

### Exceptions

If the `obj` parameter is not an object, a `TypeError` is thrown. If the prototype parameter is not `null` or an object, a `TypeError` is thrown.

### Limitations

The `Object.isExtensible()` method only checks if an object is extensible or not. It does not check if a property can be added to an object.

### Tips and tricks

- `Object.setPrototypeOf()` should be used with caution because it can slow down the performance of the code. It is also not recommended to use it with built-in objects such as Array or Date because it can cause unexpected behavior.

- Some common use cases for `Object.setPrototypeOf()` include creating inheritance hierarchies and overriding prototype methods.

- When you modify the prototype of an object using `Object.setPrototypeOf()`, you are creating a prototype chain. This means that if a property or method is not found on the object itself, JavaScript will look for it on the object's prototype, and so on up the chain until it reaches the `Object.prototype` object.

### Ecmascript specification

Object.setPrototypeOf() is part of the ECMAScript 6 (ES6) specification, which was finalized in 2015. It is supported by all modern browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.setprototypeof" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Create a `Person` object with a name property and a `sayHello` method. Then, create a `Student` object that inherits from `Person` and has a major property. Use `Object.setPrototypeOf()` to set the prototype of `Student` to `Person`.

<details>

<summary>Solution</summary>

```js
// Define the Person object
let Person = {
  name: "John Doe",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Define the Student object
let Student = {
  major: "Computer Science",
};

// Set the prototype of Student to Person
Object.setPrototypeOf(Student, Person);

// Test the Student object
console.log(Student.name); // 'John Doe'
console.log(Student.major); // 'Computer Science'
Student.sayHello(); // 'Hello, my name is John Doe'
```

</details>

2. Create a `Vehicle` object with a start method and a stop method. Then, create a `Car` object that inherits from `Vehicle` and has a make property. Use `Object.setPrototypeOf()` to set the prototype of `Car` to `Vehicle`.

<details>

<summary>Solution</summary>

```js
// Define the Vehicle object
let Vehicle = {
  start: function () {
    console.log("Starting the vehicle...");
  },
  stop: function () {
    console.log("Stopping the vehicle...");
  },
};

// Define the Car object
let Car = {
  make: "Toyota",
};

// Set the prototype of Car to Vehicle
Object.setPrototypeOf(Car, Vehicle);

// Test the Car object
console.log(Car.make); // 'Toyota'
Car.start(); // 'Starting the vehicle...'
Car.stop(); // 'Stopping the vehicle...'
```

</details>

3. Create a `Shape` object with a `color` property and a `getArea` method. Then, create a `Square` object that inherits from `Shape` and has a `sideLength` property. Use `Object.setPrototypeOf()` to set the prototype of `Square` to `Shape`. Override the `getArea` method to return the area of the square.

<details>

<summary>Solution</summary>

```js
// Define the Shape object
let Shape = {
  color: "red",
  getArea: function () {
    console.log("This shape has no area.");
  },
};

// Define the Square object
let Square = {
  sideLength: 5,
  getArea: function () {
    return this.sideLength * this.sideLength;
  },
};

// Set the prototype of Square to Shape
Object.setPrototypeOf(Square, Shape);

// Test the Square object
console.log(Square.color); // 'red'
console.log(Square.sideLength); // 5
console.log(Square.getArea()); // 25
```

</details>
