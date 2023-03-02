---
tag: "react"
slug: "/react/reactjs-basics"
date: "2023-02-28"
title: "React.js Basics concepts"
description: "Learn the fundamentals of ReactJS, including components, props, state, and JSX syntax"
category: "Get Started"
order: 3
githubPath: "/react/GetStarted/ReactJSBasics.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

React is a JavaScript library for building user interfaces. It provides a declarative approach to creating UIs, where you describe how your UI should look and React takes care of updating the DOM when the state changes. In this documentation, we'll cover the basics of React.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 6
class-name: "table-of-contents"
```

## Introduction To JSX

**JSX** (JavaScript XML) is a syntax extension to JavaScript used in React to describe the structure and appearance of user interfaces. JSX syntax allows developers to write HTML-like syntax directly in their JavaScript code, making it easier to build and maintain complex UIs.

Here's an example of JSX code in React:

```jsx
const element = <h1>Hello, world!</h1>;
```

JSX expressions can also contain other JSX elements, as well as JavaScript expressions. For example:

```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

JSX is a syntax extension to JavaScript that allows developers to write HTML-like syntax directly in their JavaScript code.It is used extensively in React to describe the structure and appearance of user interfaces.

JSX code is compiled by Babel, a JavaScript compiler, into regular JavaScript code that can be interpreted by web browsers. This allows us to write code in a more familiar HTML-like syntax while still leveraging the full power of JavaScript.

## React Components

In React, a component is a reusable piece of code that encapsulates the functionality and appearance of a specific part of a user interface. Components can be combined together to create complex UIs, and can also be reused across different parts of an application.

Here's an example of using JSX to create a component:

```jsx
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

Components are the building blocks of React applications. They encapsulate the functionality and appearance of a specific part of a user interface, and can be reused across different parts of an application. In React, there are two types of components: functional components and class components.

Functional components are simpler and more lightweight than class components, and are recommended for most use cases. They are simply JavaScript functions that take a props object as an argument and return a new React element that describes what should appear on the screen.

## React State

**React State** is a way to store data in a React component that can be updated and will trigger a re-render of the component. You can define state in a component using the useState hook.

Here's an example of using state in a component:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

**State** is a fundamental concept in React that allows components to maintain their own data and update it over time. In React, state is typically used to represent data that changes over time, such as user input, API responses, or component visibility.

State can be declared using the `useState` hook, which is a function provided by React that allows functional components to declare and update state. The useState hook returns an array with two values: the current state value and a function to update the state value.

To update state, we call the update function returned by `useState`. This function can take a new value for the state, or a function that takes the previous state as an argument and returns a new state.

## React Props

**Props** are short for "properties" and are used to pass data between components. Props are read-only and cannot be modified by the component itself.

Props allow components to be reusable and modular, and make it easy to customize the appearance and functionality of a component based on the data it receives.

Here's an example of a component that accepts props:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

To use this component, we can pass it a name prop like this:

```jsx
<Greeting name="John" />
```

Props are a fundamental concept in React that allow components to receive data from a parent component. By passing data through props, we can make components reusable and modular, and easily customize their appearance and functionality based on the data they receive.

To pass props to a child component, we simply add them as attributes when rendering the child component. In the child component, we can access the props through the props object that is passed as an argument to the component function.

Props are read-only in the child component, meaning that they cannot be changed by the child component. If the child component needs to change the data it receives, it should use state instead.

## Conditionnal Rendering

**Conditional rendering** in React allows components to display different content based on certain conditions. This is often used to create dynamic and interactive user interfaces, where the content displayed on the page changes in response to user actions or changes in data.

```jsx
import React, { useState } from "react";

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </div>
  );
}

export default Greeting;
```

By using conditional rendering, we can create components that respond dynamically to user input and changes in data, providing a more engaging and interactive user experience.

## Lists and React Keys

In React, lists are used to display a collection of items in the user interface. To create a list in React, we typically use the `map` function to iterate over an array of data and render each item as a component.

**Keys** are used in React to help identify individual items in a list, and ensure that they are re-rendered correctly when the list is updated.

```jsx
import React from 'react';

function List() {
  const items = ['apple', 'banana', 'orange'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
```

By using lists and keys in React, we can create dynamic and flexible user interfaces that display collections of data in an intuitive and efficient way.


## Form and User Input

In React, forms are used to allow users to input data and interact with a web application. To create a form in React, we typically use the form element and a combination of input elements like `input`, `select`, `textarea`, etc.

To handle user input in React, we use state to store the current value of each form input, and update this state whenever the user types into the input or selects an option.

```jsx
import React, { useState } from 'react';

function GreetingForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GreetingForm;
```

We can create interactive and engaging web applications that allow users to input data and interact with the application in a variety of ways.