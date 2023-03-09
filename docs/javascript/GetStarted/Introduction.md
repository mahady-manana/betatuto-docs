---
tag: "javascript"
slug: "/javascript/introduction"
date: "2022-11-24"
updatedAt: "2023-03-09"
title: "Introduction To Javascript"
description: JavaScript is a high-level programming language that is widely used in web development, server-side programming, and other contexts.
category: "Get Started"
categoryOrder: 1
order: 0
nextPath: /javascript/variables
prevPath: /javascript
githubPath: /javascript/GetStarted/Introduction.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

JavaScript has become one of the most widely used programming languages in the world, and there are several reasons why so many developers choose to use it in their projects.

From being a scripting language on the browser to a server-side programming language, JavaScript is now used everywhere, and it is a powerful language that is definitely worth learning.

Let's take a closer look at why you should learn JavaScript.

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

## What is JavaScript ?

JavaScript is a programming language that was created in 1995. It was initially named Mocha, then LiveScript before it was finally named JavaScript.

Initially, JavaScript was only used in web browsers to create dynamic, interactive web pages. This means that the code is executed in the user's web browser rather than on a remote server.

However, in 2009, Node.js was created, which allowed developers to execute JavaScript code on the server. This expanded the use of JavaScript beyond the browser and made it possible to build entire applications using only JavaScript.

## JavaScript Engines

A JavaScript engine is a program that runs JavaScript code. It interprets the code and converts it into machine code that the computer can understand. The most popular JavaScript engines include:

- <a href="https://en.wikipedia.org/wiki/V8_(JavaScript_engine)" target="_blank" rel="no-referrer">V8</a> : Used in the Google Chrome browser and Node.js. V8 is one of the fastest and most powerful JavaScript engines.
- <a href="https://en.wikipedia.org/wiki/SpiderMonkey" target="_blank" rel="no-referrer">SpiderMonkey</a> : SpiderMonkey is the engine used in the Firefox browser.
- <a href="https://en.wikipedia.org/wiki/WebKit#JavaScriptCore" target="_blank" rel="no-referrer">JavaScriptCore</a> : JavaScriptCore is the engine used in Safari.

These engines employ several key techniques to optimize the performance of JavaScript code:

- **Parsing**: The first step in executing JavaScript code is parsing. The engine parses the code to create an abstract syntax tree (AST), which represents the structure of the code in a way that can be easily processed by the engine.

- **Compilation**: Once the code is parsed, the engine compiles it into executable code. Some engines use just-in-time (JIT) compilation, where the code is compiled at runtime, while others use ahead-of-time (AOT) compilation, where the code is compiled before it is executed.

- **Optimization**: Once the code is compiled, the engine applies several optimization techniques to improve its performance. For example, it may inline functions, eliminate dead code, and use type information to generate more efficient code.

- **Execution**: Finally, the optimized code is executed by the engine. During execution, the engine manages memory, handles exceptions, and interacts with the environment (such as the DOM in a web browser).

## JavaScript on the Browser

JavaScript on the browser is used to add dynamic behavior to web pages, such as responding to user input, updating content on the page without needing to reload the entire page, and communicating with servers to retrieve and send data. Some of the key concepts that you should know when working with JavaScript on the browser include DOM manipulation, event handling, and AJAX.

**Example 1: Changing HTML Content**

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

**Example 2: Making XMLHttpRequest**

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

**Reading a File**

> It's okay if you don't understand the code yet. Keep learning with us!

```javascript
// Node.js code
const fs = require("fs");

fs.readFile("/path/to/file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

**Example 4: Simple HTTP Server with Node.js**

```javascript
// Node.js code
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
```
