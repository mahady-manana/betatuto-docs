---
tag: "javascript"
slug: "/javascript/promise-resolve"
date: "2023-04-03"
# updatedAt: "2023-03-09"
title: Promise.resolve()
description: "Promise.resolve() creates a Promise object that is already resolved with the specified value. If the value passed to Promise.resolve() is a Promise object, the method simply returns the Promise object itself. If the value is a thenable object, Promise.resolve() converts it into a Promise and resolves it with the value returned by the then() method."
category: "Get Started"
order: 19
nextPath: /javascript/promise-reject
prevPath: /javascript/promise/
githubPath: /javascript/GetStarted/19-PromiseResolve.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Promise.resolve()** creates a Promise object that is already resolved with the specified value. If the value passed to `Promise.resolve()` is a Promise object, the method simply returns the Promise object itself. If the value is a thenable object, `Promise.resolve()` converts it into a Promise and resolves it with the value returned by the `then()` method.

## Examples

Here are some examples to illustrate the usage of `Promise.resolve()`:

Example 1: Resolving a value with Promise.resolve()

```js
const promise = Promise.resolve("Hello, world!");
promise.then((value) => console.log(value)); // Output: 'Hello, world!'
```

Example 2: Resolving a Promise with Promise.resolve()

```js
const originalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Original Promise Resolved");
  }, 2000);
});

const resolvedPromise = Promise.resolve(originalPromise);
resolvedPromise.then((value) => console.log(value)); // Output: 'Original Promise Resolved' after 2 seconds
```

## Detailed explanation

### Syntax

```js
Promise.resolve(value);
```

The `Promise.resolve()` method takes one parameter, which is the value to be resolved. The value can be any JavaScript object, including a Promise or thenable object.

### Return value

The `Promise.resolve()` method returns a Promise object that is resolved with the specified value. If the value passed to Promise.resolve() is already a Promise object, the method simply returns the Promise object itself. If the value is a thenable object, Promise.resolve() converts it into a Promise and resolves it with the value returned by the then() method.

### Limitations

`Promise.resolve()` can only resolve one value at a time. If you need to resolve multiple values, you can use [Promise.all()](/javascript/promise-all/) instead.

### Tips and tricks

`Promise.resolve()` can be used to simplify the code when dealing with asynchronous operations. For example, if you want to create a Promise that resolves with a specific value, you can simply use `Promise.resolve(value)` instead of creating a new Promise object.

`Promise.resolve()` can be used in the following scenarios:

- Resolving a value with a Promise
- Converting a thenable object to a Promise
- Simplifying the code when dealing with Promises

When using `Promise.resolve()`, it's best to ensure that the value passed as a parameter is not a Promise object unless intended. Also, it's important to handle errors appropriately in the `then()` method or with a `catch()` method.

Promise.resolve() can be used in conjunction with [Promise.all()](/javascript/promise-all/) to create an array of Promises that are resolved with specific values.

### ECMAScript specification

`Promise.resolve()` was introduced in ECMAScript 6 (ES6) and is part of the core language specification. It is widely supported in modern browsers and Node.js versions.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.resolve" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Create a function named `getUserDetails` that accepts a parameter `userId`.
2. Inside the function, create a Promise that resolves with a user object containing details such as `name`, `email`, and `address` for the given `userId`.
3. Call `getUserDetails` with a valid `userId` and log the resolved value to the console.
4. Call `getUserDetails` with an invalid `userId` and handle the rejection by logging an error message to the console.
<details>

<summary>Solution</summary>

```js
function getUserDetails(userId) {
  return new Promise((resolve, reject) => {
    // Assume this is an API call that fetches user details for the given userId
    const user = {
      id: userId,
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Main Street",
    };

    if (userId > 0) {
      resolve(user);
    } else {
      reject(new Error("Invalid userId"));
    }
  });
}

// Call getUserDetails with a valid userId
getUserDetails(123)
  .then((user) => {
    console.log("User details:", user);
  })
  .catch((error) => {
    console.error(error);
  });

// Call getUserDetails with an invalid userId
getUserDetails(-1)
  .then((user) => {
    console.log("User details:", user);
  })
  .catch((error) => {
    console.error(error);
  });
```
`getUserDetails` is a function that returns a Promise that resolves with a user object when a valid `userId` is provided, and rejects with an error when an invalid `userId` is provided. The `Promise.resolve()` method is not used explicitly in this example, but it is used implicitly when the Promise is created and resolved with the user object.

</details>
