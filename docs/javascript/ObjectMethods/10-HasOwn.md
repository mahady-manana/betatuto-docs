---
tag: "javascript"
slug: "/javascript/object/object-has-own"
date: "2023-03-15"
title: Object.hasOwn()
description: "Object.hasOwn() is a method that allows you to check whether an object has a property with a specific name. It returns a boolean value indicating whether the object has the specified property as its own property rather than inherited from its prototype chain."
category: "Object Methods"
order: 10
prevPath: /javascript/object/object-seal
nextPath: /javascript/object/object-is-frozen
githubPath: /javascript/ObjectMethods/10-HasOwn.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**Object.hasOwn()** is a method that allows you to check whether an object has a property with a specific name. It returns a boolean value indicating whether the object has the specified property as its own property rather than inherited from its prototype chain.

When you use in operator to check if an object has a property, it checks for both own property and prototype chain. But sometimes, you only want to check for a property that belongs to the object directly and not its prototype. That's where `Object.hasOwn()` comes in handy.


## Syntax

```javascript
Object.hasOwn(obj, prop);
```

### Parameter

- `obj`: The object to check for the property.

- `prop`: The name of the property to check for.

### Return Value

`Object.hasOwn()` returns `true` if the object has the specified property as its own property, `false` otherwise.

### Examples

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.hasOwn(person, "name"); // true
Object.hasOwn(person, "toString"); // false
```

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const john = new Person("John", 30);

Object.hasOwn(john, "name"); // true
Object.hasOwn(john, "toString"); // false
```

```javascript
const obj = Object.create({ prop: "inherited property" });
obj.ownProp = "own property";

Object.hasOwn(obj, "ownProp"); // true
Object.hasOwn(obj, "prop"); // false
```

## Ecmascript specification

`Object.hasOwn()` was introduced in ECMAScript 2017 and is supported by modern browsers and Node.js versions.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.hasown" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Notes

- `Object.hasOwn()` is a built-in method in JavaScript that returns a boolean indicating whether an object has the specified property as a direct property of the object and not inherited from the object's prototype chain.

- The method takes two parameters, the object and the property name.

- The method is similar to `Object.prototype.hasOwnProperty()`, but with a slightly different syntax.

- It's important to note that `Object.hasOwn()` only checks for direct properties on the object itself and not inherited properties. If you need to check for inherited properties as well, you should use `Object.hasOwnProperty()`.

- When using `Object.hasOwn()`, the property name must be a string or a symbol. If it's any other data type, the method will return false.

- It's also worth noting that `Object.hasOwn()` does not throw an error if the object parameter is null or undefined, unlike Object.hasOwnProperty().

In general, it's a good practice to use `Object.hasOwnProperty()` instead of `Object.hasOwn()` unless you specifically need to check for direct properties only.

## Exercises

1. Write a function `countOwnProps(obj)` that takes an object as an argument and returns the number of its own properties.

<details>

<summary>Solution</summary>

```js
function countOwnProps(obj) {
  let count = 0;
  for (let prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      count++;
    }
  }
  return count;
}

const person = {
  name: 'John',
  age: 30
};

countOwnProps(person); // 2
```

</details>
