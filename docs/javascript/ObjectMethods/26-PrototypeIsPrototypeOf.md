---
tag: "javascript"
slug: /javascript/object/object-prototype-isprototypeof
date: "2023-03-18"
title: Object.prototype.isPrototypeOf()
description: "The Object.prototype.isPrototypeOf() method is used to determine if an object exists in the prototype chain of another object. This method is available on the Object.prototype object and can be called on any object."
category: "Object Methods"
order: 26
prevPath: /javascript/object/object-prototype-tolocalestring
nextPath: /javascript/object/object-prototype-hasownproperty
githubPath: /javascript/ObjectMethods/26-PrototypeIsPrototypeOf.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The `Object.prototype.isPrototypeOf()` method is used to determine if an object exists in the prototype chain of another object. This method is available on the Object.prototype object and can be called on any object.


## How it works ?

The `Object.prototype.isPrototypeOf()` method checks whether the prototype property of the specified object exists in the prototype chain of another object. If the prototype property is found in the chain, the method returns `true`; otherwise, it returns `false`.


## Examples

a. Checking if an object is in the prototype chain of another object:

```js
const animal = { eats: true };
const dog = { barks: true };
const puppy = Object.create(dog);

console.log(animal.isPrototypeOf(puppy)); // false
console.log(dog.isPrototypeOf(puppy)); // true
console.log(Object.prototype.isPrototypeOf(puppy)); // true
```

In the above example, `animal` and `dog` are two objects, and puppy is an object that is created using the [Object.create()](/javascript/object/object-create/) method with `dog` as its prototype. We use the `Object.prototype.isPrototypeOf()` method to check if `animal` and `dog` exist in the prototype chain of `puppy`.

b. Checking if an object is in the prototype chain of a custom object:

```js
function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
const puppy = new Dog();

console.log(Animal.prototype.isPrototypeOf(puppy)); // true
console.log(Dog.prototype.isPrototypeOf(puppy)); // true
console.log(Object.prototype.isPrototypeOf(puppy)); // true
```
## Detailed explanation

### Syntax

```js
Object.prototype.isPrototypeOf(obj)
```
The `Object.prototype.isPrototypeOf()` method is called on an object that exists in the prototype chain of another object, and the method takes a single parameter obj, which is the object whose prototype chain we want to check.

### Parameter

`obj`: The object whose prototype chain is to be checked. This is a mandatory parameter.

### Return Value


The `Object.prototype.isPrototypeOf()` method returns a boolean value. If the prototype property of the specified object exists in the prototype chain of another object, the method returns `true`; otherwise, it returns `false`.

### Limitations

The `Object.prototype.isPrototypeOf()` method can only be called on objects. It cannot be called on `null` or `undefined` values.

This method only checks if the calling object exists in the prototype chain of the specified object. It does not check if the specified object is an instance of the calling object.

### Common use cases:

Some common use cases of `Object.prototype.isPrototypeOf()` are:

- Checking if an object is an instance of a particular constructor function.
- Checking if an object inherits properties and methods from another object.

### Tips and tricks:

- Use `Object.prototype.isPrototypeOf()` to check if an object exists in another object's prototype chain.
- Do not use `Object.prototype.isPrototypeOf()` to check if an object is an instance of a constructor function. Use the instanceof operator instead.
- `Object.prototype.isPrototypeOf()` is similar to the instanceof operator, but the instanceof operator checks if an object is an instance of a constructor function while `Object.prototype.isPrototypeOf()` checks if an object exists in another object's prototype chain.

### Ecmascript specification


See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.isprototypeof" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

All modern browsers support `Object.prototype.isPrototypeOf()`.

## Exercises


1. Create a constructor function `Person` with properties `name` and `age`. Create a new object `john` with `Person` constructor and add a method `sayHello()`. Check if `john` is an instance of `Person` using `Object.prototype.isPrototypeOf()`.

<details>

<summary>Solution</summary>

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const john = new Person("John", 30);

console.log(Person.prototype.isPrototypeOf(john)); // true
```

</details>

2. Create a new object `obj` and assign it a prototype using [Object.create()](/javascript/object/object-create/). Check if `Object.prototype` is in the prototype chain of obj using `Object.prototype.isPrototypeOf()`.

<details>

<summary>Solution</summary>

```js
const obj = Object.create({ prop: "value" });

console.log(Object.prototype.isPrototypeOf(obj)); // true
```

</details>

3. Check if an object `myObj` is an instance of a custom constructor function `MyConstructor` using `Object.prototype.isPrototypeOf()`.

<details>

<summary>Solution</summary>

```js
function MyConstructor() {
  this.prop = "value";
}

const myObj = new MyConstructor();

console.log(MyConstructor.prototype.isPrototypeOf(myObj)); // true
```

</details>