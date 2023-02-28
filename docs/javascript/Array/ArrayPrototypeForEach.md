---
tag: "javascript"
slug: "/javascript/array/for-each"
date: "2022-11-24"
title: Array.prototype.forEach()
description: "The Array.prototype.forEach() method is used to execute a provided function once for each array element."
category: "Array Methods"
order: 3
githubPath: /javascript/Array/ArrayPrototypeForEach.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

The `Array.prototype.forEach()` method is used to execute a provided function once for each array element. It is similar to a [`for`](/javascript/control-flow) loop, but with fewer lines of code and more expressive syntax.

## Syntax

```javascript
array.forEach(callback[, thisArg])
array.forEach(callback(currentValue[, index[, array]])[, thisArg]);

```

## Parameters

- `callback` (required): A function that is called for each element in the array. The function takes three parameters:
    - `currentValue`: The value of the current element being processed in the array.
    - `index` (optional): The index of the current element being processed in the array.
    - `array` (optional): The array `forEach()` was called upon.
- `thisArg` (optional): An object to use as `this` when executing the callback function.

## return value

`undefined`

## Examples

```javascript
const numbers = [1, 2, 3];
numbers.forEach((number) => console.log(number));
// Output: 1 2 3
```

```javascript
const array = [1, 2, 3];
array.forEach((element, index, array) => {
  array[index] = element * 2;
});
console.log(array);
// Output: [2, 4, 6]
```

```javascript
const array = [1, 2, 3];
let sum = 0;
array.forEach((element) => {
  sum += element;
});
console.log(sum);
// Output: 6
```
## Use Cases

The `forEach()` method is useful in many situations where you need to perform an operation on each element in an array. Some common use cases include:

### Manipulating the DOM

Suppose you have an array of objects representing items in a shopping cart, and you want to update the quantity of each item in the cart on the page. You could use `forEach()` to iterate over the array and update the DOM:

```javascript
const cartItems = [
  { name: 'Item 1', quantity: 2 },
  { name: 'Item 2', quantity: 1 },
  { name: 'Item 3', quantity: 4 }
];

cartItems.forEach((item) => {
  const element = document.querySelector(`[data-name="${item.name}"]`);
  element.textContent = item.quantity;
});
```

### Updating the state of an application

Suppose you have an application that manages a list of users, and you want to delete all users whose status is set to "inactive". You could use forEach() to iterate over the array of users and remove the inactive ones:

```javascript
const users = [
  { id: 1, name: 'User 1', status: 'active' },
  { id: 2, name: 'User 2', status: 'inactive' },
  { id: 3, name: 'User 3', status: 'active' },
  { id: 4, name: 'User 4', status: 'inactive' }
];

users.forEach((user, index, array) => {
  if (user.status === 'inactive') {
    array.splice(index, 1);
  }
});
```

### Filtering an array

Suppose you have an array of numbers, and you want to create a new array that contains only the even numbers. You could use `forEach()` to iterate over the array and add the even numbers to a new array:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = [];

numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(evenNumbers);
// Output: [2, 4, 6, 8]
```
## Calculating statistics or aggregating data

Suppose you have an array of objects representing sales data for a company, and you want to calculate the total revenue for each quarter of the year. You could use forEach() to iterate over the array and calculate the total revenue for each quarter:

```javascript
const salesData = [
  { product: 'Widget', price: 10, quantity: 5 },
  { product: 'Gadget', price: 5, quantity: 10 },
  { product: 'Doohickey', price: 7.5, quantity: 3 }
];

let totalSales = 0;
let totalRevenue = 0;

salesData.forEach((sale) => {
  totalSales += sale.quantity;
  totalRevenue += sale.price * sale.quantity;
});

const averagePrice = totalRevenue / totalSales;

console.log(`Total sales: ${totalSales}`);
console.log(`Total revenue: ${totalRevenue}`);
console.log(`Average price: ${averagePrice}`);
```


## Additionnal notes

The `forEach()` method does not create a new array, but instead executes a function on each element of the existing array.

> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayPrototypeForEach.md" target="_blank">Edit this page on Github</a>

