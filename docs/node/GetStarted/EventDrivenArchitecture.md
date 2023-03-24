---
tag: "node"
slug: "/node/event-driven-architecture"
date: "2023-03-09"
title: "Event-Driven Architecture"
description: "Event-Driven Architecture is a popular paradigm for building scalable and efficient applications in Node.js"
category: "Get Started"
order: 6
prevPath: /node/asynchronous-programming
nextPath: /node/expressjs
githubPath: "/node/GetStarted/EventDrivenArchitecture.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


## Introduction

Event-Driven Architecture is a popular paradigm for building scalable and efficient applications in Node.js. In this paradigm, events are used to trigger actions or processing, and the application's flow is controlled by events and event listeners.



## EventEmitter

Node.js provides the `EventEmitter` class to enable event-driven programming. An `EventEmitter` is an object that emits named events that can be listened to using event listeners. The `EventEmitter` class provides methods to emit events and attach listeners to events.

Here is an example of using `EventEmitter` in Node.js:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', () => {
  console.log('myEvent was triggered.');
});

myEmitter.emit('myEvent');
```

In this example, we define a custom `MyEmitter` class that extends `EventEmitter`. We attach a listener to the `myEvent` event using the `on` method and `emit` the myEvent event using the `emit` method.

## Events

In Node.js, events can be system events (such as file system events or network events) or custom events defined by the application.

Here is an example of using a custom event in Node.js:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', data => {
  console.log(`myEvent was triggered with data: ${data}`);
});

myEmitter.emit('myEvent', 'some data');
```

In this example, we define a custom `myEvent` event and attach a listener to it that takes one argument. We then emit the `myEvent` event and pass some data to it.

## What is essential to know?

Event-Driven Architecture is a powerful paradigm for building scalable and efficient applications in Node.js. By using events and event listeners, you can create a decoupled and modular architecture that can handle multiple tasks simultaneously. The `EventEmitter` class in Node.js provides a powerful and flexible way to implement event-driven programming in your applications.



