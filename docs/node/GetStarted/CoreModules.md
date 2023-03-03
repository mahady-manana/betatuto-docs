---
tag: "node"
slug: "/node/core-modules"
date: "2023-03-03"
title: "Core Modules"
description: "Learn about the built-in modules that come with Node.js, such as fs, http, and path"
category: "Get Started"
order: 3
githubPath: "/node/GetStarted/CoreModules.md"
contributor: [{ name: "Haja", link: "https://twitter.com/Haja261M" }]
---


## Overview

Node.js comes with a set of built-in modules that provide developers with a wide range of functionality for building server-side applications. These core modules are pre-installed with Node.js and can be used in any Node.js application without requiring any additional installation or configuration.

In this guide, we will introduce you to the core modules of Node.js and provide some examples of how to use them.

## Core Modules

### HTTP Module

The `http` module is used for creating web servers and handling HTTP requests and responses. Here's an example of how to create a basic HTTP server in Node.js:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
```

This code creates an HTTP server that listens for requests on port 3000 and responds with a plain text message.

### File System Module

The `fs` module is used for interacting with the file system. It provides methods for reading and writing files, creating directories, and more. Here's an example of how to read a file using the `fs` module:

```javascript
const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
```

This code reads the contents of a file at the specified path and logs the contents to the console.

### Path Module

The `path` module provides methods for working with file and directory paths. It can be used to join paths, resolve paths, and more. Here's an example of how to join two paths using the `path` module:

```javascript
const path = require('path');

const dirPath = '/path/to/directory';
const fileName = 'file.txt';

const filePath = path.join(dirPath, fileName);
console.log(filePath); // /path/to/directory/file.txt
```

This code joins a directory path and a file name to create a file path.

### OS Module

The `os` module provides methods for interacting with the operating system. It can be used to retrieve information about the system's CPU, memory, network interfaces, and more. Here's an example of how to retrieve the total amount of system memory using the `os` module:

```javascript
const os = require('os');

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory} bytes`);
```

This code retrieves the total amount of system memory in bytes and logs it to the console.

### What we did in this section?
Node.js comes with a set of powerful core modules that can be used to build a wide range of server-side applications. In this guide, we introduced you to some of the most commonly used core modules and provided examples of how to use them. By leveraging these core modules, you can streamline your development process and build high-performance Node.js applications.