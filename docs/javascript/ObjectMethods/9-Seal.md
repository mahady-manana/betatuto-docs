---
tag: "javascript"
slug: "/javascript/object/object-seal"
date: "2023-03-15"
title: Object.seal()
description: "Object.seal() is a built-in method in JavaScript that seals an object, preventing new properties from being added and marking all existing properties as non-configurable. This means that properties can still be modified or deleted, but not added or reconfigured."
category: "Object Methods"
order: 9
prevPath: /javascript/object/object-is
nextPath: /javascript/object/object-has-own
githubPath: /javascript/ObjectMethods/9-Seal.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**Object.seal()** is a built-in method in JavaScript that seals an object, preventing new properties from being added and marking all existing properties as non-configurable. This means that properties can still be modified or deleted, but not added or reconfigured.

When an object is sealed, it becomes a sealed object. This means that the object is a regular object, but it is now immutable in terms of its property descriptors. In other words, the properties of a sealed object can still be changed, but the descriptors for the properties (such as configurability, writability, and enumerability) cannot be changed. This can be useful in situations where you want to ensure that an object's structure remains consistent, but you still need to allow for changes to the values of its properties.


## Syntax

```javascript
Object.seal(obj)
```

### Parameter

- `obj`: The object to be sealed.



### Return Value

The same object that was passed as a parameter after it has been sealed.

### Examples

```javascript
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022
};

Object.seal(car);

car.color = 'red'; // This will have no effect since the object is sealed
car.year = 2023; // This will change the value of the 'year' property since it is still writable

console.log(Object.isSealed(car)); // true
console.log(car); // { brand: 'Toyota', model: 'Camry', year: 2023 }
```
```javascript
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

Object.freeze(person); // First, freeze the object
Object.seal(person); // Then, seal it

person.age = 31; // This will have no effect since the object is frozen and sealed
delete person.city; // This will have no effect since the object is sealed

console.log(Object.isSealed(person)); // true
console.log(person); // { name: 'John Doe', age: 30, city: 'New York' }
```
```javascript
const product = {
  name: 'iPhone',
  price: 999,
  manufacturer: 'Apple'
};

Object.defineProperty(product, 'name', { writable: false }); // Make the 'name' property read-only
Object.seal(product);

product.price = 1099; // This will change the value of the 'price' property since it is still writable
product.name = 'iPad'; // This will have no effect since the 'name' property is not writable

console.log(Object.isSealed(product)); // true
console.log(product); // { name: 'iPhone', price: 1099, manufacturer: 'Apple' }
```

## Ecmascript Version & Browser support

`Object.seal()` was introduced in ECMAScript 5 (ES5).

Browser support:
 - Chrome: 6+
 - Firefox: 4+
 - Edge: 12+
 - Safari: 5.1+
 - Opera: 12+


## Notes


- Sealing an object does not affect the prototypes of the object or its properties.

- The `Object.seal()` method only seals the object passed to it. It does not seal nested objects.

- The `Object.seal()` method does not prevent the modification of property values. It only prevents the addition or removal of properties and the reconfiguration of existing properties (such as changing a data property to an accessor property, or vice versa).

- The `Object.seal()` method is not recursive. It only operates on the immediate properties of the object that is passed to it. If the object has nested properties (i.e. properties that are themselves objects), those objects will not be sealed by this method.

- Sealing an object can improve performance in certain situations, as it allows JavaScript engines to optimize the object's memory layout and avoid expensive lookups in certain cases.

- When an object is sealed, its `[[Extensible]]` internal slot is set to false. This means that `Object.isExtensible()` will return false for the object, and `Object.preventExtensions()` cannot be called on it.

- Sealing an object does not affect the properties of its prototype chain. If the prototype of the sealed object is not also sealed, new properties can still be added to the object through its prototype.


## Exercises

1. Write a function `sealProps(obj)` that takes an object as an argument and seals all of its properties using `Object.seal()`. Return the sealed object.

<details>

<summary>Solution</summary>

```js
function sealProps(obj) {
  return Object.seal(obj);
}

const myObj = {
  foo: 'bar',
  baz: 123,
  qux: true
};

const sealedObj = sealProps(myObj);

console.log(Object.isSealed(sealedObj)); // true
```

</details>

1. Write a function `sealPropsRecursively(obj)` that takes an object as an argument and seals all of its properties, including any nested objects. Hint: you may want to use recursion to achieve this.

<details>

<summary>Solution</summary>

```js
function sealPropsRecursively(obj) {
  Object.seal(obj);
  for (let prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      sealPropsRecursively(obj[prop]);
    }
  }
  return obj;
}

const myObj = {
  foo: 'bar',
  nestedObj: {
    baz: 123,
    qux: true
  }
};

const sealedObj = sealPropsRecursively(myObj);

console.log(Object.isSealed(sealedObj)); // true
console.log(Object.isSealed(sealedObj.nestedObj)); // true
```

</details>

3. Write a function isSealedWithSymbol(obj, sym) that takes an object and a symbol as arguments and returns true if the object is sealed with that symbol, and false otherwise.

<details>

<summary>Solution</summary>

```js
function isSealedWithSymbol(obj, sym) {
  const sealSymbol = Object.getOwnPropertySymbols(obj).find(sym => {
    return Object.getOwnPropertyDescriptors(obj)[sym].writable === false;
  });
  return sealSymbol === sym;
}

const myObj = {
  foo: 'bar',
  baz: 123
};

const mySym = Symbol('mySym');
Object.defineProperty(myObj, mySym, { value: true, writable: false });
Object.seal(myObj);

console.log(isSealedWithSymbol(myObj, mySym)); // true
console.log(isSealedWithSymbol(myObj, Symbol('otherSym'))); // false
```

</details>
