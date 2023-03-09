---
tag: "node"
slug: "/node/advanced-topics"
date: "2023-03-09"
title: "Advanced Topics"
description: "Node.js offers several advanced features that allow you to build complex and high-performance applications."
category: "Get Started"
order: 11
prevPath: /node/deployment-and-hosting
nextPath: /node/resources-and-further-learning
githubPath: "/node/GetStarted/AdvancedTopics.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


Node.js offers several advanced features that allow you to build complex and high-performance applications. In this documentation, you will learn about some advanced topics in Node.js, such as streams, child processes, and clustering.

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

## Streams

Streams are a powerful feature in Node.js that allow you to process large amounts of data efficiently. A stream is a continuous flow of data that can be read or written sequentially. In Node.js, streams can be used for:

- Reading and writing files
- Handling network traffic
- Processing data in real-time

Node.js provides four types of streams:

- Readable streams: Streams that can be read from.
- Writable streams: Streams that can be written to.
- Duplex streams: Streams that can be both read from and written to.
- Transform streams: Streams that can modify or transform data as it passes through.

## Child Processes

Node.js provides a way to create child processes, which are separate processes that can run in parallel with the main Node.js process. Child processes can be used for:

- Running CPU-intensive tasks in the background
- Executing external programs or scripts
- Communicating with other processes

In Node.js, child processes can be created using the `child_process` module.

## Clustering

Clustering is a technique used to scale Node.js applications across multiple CPU cores. Clustering allows you to create a cluster of worker processes that can handle incoming requests in parallel. Clustering can significantly improve the performance and scalability of your Node.js application.

In Node.js, clustering can be achieved using the `cluster` module.

## What's essential to know?

Node.js offers several advanced features that allow you to build complex and high-performance applications. In this documentation, you have learned about some advanced topics in Node.js, such as streams, child processes, and clustering. By mastering these topics, you can take your Node.js development skills to the next level and build even more powerful applications.


