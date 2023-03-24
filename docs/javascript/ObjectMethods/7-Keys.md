---
tag: "javascript"
slug: "/javascript/object/object-keys"
date: "2023-03-15"
title: Object.keys()
description: "Object.keys() is a built-in JavaScript method that returns an array of a given object's own property names, in the same order as a loop would iterate over the properties."
category: "Object Methods"
order: 7
prevPath: /javascript/object/object-from-entries
nextPath: /javascript/object/object-is
githubPath: /javascript/ObjectMethods/7-Keys.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

**Object.keys()** method returns an array of a given object's own enumerable property names, in the same order as a loop would iterate over the properties.

This method provides a convenient way to access an object's property names as an array, which can be useful for a variety of operations such as iterating over object properties, checking if a specific property exists, and more.


## Syntax

```javascript
Object.keys(obj);
```

### Parameter

- `obj` (required): The object whose enumerable property names are to be returned.

### Return Value

The `Object.keys()` method returns an array of strings representing all the enumerable properties of the object. The order of the property names in the array is the same as the order provided by a `for...in` loop.

### Examples

**Getting all enumerable properties of an object:**

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // ['a', 'b', 'c']
```

**Using Object.keys() in a loop:**

```js
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});
// Output:
// a: 1
// b: 2
// c: 3
```

**Checking if an object has a specific property:**

```js
const obj = { a: 1, b: 2, c: 3 };
const hasA = Object.keys(obj).includes("a");
console.log(hasA); // true
```

## Ecmascript Version & Browser support

`Object.keys()` was added in ECMAScript 5 (ES5), which was released in 2009. It is supported by all major browsers, including Internet Explorer 9 and later versions.

## Notes

- The method only returns own property names, not inherited ones. To also include inherited property names, use a `for...in` loop or the `Object.getOwnPropertyNames()` method instead.

- `Object.keys()` only returns enumerable properties, meaning it will not return non-enumerable properties, inherited properties, or properties with Symbol keys.

- The order of the returned property names is not guaranteed for objects with non-numeric property names. For objects with numeric property names, the order is guaranteed to be ascending based on the numeric value of the property name.

- The method will throw a `TypeError` if the parameter is `null` or `undefined`.

- If the parameter is not an object (e.g. a `string` or `number`), the method will implicitly convert it to an object before returning the property names.

- `Object.keys()` returns an empty array if the given object has no enumerable properties.

## Exercises

- Create an object with multiple key-value pairs and use Object.keys() to output an array of its keys.

<details>

<summary>Solution</summary>

```js
const car = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  color: "white",
};

const keys = Object.keys(car);
console.log(keys); // ["make", "model", "year", "color"]
```

</details>

- Create a function that takes an object as an argument and returns an array of its keys sorted alphabetically.

<details>

<summary>Solution</summary>

```js
function sortObjectKeys(obj) {
  const keys = Object.keys(obj);
  return keys.sort();
}

const person = {
  name: "John",
  age: 30,
  gender: "male",
};

const sortedKeys = sortObjectKeys(person);
console.log(sortedKeys); // ["age", "gender", "name"]
```

</details>

- Create a function that takes two objects as arguments and returns an array of keys that are present in both objects.

<details>

<summary>Solution</summary>

```js
function sharedObjectKeys(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  return obj1Keys.filter(key => obj2Keys.includes(key));
}

const person1 = {
  name: "John",
  age: 30,
  gender: "male"
};

const person2 = {
  name: "Jane",
  age: 25,
  city: "New York"
};

const sharedKeys
```

</details>
