---
tag: "javascript"
slug: /javascript/object/object-prototype-propertyisenumerable
date: "2023-03-18"
title: Object.prototype.propertyIsEnumerable()
description: "The Object.prototype.propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable and is the object's own property."
category: "Object Methods"
order: 28
prevPath: /javascript/object/object-prototype-hasownproperty
# nextPath: /javascript/object/object-get-own-property-descriptors
githubPath: /javascript/ObjectMethods/28-PrototypePropertyIsEnumerable.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The `Object.prototype.propertyIsEnumerable()` method returns a Boolean indicating whether the specified property is enumerable and is the object's own property.

## How it works ?

The `Object.prototype.propertyIsEnumerable()` method checks if the given property name exists in the object and if it is enumerable. If the property exists and is enumerable, it returns true; otherwise, it returns false.

## Examples

a. Using `propertyIsEnumerable()` to check if a property is enumerable:

```js
const obj = { a: 1 };
console.log(obj.propertyIsEnumerable("a")); // true
console.log(obj.propertyIsEnumerable("toString")); // false
```

b. Inherited properties are not considered enumerable by `Object.prototype.propertyIsEnumerable()`:

```js
function Animal() {
  this.name = "animal";
}
Animal.prototype.age = 1;
const animal = new Animal();

console.log(animal.propertyIsEnumerable("name")); // true
console.log(animal.propertyIsEnumerable("age")); // false
```

## Detailed explanation

### Syntax

```js
obj.propertyIsEnumerable(prop);
```

- `obj`: The object to be checked.
- `prop`: A string representing the name of the property to check.

### Parameter

`prop`: The name of the property to check if it's enumerable.

### Return Value

A Boolean indicating whether the specified property is enumerable and is the object's own property.

### Limitations

The method only checks if the property is enumerable and is the object's own property. It does not check if the property exists in the object or if it is inherited.

### Common use cases:

To check if a given property is enumerable or not before performing some operation on it.

### Tips and tricks:

- If you want to check if a property exists in an object regardless of its enumerability, use the in operator.
- If the object has a property with the same name defined in its prototype chain, `Object.prototype.propertyIsEnumerable()` returns `false`.
- Use [Object.prototype.hasOwnProperty()](/javascript/object/object-prototype-hasownproperty/) to check if the property is an own property of the object before using `Object.prototype.propertyIsEnumerable()`.

### Ecmascript specification

This method is a standard method of the `Object.prototype` object in ECMAScript 1st edition and is supported by all modern web browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.propertyisenumerable" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.prototype.propertyIsEnumerable()`:

1. Use Object.prototype.propertyIsEnumerable() to check if a specific property is enumerable on an object.

<details>

<summary>Solution</summary>

```js
const person = { name: "John", age: 30 };
console.log(person.propertyIsEnumerable("name")); // true
console.log(person.propertyIsEnumerable("age")); // true
console.log(person.propertyIsEnumerable("toString")); // false
```

</details>

2. Create a function that takes an object and returns an array of all enumerable property names of the object.

<details>

<summary>Solution</summary>

```js
function getEnumerableProperties(obj) {
  const enumerableProps = [];
  for (let prop in obj) {
    if (obj.propertyIsEnumerable(prop)) {
      enumerableProps.push(prop);
    }
  }
  return enumerableProps;
}

const person = { name: "John", age: 30 };
console.log(getEnumerableProperties(person)); // ['name', 'age']
```

</details>

3. Use `Object.prototype.propertyIsEnumerable()` to check if an object has any enumerable properties.

<details>

<summary>Solution</summary>

```js
const person1 = { name: "John", age: 30 };
const person2 = {};
Object.defineProperty(person2, "name", {
  value: "Jane",
  enumerable: false,
});

console.log(Object.keys(person1).length > 0); // true
console.log(Object.keys(person2).length > 0); // false

console.log(person1.propertyIsEnumerable("name")); // true
console.log(person2.propertyIsEnumerable("name")); // false
```

</details>
