---
tag: "javascript"
slug: "/javascript/promise-all"
date: "2023-04-03"
# updatedAt: "2023-03-09"
title: Promise.all()
description: "The Promise.all() method is a built-in JavaScript method that takes an array of promises and returns a new promise that is resolved with an array of the resolved values of the input promises. It allows you to wait for all promises to be resolved or rejected, and then perform an action."
category: "Get Started"
order: 21
nextPath: /javascript/promise-allsettled
prevPath: /javascript/promise-reject/
githubPath: /javascript/GetStarted/21-PromiseAll.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Promise.all()** method is a built-in JavaScript method that takes an array of promises and returns a new promise that is resolved with an array of the resolved values of the input promises. It allows you to wait for all promises to be resolved or rejected, and then perform an action.

## How it works:

When **Promise.all()** is called, it takes an array of promises as its argument. It then returns a new promise that will be resolved with an array of the resolved values of the input promises. If any of the input promises is rejected, the **Promise.all()** promise will be immediately rejected with the reason of the rejected promise.

The `Promise.all()` method is often used when you want to execute a set of asynchronous operations in parallel and then wait for all of them to complete before continuing.

## Examples

```js
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: [1, 2, 3]
});
```

## Detailed explanation

### Syntax

```js
Promise.all(iterable)
```

### Parameters

It takes an iterable object such as an array or a string, containing promises or values to be resolved. The iterable object can also contain non-promise values, which will be included in the resolved array.

### Return value

A promise that is resolved with an array of the resolved values of the input promises. The order of the elements in the resolved array will be the same as the order of promises in the iterable object.

### Exceptions

If any of the input promises is rejected, the `Promise.all()` promise will be immediately rejected with the reason of the rejected promise.

### Limitations 

If one of the input promises takes a very long time to resolve, the `Promise.all()` promise will also take a long time to resolve. There is also a limit to the number of promises that can be passed as input, depending on the browser or platform being used.


### Common use cases

The `Promise.all()` method is useful for situations where you need to perform several asynchronous operations at once and wait for all of them to complete before continuing with the next step in your program. It is commonly used in web development when making multiple API requests simultaneously, for example.


### Tips and tricks

- It is best to wrap the `Promise.all()` method in a try-catch block to handle any potential errors that may occur during the promise resolution process. Additionally, it is recommended to use an array of promises instead of individual promises as input to make your code more scalable and easier to read.
- You can use `Promise.all()` to implement a timeout mechanism for multiple promises. You can create a [Promise.race()](/javascript/promise-race/) between `Promise.all()` and a Promise that resolves after a set amount of time. If the `Promise.all()` promise resolves before the timeout, you know that all promises have resolved successfully. If the timeout Promise resolves first, you can reject the `Promise.all()` promise with an error message.

### ECMAScript specification

The `Promise.all()` was introduced in ECMAScript 6 (ES6) and is part of the core language specification. It is widely supported in modern browsers and Node.js versions.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## More examples

Example 1: Fetching multiple resources


```js
const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url =>
  fetch(url).then(response => response.json())
))
.then(data => console.log(data))
.catch(error => console.log(error));
```

This example fetches data from multiple URLs using `fetch()` and `Promise.all()`. The URLs are provided as an array to `Promise.all()`, which maps over the array and returns an array of promises that resolve to the JSON data fetched from each URL. When all promises are resolved, the resulting array of JSON data is logged to the console.

Example 2: Parallel processing of data


```js
const values = [1, 2, 3, 4];

Promise.all(values.map(value =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(value * 2), 1000);
  })
))
.then(results => console.log(results))
.catch(error => console.log(error));
```

This example demonstrates how `Promise.all()` can be used to perform parallel processing of data. An array of values is provided to `Promise.all()`, which maps over the array and returns an array of promises that resolve to the doubled value of each input value after a delay of 1 second. When all promises are resolved, the resulting array of doubled values is logged to the console.

Example 3: Error handling

```js
const promises = [
  Promise.resolve('foo'),
  Promise.reject(new Error('bar')),
  Promise.resolve('baz')
];

Promise.all(promises)
.then(results => console.log(results))
.catch(error => console.log(error));
```

This example demonstrates how `Promise.all()` handles errors. An array of promises is provided to Promise.all(), including one promise that rejects with an error. When all promises are resolved, the resulting array of values is logged to the console. However, since one promise was rejected, the catch block is executed and logs the error to the console.