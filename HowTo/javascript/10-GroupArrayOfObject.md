---
tag: "howto"
slug: "/howto/javascript/5-way-to-group-array"
date: "2023-03-25"
# updatedAt: "2023-03-09"
title: "5 Ways To Group an Array of Objects"
description: "When working with data in JavaScript, it's often necessary to group an array of objects based on certain criteria. This can be useful for organizing data for display purposes or for performing calculations on subsets of the data."
category: "How-To"
# categoryOrder: 1
topic: Array
language: JavaScript
order: 10
githubPath: /javascript/10-GroupArrayOfObject.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

When working with data in JavaScript, it's often necessary to **group an array of objects** based on certain criteria. This can be useful for organizing data for display purposes or for performing calculations on subsets of the data.

In this How-To Guide, we'll explore the various methods available for grouping arrays of objects in JavaScript.

Here are 5 methods we can use:

- `reduce()` method
- `map()` method
- `forEach()` method
- `for` or `for...of` loop
- `Array.prototype.group()` or `Array.prototype.groupToMap()`

## Results we are looking for

There are 2 types of result based on your requirement

Group an array of objects into object (this is the common result we are looking for)

```js
{
  female: [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Eve', age: 45, gender: 'female' }
  ],
  male: [
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'Dave', age: 40, gender: 'male' }
  ]
}
```

Group into Array of Arrays

```js
[
  [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "fruit", name: "orange" },
  ],
  [
    { category: "vegetable", name: "carrot" },
    { category: "vegetable", name: "celery" },
  ],
];
```

## Method 1: Group an Array of Objects With reduce() Method

The [**reduce()**](/javascript/array/reduce/) method can be used to group an array of objects into an object with properties corresponding to the grouped values.

Here are the step-by-step instructions for using the reduce() method to group an array of objects:

### Define the array of objects

Here we have an array of person with `name`, `age` and `gender` properties. We will group this data by `gender`.

```js
const data = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Dave", age: 40, gender: "male" },
  { name: "Eve", age: 45, gender: "female" },
];
```

### Define the key to group the objects by

We need to define the key to group an array of objects. Here, your key is `gender`.

```js
const key = "gender";
```

### Group the objects with reduce()

Now it's time to group the data. I will not explain how `reduce()` work to keep this guide simple. If you are looking for a deep explaination for it, [**this**](/javascript/array/reduce/) guide is for you, it covers the `reduce()` method.

```js
// reduce() method return a single value, the accumulated value return by the callback function
// The first arguments is the acumulator and the second one is the currentValue of the array

const groupedData = data.reduce((groups, item) => {
  const val = item[key]; // key used to group the data
  groups[val] = groups[val] || [];
  groups[val].push(item); // Push the current item into the corresponding group
  return groups; // this return value will be the next accumulator (here groups)
}, {});
```

Or like this

::warning May be hard to read if you or one of your team is a junior in JS so use on your own risk warning::

```js
const groupedData = data.reduce((groups, item) => {
  const keyName = item[key];
  return {
    ...groups,
    [keyName]: [...(groups[keyName] || []), item],
  };
}, {});
```

### Log the result

The result of the method above will be the same, should be an object with properties corresponding to the grouped values:

```js
console.log(groupedData);
{
  female: [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Eve', age: 45, gender: 'female' }
  ],
  male: [
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'Dave', age: 40, gender: 'male' }
  ]
}
```

## Method 2: Using the map() method

::info This method is used to group an array of objects into array of arrays not into an object, if you don't need an array of arrays feel free to go to the next section info::

The [**map()**](/javascript/array/map/) method can be used to group an array of objects into an array of arrays, where each inner array represents a group of objects with a common key value.

**Step 1**: Define the array of objects to be grouped:

```js
const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "vegetable", name: "celery" },
  { category: "fruit", name: "orange" },
];
```

**Step 2**: Use the` map()` method with `Set()` to create a new array of unique keys:

```js
const categories = [...new Set(data.map((item) => item.category))];
```

This will create an array of unique categories, which will be used as the basis for grouping the objects in the next step.

**Step 3**: Use the `map()` method again to create a new array of arrays, with each inner array representing a group of objects with a common category value:

```js
const groupedData = categories.map((category) => {
  return data.filter((item) => item.category === category);
});
```

This will create an array of arrays, with each inner array representing a group of objects with a common category value.

Example:

