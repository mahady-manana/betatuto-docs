---
tag: "javascript"
slug: "/javascript/object/object-is-sealed"
date: "2023-03-16"
title: Object.isSealed()
description: "The Object.isSealed() method determines if an object is sealed. An object is sealed if it is not extensible and all its properties are non-configurable. This method returns a boolean value indicating whether the object is sealed."
category: "Object Methods"
order: 12
prevPath: /javascript/object/object-is-frozen
nextPath: /javascript/object/object-prevent-extensions
githubPath: /javascript/ObjectMethods/12-IsSealed.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Object.isSealed()** method determines if an object is sealed. An object is sealed if it is not extensible and all its properties are non-configurable. This method returns a boolean value indicating whether the object is sealed.



## How it works ?

The `Object.isSealed()` method checks if the provided object is sealed or not. If the object is sealed, it returns `true`, otherwise it returns `false`. An object is considered sealed if:

- It is not extensible using [Object.seal()](/javascript/object/object-seal/).
- All of its properties are non-configurable (i.e., their `configurable` attribute is set to `false`) and non-writable (i.e., their `writable` attribute is set to `false`).
- All of its properties are non-configurable using `Object.defineProperty()` with `configurable: false`.

## Examples

```js
const obj1 = { a: 1 };
Object.seal(obj1);
console.log(Object.isSealed(obj1)); // true

const obj2 = { b: 2 };
Object.defineProperty(obj2, "b", { configurable: false });
console.log(Object.isSealed(obj2)); // true

const obj3 = { c: 3 };
console.log(Object.isSealed(obj3)); // false
```


## Detailed explanation

### Syntax

```javascript
Object.isSealed(obj);
```

### Parameter

- `obj`: The object to be checked.

### Return Value

A boolean value indicating whether the object is sealed or not.

### Limitations

The `Object.isSealed()` method only checks if an object is sealed or not. It does not provide any information about which properties are non-configurable.

### Notes

- Sealing an object also prevents any new properties from being added to it, but the existing properties can still be modified.

- An object can be sealed using the [Object.seal()](/javascript/object/object-seal/) method.

- An object cannot be unsealed once it has been sealed.

### Common use cases

- Checking if an object is sealed before attempting to modify it.

- Ensuring that an object is not accidentally modified by making it non-extensible and non-configurable.

### Tips and tricks

- Avoid sealing objects unless absolutely necessary, as it can make debugging and maintenance more difficult.

- If sealing an object, make sure it is thoroughly tested to ensure that it behaves as expected.

- Use the `Object.isFrozen()` method to check if an object is frozen (i.e., both non-extensible and all properties are non-writable).

### Ecmascript specification

The `Object.isSealed()` method was introduced in ECMAScript 5 (ES5) and is included in all modern web browsers.

See <a href="https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.issealed" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Write a function that takes an object as an argument and returns `true` if the object is sealed, otherwise `false`.

<details>

<summary>Solution</summary>

```js
function isObjectSealed(obj) {
  return Object.isSealed(obj);
}
```

</details>

2. Write a function that takes an array of objects and returns an array containing only the sealed objects.

<details>

<summary>Solution</summary>

```js
function getSealedObjects(objArr) {
  return objArr.filter((obj) => Object.isSealed(obj));
}
```

</details>

3. Write a program that creates an object, seals it, and then tries to add a new property to it. Use `Object.isSealed()` to check if the object is sealed before and after attempting to add the property.

<details>

<summary>Solution</summary>

```js
const obj = {
  name: "John",
  age: 30,
};

console.log(Object.isSealed(obj)); // false

Object.seal(obj);

console.log(Object.isSealed(obj)); // true

obj.newProp = "test";

console.log(Object.isSealed(obj)); // true
```

In the above example, the `Object.seal()` method is used to seal the obj object. After sealing the object, the `newProp` property is added to it. Since the object is sealed, the new property addition will fail silently, and the object will still be sealed. The `Object.isSealed()` method is used to verify the sealed status of the object before and after adding the new property.

</details>
