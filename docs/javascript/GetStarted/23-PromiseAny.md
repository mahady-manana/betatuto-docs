---
tag: "javascript"
slug: "/javascript/promise-any"
date: "2023-04-03"
# updatedAt: "2023-03-09"
title: Promise.any()
description: "When a promise resolves, the new promise returned by Promise.any() in JavaScript is immediately fulfilled with the resolved value of the promise that resolved. When all of the promises are rejected, the new promise is rejected with an AggregateError object that contains an array of all of the rejection reasons."
category: "Get Started"
order: 23
nextPath: /javascript/promise-race
prevPath: /javascript/promise-allsettled/
githubPath: /javascript/GetStarted/23-PromiseAny.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Promise.any()** method is a relatively new addition to the JavaScript language that was introduced in ECMAScript 2021. It is a method that allows you to execute a set of promises and return the result of the first promise that resolves, ignoring any that are rejected. This can be useful in situations where you have multiple promises that could return the same result, but you only need the result from the first one that resolves.

## How It Works

`Promise.any()` takes an array of promises as an argument and returns a new promise. The new promise resolves with the value of the first promise that fulfills, or rejects with an AggregateError containing an array of rejection reasons if all of the promises are rejected.

When a promise resolves, the new promise returned by `Promise.any()` is immediately fulfilled with the resolved value of the promise that resolved. When all of the promises are rejected, the new promise is rejected with an `AggregateError` object that contains an array of all of the rejection reasons.

This method is similar to [Promise.race()](/javascript/promise-any/), but there is one key difference: `Promise.any()` will only reject if all of the promises in the iterable object are rejected, whereas Promise.race() will reject as soon as the first promise is rejected.

## Examples

Here's an example that demonstrates the basic usage of Promise.any():

```js
const promises = [
  Promise.reject(new Error("error 1")),
  Promise.resolve("result 1"),
  Promise.reject(new Error("error 2")),
];

Promise.any(promises)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

In this example, `Promise.any()` is called with an array of three promises, two of which are rejected and one of which is resolved. The `then()` method is called on the new promise returned by `Promise.any()`, which will log the resolved value ('result 1') to the console.

## Detailed explanation

### Syntax

```js
Promise.any(iterable);
```

The `Promise.any()` method takes a single argument, which is an iterable object that contains promises to be resolved. An iterable object is any object that can be looped over, such as an array or a string.

### Return value

The `Promise.any()` method returns a new promise that is fulfilled with the value of the first resolved promise, or rejected with an AggregateError object that contains an array of rejection reasons if all of the promises are rejected.

### Exceptions

If the iterable object passed to this method is not iterable, a `TypeError` will be thrown. If any of the promises in the iterable object are not valid promises, a `TypeError` will be thrown.

### Limitations

This method is not supported in all web browsers yet. It was introduced in ECMAScript 2021, so it may not be supported in older browsers.

### Common use cases

`Promise.any()` can be useful in situations where you have multiple promises that could return the same result, but you only need the result from the first one that resolves. For example, if you have multiple data sources that could be used to retrieve data, and you only need the data from the first one that responds.

### Tips and tricks

When using `Promise.any()`, it is important to make sure that you handle any errors that may occur. If all of the promises in the iterable object are rejected, the new promise returned by Promise.any() will be rejected with an AggregateError object that contains an array of rejection reasons. It is important to handle this error and provide appropriate feedback to the user.

Be aware that Promise.any() returns the value of the first successful promise, which may not always be the expected or desired result.

### ECMAScript specification

The `Promise.any()` method was introduced in ECMAScript 2021 edition and is supported in all modern browsers, including Chrome, Firefox, Safari, and Edge. It is not supported in Internet Explorer.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>


## More examples


Here are a few more examples of using `Promise.any()`:


Resolving with the first successful promise

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('rejected 1'), 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved 2'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved 3'), 1500);
});

Promise.any([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));
// Output: "resolved 2"
```

Handling errors when all promises reject

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('rejected 1'), 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('rejected 2'), 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('rejected 3'), 1500);
});

Promise.any([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Output: AggregateError: All promises were rejected
// The error object contains an array of individual errors
// [AggregateError: All promises were rejected] {
//   [errors]: [ 'rejected 1', 'rejected 2', 'rejected 3' ]
// }

```