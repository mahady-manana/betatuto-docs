---
tag: "javascript"
slug: "/javascript/"
date: "2022-11-24"
title: "Introduction To Javascript"
description: JavaScript is a high-level programming language that is widely used in web development, server-side programming, and other contexts.
category: "Get Started"
categoryOrder: 1
order: 0
nextPath: /javascript/variables
githubPath: /javascript/GetStarted/Introduction.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview

JavaScript is a high-level programming language that is widely used in web development, server-side programming, and other contexts. It was created in the mid-1990s by Brendan Eich at Netscape Communications Corporation. JavaScript has become one of the most widely used programming languages in the world

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 2
class-name: "table-of-contents"
```

## JavaScript on the Browser

JavaScript is most commonly used in web development to create dynamic, interactive web pages. In this context, JavaScript is run on the client-side, meaning that it is executed in the user's web browser rather than on a remote server.

JavaScript on the browser is used to add dynamic behavior to web pages, such as responding to user input, updating content on the page without needing to reload the entire page, and communicating with servers to retrieve and send data. Some of the key concepts that you should know when working with JavaScript on the browser include DOM manipulation, event handling, and AJAX.

### Example 1: Changing HTML Content

> It's okay if you don't understand the code yet. Keep learning with us!

```html
<!-- HTML code -->
<p id="my-paragraph">Hello, world!</p>
<button onclick="changeText()">Change Text</button>

<!-- JavaScript code -->
<script>
  function changeText() {
    document.getElementById("my-paragraph").innerHTML = "Hello, JavaScript!";
  }
</script>
```

### Example 2: Making XMLHttpRequest

```html
<!-- HTML code -->
<button onclick="makeRequest()">Make Request</button>

<!-- JavaScript code -->
<script>
  function makeRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.open("GET", "https://api.example.com/data");
    xhr.send();
  }
</script>
```

## JavaScript on the Server

JavaScript can also be used on the server-side, thanks to platforms such as Node.js. With Node.js, developers can use JavaScript to build server-side applications that can handle requests from clients, process data, and interact with databases and other resources.

Some of the key concepts that you should know when working with JavaScript on the server include handling HTTP requests and responses, working with databases, and building APIs.

### Example 3: Reading a File

> It's okay if you don't understand the code yet. Keep learning with us!

```javascript
// Node.js code
const fs = require("fs");

fs.readFile("/path/to/file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
### Example 4: Simple HTTP Server with Node.js

```javascript
// Node.js code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node.js!');
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
```