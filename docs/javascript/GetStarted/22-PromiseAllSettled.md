---
tag: "javascript"
slug: "/javascript/promise-allsettled"
date: "2023-04-03"
# updatedAt: "2023-03-09"
title: Promise.allSettled()
description: "JavaScript Promise.allSettled() accepts an iterable (such as an array) of Promises as its argument. It returns a Promise that resolves to an array of objects, where each object represents the outcome of each Promise in the iterable."
category: "Get Started"
order: 22
nextPath: /javascript/promise-any
prevPath: /javascript/promise-all/
githubPath: /javascript/GetStarted/22-PromiseAllSettled.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Promise.allSettled()** is one of the Promise methods that was introduced in the ECMAScript 2020 specification. It allows developers to wait for multiple Promises to be settled (either resolved or rejected) and returns an array of objects that represent the outcome of each Promise. This documentation will provide a detailed explanation of `Promise.allSettled()` and how to use it.

## How It Works

`Promise.allSettled()` accepts an iterable (such as an array) of Promises as its argument. It returns a Promise that resolves to an array of objects, where each object represents the outcome of each Promise in the iterable. The objects have two properties:

- `status`: a string value of either "fulfilled" or "rejected"
- `value` or `reason`: the value that was passed to [resolve()](/javascript/promise-resolve/) or [reject()](/javascript/promise-reject/) when the Promise settled.
  - `value`: if the promise was _fulfilled_
  - `reason`: if the promise was _rejected_

Promise.allSettled() does not short-circuit like Promise.all(). It waits for all Promises to settle, and then returns an array of objects that represent the outcome of each Promise.

## Examples

Example 1: Resolving multiple Promises with Promise.allSettled()

```js
const promise1 = Promise.resolve("Hello");
const promise2 = Promise.resolve({ name: "John", age: 30 });
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "Oops!")
);

Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);
```

Output:

```js
[
  { status: "fulfilled", value: "Hello" },
  { status: "fulfilled", value: { name: "John", age: 30 } },
  { status: "rejected", reason: "Oops!" },
];
```

Example 2: Rejecting multiple Promises with Promise.allSettled()

```js
const promise1 = Promise.reject("Oops!");
const promise2 = Promise.reject(new Error("Something went wrong."));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Done!"));

Promise.allSettled([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);
```

Output:

```js
[
  { status: 'rejected', reason: 'Oops!' },
  { status: 'rejected', reason: Error: Something went wrong. at <anonymous>:3:35 },
  { status: 'fulfilled', value: 'Done!' }
]
```

## Detailed explanation

### Syntax

```js
Promise.allSettled(iterable);
```

### Parameters

`iterable`: An iterable object (such as an array) of Promises.

### Return value

A Promise that resolves to an array of objects that represent the outcome of each Promise in the iterable.

### Exceptions

If any of the Promises in the iterable reject with a reason that is not an Error object, the returned Promise will still resolve successfully, with a status of "rejected" and the reason as the value of the "reason" property of the corresponding object in the returned array.

### Limitations

Promise.allSettled() is not supported in some older browsers. Check the Ecmascript specification for details on browser support.

### Common use cases

Waiting for multiple asynchronous operations to complete before proceeding with additional logic.

Handling errors from multiple Promises without short-circuiting.

### Tips and tricks

When using `Promise.allSettled()`, there are several best practices you can follow to ensure optimal performance and reliability:

- Always handle the possible rejection of individual promises. If any one of the promises passed to `Promise.allSettled()` is rejected, the returned promise will still resolve successfully, but with a rejected value field. Make sure to handle this case appropriately in your code.
- Be mindful of the number of promises passed to `Promise.allSettled()`. While there is no limit to the number of promises that can be passed, performance may suffer if there are a large number of promises to be resolved.
- Consider using `Promise.allSettled()` in conjunction with Promise.race(). This can be useful in cases where you need to wait for multiple asynchronous operations to complete, but are interested only in the first one to complete or fail.
- Take advantage of the status property of the objects returned in the array. This can be useful for logging and debugging purposes, as it provides a way to determine the status of each promise in the array.

You can use `Promise.allSettled()` to determine the order in which promises are resolved. Since the returned array is in the same order as the input array, you can use this to determine which promises were resolved first, second, etc.

If you need to execute a set of asynchronous operations in parallel, but don't need to wait for all of them to complete before continuing, consider using `Promise.allSettled()` in conjunction with [`Promise.race()`](/javascript/promise-race/). This can be a useful pattern in certain situations, such as when you need to retrieve data from multiple sources and don't want to wait for all of the sources to respond before proceeding.

### ECMAScript specification

The `Promise.allSettled()` method was introduced in ECMAScript 2020 (ES11) and is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge. It is not supported in Internet Explorer or older versions of Microsoft Edge.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## More examples

Example 1: Fetching multiple resources with status information

```js
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.allSettled(
  urls.map((url) => fetch(url).then((response) => response.json()))
)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
```

This example fetches data from multiple URLs using `fetch()` and `Promise.allSettled()`. The URLs are provided as an array to `Promise.allSettled()`, which maps over the array and returns an array of promises that resolve to the JSON data fetched from each URL. When all promises are settled, the resulting array of promise statuses and JSON data is logged to the console.

Example 2: Parallel processing of data with status information

This example demonstrates how `Promise.allSettled()` can be used to perform parallel processing of data with status information.

```js
const values = [1, 2, 3, 4];

Promise.allSettled(
  values.map(
    (value) =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(value * 2), 1000);
      })
  )
)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
```
