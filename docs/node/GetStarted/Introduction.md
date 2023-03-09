---
tag: "node"
slug: "/node/introduction"
date: "2023-03-09"
title: "Introduction To Node.js"
description: Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine
category: "Get Started"
categoryOrder: 1
order: 0
githubPath: /node/GetStarted/Introduction.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---

## Overview

Node.js is an open-source, cross-platform runtime environment for executing JavaScript code. It was created by Ryan Dahl in 2009 and is now maintained by the Node.js Foundation.

It is built on the V8 JavaScript engine, which was originally created for the Chrome browser, and provides a way to run JavaScript code outside of a web browser.

Node.js is particularly useful for building server-side web applications and real-time applications, such as chat systems and online games. It provides a set of built-in modules that enable developers to perform tasks such as file system access, networking, and handling HTTP requests and responses. Node.js also has a vast ecosystem of third-party modules that can be easily installed using the Node Package Manager (npm).

One of the most significant advantages of Node.js is its non-blocking I/O model. This model enables developers to handle a large number of simultaneous connections without requiring multiple threads or processes. As a result, Node.js is known for its high performance and scalability.

In addition to web development, Node.js is also used for building command-line tools and other types of software that require a scripting language. Overall, Node.js is a popular choice among developers due to its versatility, performance, and large community support.

Example of simple HHTP

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
```


Example of 