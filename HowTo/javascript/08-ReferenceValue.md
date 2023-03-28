---
tag: "howto"
slug: "/howto/javascript/reference-and-value-javascript"
date: "2023-03-28"
# updatedAt: "2023-03-09"
title: "Reference vs Value in JavaScript"
description: "In JavaScript, Value types are also referred to as primitive data types like numbers, strings, booleans, null, and undefined. On the other hand, references types are objects, arrays, and functions. In reference, the variable does not contain the object itself. Instead, it contains a reference to the memory location where the object is stored."
category: "How-To"
# categoryOrder: 1
topic: Basic concepts
language: JavaScript
order: 8
githubPath: /javascript/08-ReferenceValue.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

One of the most fundamental concepts in programming is the distinction between reference and value types. Understanding the difference between these two types is important in JavaScript as it affects how data is stored, manipulated, and passed around in your code. This How-To guide will provide you with a comprehensive understanding of reference vs value types in JavaScript.

## What are Value Types in JavaScript?

Value types in JavaScript are also referred to as primitive data types. These include numbers, strings, booleans, null, and undefined. When a value type is assigned to a variable, the value is stored directly in the variable.

For example:


```js
let num = 5; // num contains the value 5
let str = 'Hello'; // str contains the value 'Hello'
let bool = true; // bool contains the value true
let nothing = null; // nothing contains the value null
let und = undefined; // und contains the value undefined
```

In this case, the variables `num`, `str`, `bool`, `nothing`, and `und` hold the actual values of their respective types.


## What are Reference types in JavaScript?

Reference types, on the other hand, are objects, arrays, and functions. When a reference type is assigned to a variable, the variable does not contain the object itself. Instead, it contains a reference to the memory location where the object is stored.

For example:

```js
let arr = [1, 2, 3]; // arr contains a reference to the memory location of the array [1, 2, 3]
let obj = { name: 'John', age: 30 }; // obj contains a reference to the memory location of the object { name: 'John', age: 30 }
```

In this case, the variables `arr` and `obj` contain references to the memory locations where the array `[1, 2, 3]` and the object `{ name: 'John', age: 30 }` are stored, respectively.

## Passing Reference vs Value types as function arguments

### Passing value types as function arguments:

When a value type is passed as an argument to a function, a copy of the value is passed. This means that any changes made to the value inside the function will not affect the original variable.

For example:

```js
let num = 5;

function changeNum(num) {
  num = 10;
}

changeNum(num);
console.log(num); // Output: 5
```

In this case, the function `changeNum()` takes a value type (`num`) as an argument. Inside the function, the value of `num` is changed to 10. However, when we log the value of `num` outside the function, it still contains the original value of 5.

### Passing reference types as function arguments:

When a reference type is passed as an argument to a function, the function receives a reference to the original object. This means that any changes made to the object inside the function will affect the original object.

For example:

```js
let arr = [1, 2, 3];

function addToArray(arr, num) {
  arr.push(num);
}
addToArray(arr, 4);
console.log(arr); // Output: [1, 2, 3, 4]
```

In this case, the function `addToArray()` takes an array (`arr`) and a number (`num`) as arguments. Inside the function, the number `num` is added to the array `arr`. When we log the value of `arr` outside the function, it contains the updated array with the new value added.

## Mutating vs. Reassigning reference types:

### Mutating reference types

When working with reference types, it is important to understand the difference between mutating an object and reassigning it.

Mutating an object means changing its properties or elements without changing the memory location where it is stored. This will affect all references to the same object in your code.

For example:

```js
let obj = { name: 'John', age: 30 };

function changeAge(obj, age) {
  obj.age = age;
}

changeAge(obj, 40);
console.log(obj); // Output: { name: 'John', age: 40 }
```

In this case, the function `changeAge()` takes an object (`obj`) and an age (`age`) as arguments. Inside the function, the `age` property of the object is changed to the new value. When we log the value of `obj` outside the function, it contains the updated object with the new age value.

### Reassigning reference types

Reassigning an object means creating a new object with the same or different properties and assigning it to the variable. This will create a new memory location for the object and any references to the original object will not be affected.

For example:

```js
let obj1 = { name: 'John', age: 30 };
let obj2 = obj1;

obj2.age = 40;
console.log(obj1); // Output: { name: 'John', age: 40 }
console.log(obj2); // Output: { name: 'John', age: 40 }

obj2 = { name: 'Sarah', age: 25 };
console.log(obj1); // Output: { name: 'John', age: 40 }
console.log(obj2); // Output: { name: 'Sarah', age: 25 }
```

In this case, the variable `obj1` is assigned an object, and the variable `obj2` is assigned a reference to the same object. When we update the `age` property of `obj2`, it also updates the `age` property of `obj1` since they both reference the same object. However, when we reassign `obj2` to a new object, `obj1` remains unchanged since it still references the original object.


## Important notes


Here are some notes that might help new developers remember the key points about reference vs. value types in JavaScript:

- Reference types (objects, arrays, functions) store a reference to the memory location where the data is stored, while value types (strings, numbers, booleans) store the actual value.
- When passing a reference type as an argument to a function, any changes made to the object inside the function will affect the original object.
- To avoid unintended changes to objects, it's often best to create a copy of the object before modifying it inside a function.
- When comparing two objects or arrays, JavaScript checks if they are stored in the same memory location. To compare their values, you'll need to iterate through each property or element and compare them individually.
- Remember that variables holding reference types don't actually hold the object itself, but rather a reference to it. So when you assign a variable to another variable, you're just creating a new reference to the same object.
- Mutating an object means changing its properties or elements without changing its memory location, while reassigning an object means creating a new object with the same or different properties.
- It's important to distinguish between mutating and reassigning reference types, as this affects how changes to the object are propagated throughout your code.
- And finally, here's a simple joke to help you remember: Why did the developer break up with her object? Because it was mutable, not immutable!


## Conclusion:

In summary, understanding the difference between reference and value types in JavaScript is crucial for efficient and effective programming. Value types store their values directly in the variable, while reference types store a reference to the memory location where the object is stored. When passing value types as function arguments, a copy of the value is passed, while passing reference types passes a reference to the original object. It is also important to distinguish between mutating and reassigning reference types, as this affects how changes to the object are propagated throughout your code.