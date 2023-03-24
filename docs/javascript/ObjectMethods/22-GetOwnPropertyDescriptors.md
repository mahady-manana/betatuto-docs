---
tag: "javascript"
slug: /javascript/object/object-get-own-property-descriptors
date: "2023-03-17"
title: Object.getOwnPropertyDescriptors()
description: "The Object.getOwnPropertyDescriptors() method is used to get all the own property descriptors of a given object. The method returns a new object containing all the property descriptors of the specified object, both enumerable and non-enumerable."
category: "Object Methods"
order: 22
prevPath: /javascript/object/object-get-own-property-descriptor
nextPath: /javascript/object/object-prototype-tostring
githubPath: /javascript/ObjectMethods/22-GetOwnPropertyDescriptors.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction
## How it works ?
## Examples

## Detailed explanation

### Syntax

### Parameter


### Return Value


### Exceptions


### Limitations


### Common use cases:


### Tips and tricks:


### Ecmascript specification


See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertydescriptors" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.getOwnPropertyDescriptor()`:

1. Write a function that copies all the property descriptors from one object to another.

<details>

<summary>Solution</summary>

```js
function copyPropertyDescriptors(source, target) {
  const descriptors = Object.getOwnPropertyDescriptors(source);
  Object.defineProperties(target, descriptors);
}

const source = {
  name: "John",
  age: 30,
};

const target = {};
copyPropertyDescriptors(source, target);

console.log(target.name); // "John"
console.log(target.age); // 30
```

</details>

2. Write a function that creates a new object with the same properties and property descriptors as another object.

<details>

<summary>Solution</summary>

```js
function cloneObjectWithDescriptors(obj) {
  const clonedObj = Object.create(Object.getPrototypeOf(obj));
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  Object.defineProperties(clonedObj, descriptors);
  return clonedObj;
}

const person = {
  name: "John",
  age: 30,
  get greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  },
};

const clonedPerson = cloneObjectWithDescriptors(person);
console.log(clonedPerson.greeting); // "Hello, my name is John and I am 30 years old"
```

</details>
