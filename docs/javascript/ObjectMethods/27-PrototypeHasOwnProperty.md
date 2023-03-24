---
tag: "javascript"
slug: /javascript/object/object-prototype-hasownproperty
date: "2023-03-18"
title: Object.prototype.hasOwnProperty()
description: "Object.prototype.hasOwnProperty() is a method in JavaScript that returns a boolean indicating whether the specified object has the property with the specified name as a direct property of that object, instead of inherited from its prototype chain."
category: "Object Methods"
order: 27
prevPath: /javascript/object/object-prototype-isprototypeof
nextPath: /javascript/object/object-prototype-propertyisenumerable
githubPath: /javascript/ObjectMethods/27-PrototypeHasOwnProperty.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Object.prototype.hasOwnProperty()** is a method in JavaScript that returns a boolean indicating whether the specified object has the property with the specified name as a direct property of that object, instead of inherited from its prototype chain.

## How it works ?

`Object.prototype.hasOwnProperty()` works by accepting a single parameter, the property name, and checking if the specified object has the property with the given name. If the property exists as a direct property of the object, the method returns true, else it returns false. It does not check for properties that are inherited from the object's prototype chain.

## Examples

a. Checking if an object has a property:

```js
const obj = { x: 1, y: 2 };
console.log(obj.hasOwnProperty("x")); // true
console.log(obj.hasOwnProperty("toString")); // false
```

In the above example, we have an object `obj` with two properties `x` and `y`. We use the `hasOwnProperty()` method to check if the object has a property named `x`. Since `x` is a direct property of the object, the method returns `true`. Similarly, we also check for the `toString` property, which is inherited from the object's prototype chain, and hence the method returns `false`.

## Detailed explanation

### Syntax

The syntax for `Object.prototype.hasOwnProperty()` is as follows:

```js
object.hasOwnProperty(property);
```

Here, `object` is the object that needs to be checked for the property, and `property` is the name of the property to be checked.

### Parameter

The method accepts a single parameter, `property`, which is the name of the property to be checked.

### Return Value

The method returns a boolean value indicating whether the specified object has the property with the specified name as a direct property of that object (`true`), or not (`false`).

### Limitations

The `Object.prototype.hasOwnProperty()` method does not check for properties that are inherited from the object's prototype chain.

### Common use cases:

The `Object.prototype.hasOwnProperty()` method is commonly used to check if an object has a property before accessing or modifying it.

### Tips and tricks:

- It is recommended to always use the `Object.prototype.hasOwnProperty()` method while checking for object properties, as it helps avoid accidental access or modification of inherited properties.
- To check for properties in the prototype chain as well, use the in operator instead of `Object.prototype.hasOwnProperty()`.
- To check for the existence of a property in an object, even if it is inherited, you can use the [Object.prototype.propertyIsEnumerable()](/javascript/object/object-prototype-properyisenumerable) method.
- The `Object.prototype.hasOwnProperty()` method can be used to avoid traversing properties in the prototype chain while iterating over the properties of an object using a `for...in` loop.

### Ecmascript specification

The `Object.prototype.hasOwnProperty()` method was introduced in ECMAScript 1st edition and has been a part of the language since then. It is supported in all major browsers and versions of JavaScript.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.prototype.hasownproperty" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Write a function `countProperties(obj)` that takes an object as an argument and returns the number of properties the object has.

<details>

<summary>Solution</summary>

```js
function countProperties(obj) {
  var count = 0;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
}

var person = {
  name: "John",
  age: 30,
  gender: "Male",
};

console.log(countProperties(person)); // Output: 3
```

In the solution above, we created a function `countProperties` that takes an object as an argument. We initialized a variable count to 0, then we loop through each property in the object using a `for...in` loop. We then check if the property belongs to the object using `obj.hasOwnProperty(prop)`. If it does, we increment the count variable. Finally, we return the count variable which represents the total number of properties that belong to the object.

We tested the `countProperties` function with an example object `person` and logged the result to the console. The output shows that the `person` object has three properties: `name`, `age`, and `gender`.

</details>

2. Write a function named `countOwnProperties` that takes an object as an argument and returns the number of own properties (not inherited properties) the object has. Use the `Object.prototype.hasOwnProperty()` method to check if the property is an own property.

<details>

<summary>Solution</summary>

```js
const car = {
  make: "Honda",
  model: "Accord",
  year: 2020,
};

const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

console.log(countOwnProperties(car)); // Output: 3
console.log(countOwnProperties(person)); // Output: 4
```

</details>
