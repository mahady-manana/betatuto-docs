---
tag: "javascript"
slug: "/javascript/promise-race"
date: "2023-04-03"
# updatedAt: "2023-03-09"
title: Promise.race()
description: "When multiple promises are passed into Promise.race() in JavaScript, it immediately starts executing each of them in parallel. Whichever promise finishes first (either resolved or rejected) will be the one that Promise.race() returns."
order: 24
category: "Get Started"
nextPath: /javascript/array
prevPath: /javascript/promise-any/
githubPath: /javascript/GetStarted/24-PromiseRace.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

Promises are an important part of modern JavaScript programming, allowing developers to handle asynchronous operations in an organized and efficient way. The **Promise.race()** method is one of the methods available on the Promise object, and it allows developers to race multiple promises against each other, resolving or rejecting the first one that completes.

## How It Works

When multiple promises are passed into `Promise.race()`, it immediately starts executing each of them in parallel. Whichever promise finishes first (either resolved or rejected) will be the one that `Promise.race()` returns.

The returned promise will have the same state (resolved or rejected) as the first promise that finishes. It will also have the same value or error as that first finishing promise.

## Examples

Example 1: Resolving the first promise to resolve

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});

// Output: Promise 2 resolved
```

In this example, `Promise.race()` is used to resolve the first promise to resolve. Since `promise2` is set to resolve in 500ms and promise1 is set to resolve in 1000ms, `Promise.race()` will return the result of `promise2` once it resolves.

Example 2: Rejecting the first promise to reject

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 rejected");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});

Promise.race([promise1, promise2]).catch((error) => {
  console.log(error);
});

// Output: Promise 1 rejected
```

In this example, `Promise.race()` is used to reject the first promise to reject. Since promise1 is set to reject in 1000ms and promise2 is set to resolve in 500ms, `Promise.race()` will return the error of promise1 once it rejects.

## Detailed explanation

### Syntax

```js
Promise.race(iterable);
```

The `Promise.race()` method takes an iterable object as its single argument, which should be an array of promises or any other iterable object. If any non-Promise object is encountered in the iterable object, it will be converted into a Promise by the Promise.resolve() method before being processed.

### Return value

`Promise.race()` returns a promise that is fulfilled with the same value or rejection reason as the first promise in the given iterable object to resolve or reject.

### Exceptions

If the iterable argument is empty or does not contain any Promises, the returned Promise will never be fulfilled and will remain in a pending state indefinitely.

### Limitations

One limitation of `Promise.race()` is that it only returns the first resolved or rejected promise. If you need to know about the state of all the promises in a group, then you should use [Promise.all()](/javascript/promise-all/) or [Promise.allSettled()](/javascript/promise-allsettled/) instead.

### ECMAScript specification

`Promise.race()` is a built-in function in JavaScript, and it is specified in the ECMAScript 6 (ES6) specification. It was added as part of the Promises API, which is a standardized way to deal with asynchronous code. Promise.race() is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge, as well as in Node.js.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.race" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Write a function that takes an array of promises and returns a new promise that resolves with the result of the fastest promise in the array. Use Promise.race() to implement the function.

```js
function fastestPromise(promises) {
  return Promise.race(promises);
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 100, "one"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 50, "two"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 200, "three"));

fastestPromise([promise1, promise2, promise3]).then((result) =>
  console.log(result)
);
// Output: 'two'
```

2. Write a function that takes an array of promises and returns a new promise that resolves with an array of the resolved values of all promises. Use Promise.race() to implement the function.

```js
function racePromises(promises) {
  return Promise.race(
    promises.map((promise) => promise.then((value) => [value]))
  );
}

const promise1 = Promise.resolve("one");
const promise2 = Promise.resolve("two");
const promise3 = Promise.resolve("three");

racePromises([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);
// Output: ['one', 'two', 'three']
```

3. Write a function that takes an array of URLs and returns a new promise that resolves with the contents of the first URL that loads successfully. Use Promise.race() to implement the function.

```js
function loadFirstSuccessfulUrl(urls) {
  const promises = urls.map((url) =>
    fetch(url).then((response) => response.text())
  );
  return Promise.race(promises);
}

loadFirstSuccessfulUrl([
  "https://example.com",
  "https://google.com",
  "https://yahoo.com",
]).then((content) => console.log(content));
// Output: contents of the first URL that loads successfully
```

In summary, `Promise.race()` is a useful method in the Promises API that allows you to handle asynchronous code by resolving or rejecting the first promise in an array of promises. It's important to understand its syntax, parameters, return values, and limitations to use it effectively in your code. By following best practices and using tips and tricks, you can leverage this method to write more efficient and reliable code.
