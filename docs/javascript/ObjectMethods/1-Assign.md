---
tag: "javascript"
slug: "/javascript/object/object-assign"
date: "2023-03-13"
title: Object.assign()
description: "Object.assign() is a method in JavaScript that is used to copy the values of all enumerable properties from one or more source objects to a target object."
category: "Object Methods"
categoryOrder: 4
order: 1
prevPath: /javascript/object/inheritance
nextPath: /javascript/object/object-create
githubPath: /javascript/ObjectMethods/1-Assign.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [
    { name: "Mahady Manana", link: "https://twitter.com/MahadyManana" },
  ]
---

`Object.assign()` is a method in JavaScript that is used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the target object with the updated properties.

## Syntax

```javascript
Object.assign(target, source);
Object.assign(target, source1, source2, source3, ...sourceN);
```

### Parameter

- `target`: The first parameter is the target object that will be updated with the properties of the source object(s). This parameter is mandatory.
- `sources`: One or more source objects that will be used to update the target object. If there are multiple sources, they will be applied in order from left to right. This parameter is also mandatory.

### Return Value

`Object.assign()` returns the target object with the updated properties.

### Examples

**Example 1: Merging two objects into a new object**

```javascript
const obj1 = { name: "John" };
const obj2 = { age: 25 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // Output: { name: "John", age: 25 }
```

**Example 2: Updating an existing object**

```js
const obj1 = { name: "John", age: 25 };
const obj2 = { age: 30 };
Object.assign(obj1, obj2);
console.log(obj1); // Output: { name: "John", age: 30 }
```

**Example 3: Copying an object with nested properties**

```js
const obj1 = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
const obj2 = Object.assign({}, obj1);
console.log(obj2);
// Output: {
//   name: "John",
//   address: {
//     street: "123 Main St",
//     city: "New York"
//   }
// }
```

## Notes

- The method only copies the enumerable properties of the source object(s) to the target object. If a property is non-enumerable, it will not be copied.
- The method copies property values by reference. This means that if the property value is an object or an array, the target object will have a reference to the same object/array as the source object. Any changes made to the original object/array will also be reflected in the copied object.
- If the same property exists in both the target and source objects, the property value in the target object will be overwritten by the value in the source object.

## Exercises

1. Create a function `mergeObjects` that takes in two objects as parameters and returns a new object that contains all the properties from both objects. Use `Object.assign()` to implement the function.
2. Create an object person with the properties `name`, `age`, and `address`. Create a copy of this object and store it in a variable `personCopy` using `Object.assign()`. Update the `age` property in the `personCopy` object to be 30. Print both the person and `personCopy` objects to the console and verify that only the age property in `personCopy` has changed.
3. Create an object `book` with the properties `title`, `author`, and `publisher`. Create an object `bookDetails` with the properties `genre` and `year`. Use `Object.assign()` to copy all properties from `bookDetails` to `book`. Print the `book` object to the console to verify that the properties from `bookDetails`

<details>

<summary>Solutions</summary>

**Exercise 1:**

```js
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { name: "John" };
const obj2 = { age: 25 };
const obj3 = mergeObjects(obj1, obj2);
console.log(obj3); // Output: { name: "John", age: 25 }
```

**Exercise 2:**

```js
const person = {
  name: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const personCopy = Object.assign({}, person);
personCopy.age = 30;

console.log(person); // Output: { name: "John", age: 25, address: { street: "123 Main St", city: "New York" } }
console.log(personCopy); // Output: { name: "John", age: 30, address: { street: "123 Main St", city: "New York" } }
```

**Exercise 3:**

```js
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publisher: "Scribner",
};

const bookDetails = {
  genre: "Fiction",
  year: 1925,
};

Object.assign(book, bookDetails);

console.log(book);
// Output: {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publisher: "Scribner",
//   genre: "Fiction",
//   year: 1925
// }
```

</details>
