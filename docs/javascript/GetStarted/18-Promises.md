---
tag: "javascript"
slug: "/javascript/promise"
date: "2023-03-31"
# updatedAt: "2023-03-09"
title: JavaScript Promises
description: "JavaScript Promise is an important concept that allows asynchronous programming in JavaScript. It provides a way to handle asynchronous operations more efficiently and elegantly than traditional callback functions."
category: "Get Started"
order: 18
nextPath: /javascript/promise-resolve
prevPath: /javascript/regex/
githubPath: /javascript/GetStarted/18-Promises.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**JavaScript Promise** is an important concept that allows asynchronous programming in JavaScript. It provides a way to handle asynchronous operations more efficiently and elegantly than traditional callback functions. 

<!-- Let's take a look what JavaScript Promises... -->

## How it works

A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value. It is an object that has 3 possible states: pending or fulfilled or rejected. The Promise constructor takes a single function as an argument that has two parameters: **resolve** and **reject**. The `resolve` parameter is a function that is called when the asynchronous operation is successful, and the `reject` parameter is a function that is called when the operation fails. The Promise object returned by the constructor can be chained with the `.then()` method to handle the resolved state or with the `.catch()` method to handle the rejected state.


## Examples

Here are some examples of how Promises can be used in JavaScript:

Example 1: Fetch data from a server asynchronously using a Promise.


```js
const fetchData = new Promise((resolve, reject) => {
  fetch('https://example.com/data')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
});

fetchData.then(data => console.log(data)).catch(error => console.log(error));
```

Example 2: Load an image asynchronously using a Promise.

```js
const loadImage = new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = () => reject(new Error('Failed to load image'));
  image.src = 'https://example.com/image.png';
});

loadImage.then(image => console.log(image)).catch(error => console.log(error));

```

## Detailed explanation

### Syntax


```js
new Promise(function(resolve, reject) {
  // executor
});
```

The Promise constructor function takes a single function as its parameter, which is called the executor function. The executor function takes two parameters, `resolve` and `reject`. The `resolve` parameter is a function that is called when the Promise is fulfilled, and the `reject` parameter is a function that is called when the Promise is rejected.

The Promise object returned by the Promise constructor has the following three states:

- **Pending**: The initial state. Neither fulfilled nor rejected.
- **Fulfilled**: The state when the operation is successful, and the result is available.
- **Rejected**: The state when the operation fails, and the reason for failure is available.

### Exceptios

When a Promise is rejected, an error is thrown. This error can be caught using the `.catch()` method or by chaining the Promise with another Promise that handles the error.

### Limitations

Promises can only be used for asynchronous operations. They cannot be used for synchronous operations.

### Tips and tricks

- Promises can be chained using the `.then()` method to handle the resolved state and the `.catch()` method to handle the rejected state. Multiple Promises can be executed concurrently using `Promise.all()`.
- Promises are commonly used for asynchronous operations such as fetching data from a server, loading images, and reading files.
- Promises should be used instead of callback functions for handling asynchronous operations. Promises should be properly handled using the `.then()` and `.catch()` methods to ensure error handling and cleaner code. Promises should be chained instead of nested to avoid callback hell. Finally, Promises should be properly documented and tested to ensure proper functionality.
- Promises can be used with the ``async/await`` syntax for even more elegant asynchronous programming. Promises can also be used with the `Promise.race()` method to handle the first Promise that resolves or rejects.


### ECMAScript specification

Promises were introduced in ECMAScript 6 (ES6) and are now part of the core language specification. They are widely supported in modern browsers and Node.js versions.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-constructor" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>


## Exercises

Here are some exercises to practice using Promises:

1. Exercise 1: Write a function that uses a Promise to load an image and return its width and height.

<details>

<summary>Solution</summary>

```js
function loadImageSize(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve({ width: image.width, height: image.height });
    image.onerror = () => reject(new Error('Failed to load image'));
    image.src = url;
  });
}

loadImageSize('https://example.com/image.png')
  .then(size => console.log(size))
  .catch(error => console.log(error));
```

</details>

2. Exercise 2: Write a function that uses a Promise to fetch data from an API and return the first 10 items.

<details>

<summary>Solution</summary>

```js
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => data.slice(0, 10))
    .catch(error => console.log(error));
}

fetchData('https://example.com/api')
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

</details>
