---
tag: "javascript"
slug: "/javascript/object/object-entries"
date: "2023-03-14"
title: Object.entries()
description: "The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop."
category: "Object Methods"
order: 5
prevPath: /javascript/object/object-freeze
nextPath: /javascript/object/object-from-entries
githubPath: /javascript/ObjectMethods/5-Entries.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

The **Object.entries()** method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs, in the same order as that provided by a `for...in` loop. The only difference is that a `for...in` loop enumerates properties in the prototype chain, while `Object.entries()` returns only own enumerable properties of the object. `Object.entries()` was introduced in ECMAScript 2017


## Syntax

```javascript
Object.entries(obj);
```

### Parameter

- `obj`: The object whose enumerable own property `[key, value]` pairs are to be returned.

### Return Value

An array of `[key, value]` pairs for the given object's enumerable own properties.

### Examples

**Example 1: Basic usage**

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const entries = Object.entries(person);
console.log(entries);
// Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30]]
```

**Example 2: With for...of loop**

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// firstName: John
// lastName: Doe
// age: 30
```

**Example 3**

```js
const arr = ["a", "b", "c"];
const entries = Object.entries(arr);
console.log(entries); // Output: [["0", "a"], ["1", "b"], ["2", "c"]]
```

## Notes

- The order of the `[key, value]` pairs returned by `Object.entries()` is the same as that provided by a `for...in` loop. However, unlike a `for...in` loop, `Object.entries()` only returns own enumerable properties of the object, not those inherited from the prototype chain.
- If the input object is `null` or `undefined`, `Object.entries()` will throw a `TypeError`.

- If the input object is not an object (i.e. a primitive value such as a string, number, or boolean), `Object.entries()` will first coerce it into an object using the `ToObject()` operation (i.e. `Object("foo")` will return Object `{[[PrimitiveValue]]: "foo"}`), then proceed with returning an array of `[key, value]` pairs for the object's enumerable own properties.

- `Object.entries()` was introduced in ECMAScript 2017 and is not supported by older browsers such as Internet Explorer.

- The entries in the resulting array are also affected by the object's properties that have non-enumerable flags set to `true`.

## Exercises

1. Given an object `person` with properties `name`, `age`, and `job`, use `Object.entries()` to iterate over the object and log each property and its value to the console.

2. Given an object `student` with properties `name`, `major`, `gpa`, and `gradYear`, use `Object.entries()` to create a new object containing only the properties `name` and `gpa`, and log the new object to the console.

3. Given an object car with properties `brand`, `model`, `year`, and `color`, use `Object.entries()` to iterate over the object and log each property and its value to the console in the format `<property>`: `<value>`.


<details>

<summary>Solutions</summary>

**Exercise 1**

```js
const person = {
  name: 'Alice',
  age: 30,
  job: 'Software Engineer'
};

const entries = Object.entries(person);

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// job: Software Engineer
```

In this solution, we first use `Object.entries()` to convert the `person` object into an array of key-value pairs. We then use a `for...of` loop to iterate over the entries array and log each key-value pair to the console.

**Exercise 2**

```js
const student = {
  name: 'Bob',
  major: 'Computer Science',
  gpa: 3.7,
  gradYear: 2022
};

const entries = Object.entries(student);

const newStudent = {};

for (const [key, value] of entries) {
  if (key === 'name' || key === 'gpa') {
    newStudent[key] = value;
  }
}

console.log(newStudent);
// Output: { name: 'Bob', gpa: 3.7 }
```
In this solution, we first use `Object.entries()` to convert the `student` object into an array of key-value pairs. We then create a new empty object called `newStudent`. We use a `for...of` loop to iterate over the entries array and check if the key is either '`name`' or '`gpa`'. If the key is one of these properties, we add the key-value pair to the `newStudent` object. Finally, we log the `newStudent` object to the console.

**Exercise 3**

```js
const car = {
  brand: 'Ford',
  model: 'Mustang',
  year: 1969,
  color: 'red'
};

const entries = Object.entries(car);

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
// Output:
// brand: Ford
// model: Mustang
// year: 1969
// color: red
```

</details>
