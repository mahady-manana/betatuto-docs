---
tag: "node"
slug: "/node/asynchronous-programming"
date: "2023-03-09"
title: "Asynchronous Programming"
description: "Asynchronous programming is a fundamental concept in Node.js. Node.js allows you to write non-blocking code that runs asynchronously, which means that your code can continue to run without waiting for an I/O operation to complete."
category: "Get Started"
order: 5
prevPath: /node/npm-and-package-management
nextPath: /node/event-driven-architecture
githubPath: "/node/GetStarted/AsynchronousProgramming.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Introduction

Asynchronous programming is a fundamental concept in Node.js. Node.js allows you to write non-blocking code that runs asynchronously, which means that your code can continue to run without waiting for an I/O operation to complete. This can improve the performance of your Node.js applications and help you to write more efficient code.

## Callbacks

Callbacks are a key part of asynchronous programming in Node.js. A callback is a function that is passed as an argument to another function and is executed when that function has completed its task. In Node.js, many I/O operations use callbacks to signal when they have completed.

Here is an example of using a callback to read a file in Node.js:

```javascript
const fs = require('fs');

fs.readFile('myfile.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

In this example, the `readFile` function reads the contents of `myfile.txt` and passes a callback function that will be executed when the file is read. The callback function takes two arguments: an error object (if an error occurred), and the data that was read from the file.

## Promises

Promises are another way to handle asynchronous operations in Node.js. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and allows you to attach callbacks to be executed when the operation is completed.

Here is an example of using a Promise to read a file in Node.js:

```javascript
const fs = require('fs').promises;

fs.readFile('myfile.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

In this example, the `promises` property of the `fs` module is used to create a Promise that reads the contents of `myfile.txt`. The `then` method is used to attach a callback that will be executed when the operation is completed successfully, and the `catch` method is used to attach a callback that will be executed if the operation fails.

## Async/Await

Async/await is a newer way to handle asynchronous operations in Node.js. Async/await is built on top of Promises and provides a more synchronous way to write asynchronous code.

Here is an example of using async/await to read a file in Node.js:

```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('myfile.txt');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```

In this example, the `async` keyword is used to define an asynchronous function that reads the contents of `myfile.txt` using the `await` keyword. The `try/catch` block is used to handle any errors that may occur during the operation.

## What's essential to know?

Asynchronous programming is an essential concept in Node.js, and Node.js provides several ways to handle asynchronous operations, including callbacks, Promises, and async/await. By leveraging asynchronous programming in your Node.js applications, you can write more efficient and performant code that can handle multiple tasks simultaneously.
