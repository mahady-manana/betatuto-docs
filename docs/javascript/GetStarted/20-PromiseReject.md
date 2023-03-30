---
tag: "javascript"
slug: "/javascript/promise-reject"
date: "2023-03-31"
# updatedAt: "2023-03-09"
title: Promises.reject()
description: "The Promise.reject() method is used to create a new Promise that is rejected with a specified reason. It can be used to handle errors and propagate them down the chain of Promises."
category: "Get Started"
order: 19
nextPath: /javascript/array
prevPath: /javascript/promise-resolve/
githubPath: /javascript/GetStarted/20-PromiseReject.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

The **Promise.reject()** method is used to create a new Promise that is rejected with a specified reason. It can be used to handle errors and propagate them down the chain of Promises.

The `Promise.reject()` method takes a single argument, which is the reason for the rejection. This reason can be any value, but it is typically an Error object.

When the `Promise.reject()` method is called, it creates a new Promise object that is immediately rejected with the provided reason. This Promise object can then be used to chain further Promises using the `.catch()` method.

## Examples

Here are some examples of using Promise.reject():


Example 1: Rejecting with an Error object

```js
const error = new Error("Something went wrong.");
const promise = Promise.reject(error);

promise.catch((reason) => {
  console.error(reason);
}); // Error: Something went wrong.
```
In this example, we create a new `Error` object with a message of "`Something went wrong.`" and pass it to the `Promise.reject()` method. This creates a new Promise that is immediately rejected with the error. We then chain a `.catch()` method to the Promise to handle the rejection and log the reason to the console.

Example 2: Rejecting with a string

```js
const promise = Promise.reject("Oops, something went wrong.");

promise.catch((reason) => {
  console.error(reason);
}); // Oops, something went wrong.
```
In this example, we pass a string to the `Promise.reject()` method instead of an Error object. This creates a new Promise that is immediately rejected with the string. We then chain a `.catch()` method to the Promise to handle the rejection and log the reason to the console.

## Detailed explanation

### Syntax

```js
Promise.reject(reason);
```

`reason`: The reason for the rejection. This can be any value.

The `Promise.reject()` method returns a new Promise object that is immediately rejected with the specified reason.

### Tips and tricks


- The `Promise.reject()` method can be used in combination with `Promise.all()` to handle errors in parallel Promises.
- This method is often used as the catch handler in a Promise chain to handle any errors that occur.
- This method can be used to simulate a rejected Promise for testing purposes.
- Use descriptive error messages as the reason for rejection to make debugging easier.
- Always handle rejections using a `.catch()` method to avoid unhandled Promise rejections.

The `Promise.reject()` method is commonly used to:

 - Handle errors in a Promise chain.
 - Create a rejected Promise for testing purposes.

To create a rejected Promise with a delay, use the setTimeout() function and wrap the Promise.reject() method in a function:


```js
function delayReject(reason, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason);
    }, delay);
  });
}

const promise = delayReject("Oops, something went wrong.", 1000);

promise.catch((reason) => {
  console.error(reason);
});
```
### ECMAScript specification

The `Promise.reject()`  was introduced in ECMAScript 6 (ES6) and is part of the core language specification. It is widely supported in modern browsers and Node.js versions.

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
