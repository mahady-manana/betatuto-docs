---
tag: "javascript"
slug: "/javascript/maps"
date: "2023-03-06"
title: JavaScript Maps
description: "A map is an object in JavaScript that allows you to store key-value pairs. The keys and values can be of any data type, including objects and functions."
category: "Get Started"
order: 16
prevPath: /javascript/sets
nextPath: /javascript/array
githubPath: /javascript/GetStarted/Maps.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

A **map** is an object in JavaScript that allows you to store key-value pairs. The keys and values can be of any data type, including objects and functions. Unlike objects, maps allow any value to be used as a key, including objects and primitive types. In addition, maps maintain the insertion order of the key-value pairs, making them useful for implementing algorithms that rely on order.

## Creating a Map

To create a map in JavaScript, you can use the `Map` constructor. You can initialize a map with an iterable object such as an array, or you can create an empty map.

```js
// Creating an empty map
const myMap = new Map();

// Creating a map from an array
const myArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];
const myMap = new Map(myArray);
```

## JavaScript Maps Methods

Like [Sets](/javascript/sets), JavaScript Maps has a built-in methods: `set()`, `has()`, `get()`, `delete()`, `size`, `clear()`

### `set()` Method

`set()` method is used to add a key-value pair to a map.

```js
const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
```

### `has()` Method

`has()` method is used to check if a key is in a map.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.has("key1"); // true
myMap.has("key3"); // false
```

### `get()` Method

To get the value associated with a key in a map, you can use the `get()` method.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.get("key1"); // 'value1'
myMap.get("key3"); // undefined
```

### `delete()` Method

To remove a key-value pair from a map, you can use the `delete()` method.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.delete("key1");
```

### `size` Method

You can get the size of a map using the `size` property.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.size; // 2
```

### `clear()` Method

To remove all key-value pairs from a map, you can use the `clear()` method.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.clear();
```

## Iterating Over a Map

You can use a `for...of` or `forEach` loop to iterate over a map.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
for (const [key, value] of myMap) {
  console.log(key, value);
}
```

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
myMap.forEach((value, key) => {
  console.log(key, value);
});
```

## Converting a Map to an Array

You can convert a map to an array using the `Array.from()` method.

```js
const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
const myArray = Array.from(myMap);
console.log(myArray); // [['key1', 'value1'], ['key2', 'value2']]
```

You can also use the spread operator (`...`) to convert a map to an array.

```const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
const myArray = [...myMap];
console.log(myArray); // [['key1', 'value1'], ['key2', 'value2']]
```

## Using Objects as Keys

You can use objects as keys in a map. When you use an object as a key, the object is converted to a string using the `toString()` method.

```js
const myMap = new Map();
const myObject = { name: "John" };
myMap.set(myObject, "value");
myMap.get(myObject); // 'value'
```

## Using Functions as Keys

You can also use functions as keys in a map. When you use a function as a key, the function is converted to a string using its source code.

```javascript
const myMap = new Map();
const myFunction = function () {};
myMap.set(myFunction, "value");
myMap.get(myFunction); // 'value'
```

## Using NaN as a Key

You can use `NaN` as a key in a map.

```js
const myMap = new Map();
myMap.set(NaN, "value");
myMap.get(NaN); // 'value'
```

Maps in JavaScript are a powerful tool for storing key-value pairs. They allow you to use any value as a key and maintain the insertion order of the key-value pairs. Maps also provide methods for adding, getting, and deleting key-value pairs, as well as iterating over the key-value pairs.
