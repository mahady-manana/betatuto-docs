---
tag: "node"
slug: "/node/expressjs"
date: "2023-03-03"
title: "Express.js"
description: "Learn how to use Express.js, a popular Node.js framework, to build web applications and APIs"
category: "Get Started"
order: 7
githubPath: "/node/GetStarted/Expressjs.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


Express.js is a popular Node.js framework that simplifies building web applications and APIs. In this documentation, you will learn how to use Express.js to build a basic web application and API.

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 3
class-name: "table-of-contents"
```

## Installation

To get started with Express.js, you need to install it in your Node.js project using NPM. You can install the latest version of Express.js by running the following command in your project directory:

```batch
npm install express
```

## Basic Express.js Application

To create a basic Express.js application, you need to import the `express` module and create an instance of it.

```javascript
const express = require('express');
const app = express();
```

Once you have created an instance of `express`, you can define routes and middleware for your application.


```javascript
// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server listening on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, we define a route handler for the default home page (`/`) and start the server listening on port 3000.

## Middleware

Express.js provides a powerful middleware architecture that allows you to add additional functionality to your application. Middleware functions can be used to modify the request or response objects, perform authentication, handle errors, and much more.

Here is an example of using middleware in an Express.js application:

```javascript
// Define a middleware function to log all requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server listening on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, we define a middleware function that logs all requests to the console before passing control to the next middleware function or route handler.

## What's essential to know?

Express.js is a powerful Node.js framework that makes it easy to build web applications and APIs. With its powerful middleware architecture, you can add additional functionality to your application without writing a lot of boilerplate code. By following the examples in this documentation, you can get started building your own Express.js applications and APIs today.