```js
const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "vegetable", name: "celery" },
  { category: "fruit", name: "orange" },
];

const categories = [...new Set(data.map((item) => item.category))];

const groupedData = categories.map((category) => {
  return data.filter((item) => item.category === category);
});
console.log(groupedData);

// the result will be:

[
  [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "fruit", name: "orange" },
  ],
  [
    { category: "vegetable", name: "carrot" },
    { category: "vegetable", name: "celery" },
  ],
];
```

::info You can learn more about `Array.prototype.map()` and `Set()`: [Array.prototype.map()](/javascript/array/map/), [JavaScript Set()](/javascript/sets/) info::

## Method 3: Using forEach() to group an array of objects

The [forEach()](/javascript/array/for-each/) method can be used to group an array of objects into an object with properties corresponding to the grouped values.

```js
const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const grouped = {};
persons.forEach((person) => {
  const age = person.age;
  if (!grouped[age]) {
    grouped[age] = [person];
  } else {
    grouped[age].push(person);
  }
});

console.log(grouped);
// Output:
// {
//   '30': [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 30 }
//   ],
//   '25': [
//     { name: 'Jane', age: 25 },
//     { name: 'Bob', age: 25 }
//   ]
// }
```

## Method 4: Using for or for...of loop

Loop approach is useful when you need to group an array of objects in a custom way. However, using built-in methods is usually more concise and easier to read, especially for simple grouping operations.

```js
const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const grouped = {};
for (let i = 0; i < persons.length; i++) {
  const person = persons[i];
  const age = person.age;
  if (!grouped[age]) {
    grouped[age] = [];
  }
  grouped[age].push(person);
}

console.log(grouped);

// {
//   '25': [ { name: 'Jane', age: 25 }, { name: 'Bob', age: 25 } ],
//   '30': [ { name: 'John', age: 30 }, { name: 'Alice', age: 30 } ]
// }
```

In this example, we use a `for` loop to iterate through the persons array. For each person object in the array, we check if a key with the `person`'s `age` already exists in the `grouped` object. If not, we create a new empty array for that `age` group. We then push the current person object into the appropriate age group array.

```js
const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

// Using loop methods
const grouped = {};
for (const person of persons) {
  if (!grouped[person.age]) {
    grouped[person.age] = [];
  }
  grouped[person.age].push(person);
}

console.log(grouped);

// {
//   '25': [ { name: 'Jane', age: 25 }, { name: 'Bob', age: 25 } ],
//   '30': [ { name: 'John', age: 30 }, { name: 'Alice', age: 30 } ]
// }
```

We then loop through the `persons` array using a `for...of` loop. For each person object in the array, we check if a key with the person's `age` already exists in the `grouped` object. If not, we create a new empty array for that `age` group. We then push the current person object into the appropriate `age` group array.

## Method 5: Using array.group() and array.groupToMap()

::warning Make sure to include a polyfills before using `array.group` and `array.groupToMap`. These methods are not yet available without polyfill warning::

::info
`Array.prototype.group` and `Array.prototype.groupToMap` are in Stage 3: <a href="https://github.com/tc39/proposal-array-grouping" target="_blank" rel="noopener noreferrer">See Proposal Array Grouping</a>
info::

::checked A polyfills for those methods are available in <a href="https://github.com/zloirock/core-js#array-grouping" target="_blank" rel="noopener noreferrer">**core-js**</a> checked::


`Array.prototype.group` and `Array.prototype.groupToMap` are built-in methods to group an array of objects:


### Array.prototype.group to Group an array of objects


```js
import "core-js/actual/array/group.js";

// or just 
// import "core-js/actual" 

const persons = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 }
];

const grouped = persons.group(item => item.age > 28 ? 'older' : 'younger')
```

The result will be

```js
{
  older: [ { name: 'John', age: 30 }, { name: 'Alice', age: 30 } ],
  younger: [ { name: 'Jane', age: 25 }, { name: 'Bob', age: 25 } ]
}
```

### Array.prototype.groupToMap to Group an array of objects

::info Note that this method return a [**Map()**](/javascript/maps/) not an Array or Object info::

```js
import "core-js/actual/array/group-to-map.js";

// or just
// import "core-js/actual"

const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

const grouped = persons.groupToMap((item) =>
  item.age > 28 ? "older" : "younger"
);

const older = grouped.get("older");

console.log(older)

// [ { name: 'John', age: 30 }, { name: 'Alice', age: 30 } ]

const younger = grouped.get("younger");

console.log(younger)

// [ { name: 'Jane', age: 25 }, { name: 'Bob', age: 25 } ]
```

Note that these methods are still experimental and not available in most browsers, so you'll need to include polyfills to use them.