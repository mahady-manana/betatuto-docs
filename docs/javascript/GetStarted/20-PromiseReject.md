---
tag: "javascript"
slug: "/javascript/promise-reject"
date: "2023-04-03"
# updatedAt: "2023-03-09"
title: Promise.reject()
description: "The Promise.reject() method is used to create a new Promise that is rejected with a specified reason. It can be used to handle errors and propagate them down the chain of Promises."
category: "Get Started"
order: 20
nextPath: /javascript/promise-all
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

### Return value

The `Promise.reject()` method returns a new Promise object that is immediately rejected with the specified reason.

### Tips and tricks

- The `Promise.reject()` method can be used in combination with [Promise.all()](/javascript/promise-all/) to handle errors in parallel Promises.
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

The `Promise.reject()` was introduced in ECMAScript 6 (ES6) and is part of the core language specification. It is widely supported in modern browsers and Node.js versions.

See <a href="https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject" target="_blank" rel="noopener noreferrer">ECMAScript specification</a>

## Exercises

1. Create a function `getUserData()` that returns a promise which is resolved with an object containing user data (`id`, `name`, and `email`) or rejected with an error message.
2. Use `getUserData()` function to retrieve user data and handle the resolved and rejected cases separately.
3. Implement a retry mechanism using `Promise.reject()`. If the promise is rejected with an error message, the function should attempt to retry the request after a certain amount of time (e.g. 5 seconds) for a maximum number of retries (e.g. 3 times).
4. Test the function with different inputs and verify the output.

<details>

<summary>Solution</summary>

```js
function getUserData() {
  return new Promise((resolve, reject) => {
    const userData = { id: 1, name: "John Doe", email: "johndoe@example.com" };
    const shouldSucceed = Math.random() < 0.8; // 80% success rate
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(userData);
      } else {
        reject("Failed to fetch user data");
      }
    }, 1000); // simulate network delay
  });
}

function retry(fn, retriesLeft = 3, interval = 5000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        if (retriesLeft === 0) {
          reject(error);
          return;
        }
        setTimeout(() => {
          console.log(`Retrying... (${retriesLeft} retries left)`);
          retry(fn, retriesLeft - 1, interval)
            .then(resolve)
            .catch(reject);
        }, interval);
      });
  });
}

// usage
retry(getUserData)
  .then((data) => {
    console.log("User data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

In this example, `getUserData()` simulates an asynchronous operation that succeeds 80% of the time and fails with an error message otherwise. The `retry()` function implements a retry mechanism using `Promise.reject()`. It takes a function as its first argument, which should return a promise that resolves or rejects. If the promise is rejected, the function retries the operation after a certain amount of time for a maximum number of retries. The default values for the number of retries and the interval between retries are 3 and 5 seconds, respectively. You can adjust these values as needed.

The usage section shows how to use the `retry()` function with `getUserData()`. If `getUserData()` fails, the retry() function will attempt to retry the operation up to 3 times, with a 5-second delay between retries. If all retries fail, the `catch()` block will handle the error. Otherwise, the `then()` block will handle the resolved value.

You can test this code by running it in a Node.js environment or a browser console. Try changing the success rate of `getUserData()` to test the retry mechanism.

</details>
