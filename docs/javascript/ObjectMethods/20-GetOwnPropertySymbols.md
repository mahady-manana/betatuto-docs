---
tag: "javascript"
slug: /javascript/object/object-get-own-property-symbols
date: "2023-03-17"
title: Object.getOwnPropertySymbols()
description: "The Object.getOwnPropertySymbols() method is a built-in method in JavaScript that returns an array of all symbol properties found directly on a given object."
category: "Object Methods"
order: 20
prevPath: /javascript/object/object-get-own-property-names
nextPath: /javascript/object/object-get-own-property-descriptor
githubPath: /javascript/ObjectMethods/20-GetOwnPropertySymbols.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Object.getOwnPropertySymbols()** method is a built-in method in JavaScript that returns an array of all symbol properties found directly on a given object. It was introduced in ECMAScript 2015 (ES6) and is commonly used in situations where non-enumerable properties need to be accessed.

## How it works ?

The `Object.getOwnPropertySymbols()` method returns an array of all symbol properties directly on the given object. Symbols are a unique data type introduced in ES6 that allow for the creation of private properties and methods. Symbol properties are non-enumerable, meaning they are not included in a [for..in](/javascript/control-flow/#forin-loop) loop or when calling [Object.keys()](/javascript/object/object-keys/) or [Object.getOwnPropertyNames()](/javascript/object/object-get-own-property-names/).

## Examples

Example 1: Using `Object.getOwnPropertySymbols()` to retrieve all symbol properties of an object.
```js
cconst obj = {
  [Symbol("key1")]: "value1",
  [Symbol("key2")]: "value2"
};
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(key1), Symbol(key2)]
```

Example 2: Using `Object.getOwnPropertySymbols()` with a built-in object.


```js
const arr = [1, 2, 3];
const symbols = Object.getOwnPropertySymbols(arr);
console.log(symbols); // []
```

In this example, since arrays don't have any symbol properties, an empty array is returned.



## Detailed explanation

### Syntax

```javascript
Object.getOwnPropertySymbols(obj)
```

### Parameter

The `Object.getOwnPropertySymbols()` method takes a single parameter:

- `obj`: The object whose symbol properties are to be returned.

### Return Value

This method returns an array of symbol properties directly on the given object.

### Limitations

The `Object.getOwnPropertySymbols()` method only returns symbol properties directly on the given object. Inherited symbol properties are not included.

### Common use cases:


- Checking if an object has any symbol properties.

- Accessing private properties and methods on an object.

- Iterating over symbol properties of an object.


### Tips and tricks:


- Symbols can be used to create private properties and methods in JavaScript.

- Symbol properties are non-enumerable and can only be accessed using the `Object.getOwnPropertySymbols()` method or the `Reflect.ownKeys()` method.

- Use the `Object.getOwnPropertySymbols()` method when you need to access the symbol properties directly on an object.

- Be aware that this method only returns symbol properties directly on the object, not inherited symbol properties.

- Avoid using symbols for properties that need to be accessed frequently, as the overhead of retrieving the symbol each time can be expensive.

- You can use the [Array.prototype.forEach()](/javascript/array/for-each/) method to iterate over the symbols returned by `Object.getOwnPropertySymbols()`.

- To check if an object has any symbol properties, you can check the length of the array returned by `Object.getOwnPropertySymbols()`.

### Ecmascript specification

This method was introduced in ECMAScript 2015 (ES6).
This method is supported by all modern browsers, including Chrome, Firefox, Safari, Edge, and Internet Explorer 11 and above.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.getownpropertysymbols" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

Here are a few exercises that can be used to practice using `Object.getOwnPropertySymbols()`:

1. Create an object with symbol and non-symbol properties. Use `Object.getOwnPropertySymbols()` to get an array of symbol property names.

<details>

<summary>Solution</summary>

```js
const myObject = {
  a: 'Hello',
  [Symbol('b')]: 'World',
  c: '!'
};

const symbols = Object.getOwnPropertySymbols(myObject);

console.log(symbols); // [Symbol(b)]
```

</details>

2. Create a class with a private property, defined using a symbol. Use `Object.getOwnPropertySymbols()` to get an array of symbols for private properties of an instance of the class.

<details>

<summary>Solution</summary>

```js
const mySymbol = Symbol('mySymbol');

class MyClass {
  constructor() {
    this[mySymbol] = 'private';
    this.public = 'public';
  }
}

const instance = new MyClass();

const symbols = Object.getOwnPropertySymbols(instance);

console.log(symbols); // [Symbol(mySymbol)]
```

</details>

3. Create a function that takes an object and returns a new object with the same properties and values, but with all symbol properties removed.

<details>

<summary>Solution</summary>

```js
function removeSymbols(obj) {
  const newObj = {};

  for (const prop in obj) {
    if (typeof prop !== 'symbol') {
      newObj[prop] = obj[prop];
    }
  }

  return newObj;
}

const myObject = {
  a: 'Hello',
  [Symbol('b')]: 'World',
  c: '!'
};

const result = removeSymbols(myObject);

console.log(result); // {a: 'Hello', c: '!'}
```

</details>
