---
tag: "react"
slug: "/react/"
date: "2022-11-24"
title: "Introduction To React.js"
description: "React.js is a JavaScript library for building user interfaces."
category: "Get Started"
categoryOrder: 1
order: 0
githubPath: /react/GetStarted/Introduction.md
contributor: [{ name: "Mahady Manana", link: "https://www.betatuto.com/" }]
---


## Overview

React is a popular JavaScript library for building user interfaces, which was first introduced by Facebook in 2011 and has since been maintained by a growing community of developers.

Using a component-based architecture, React enables developers to create reusable UI elements that can be combined and composed into complex interfaces. Its virtual DOM efficiently updates the UI by only rendering the parts of the page that have changed, which can improve performance and reduce the amount of code needed.

React is often used in conjunction with other front-end tools and frameworks, such as Redux for state management and Next.js for server-side rendering. It also has broad compatibility with various back-end technologies, such as Node.js and Ruby on Rails.

One of the significant benefits of React is its extensive ecosystem of third-party libraries and tools, which can enhance its capabilities and make it easier to use. Additionally, React has excellent documentation and a supportive community that offers many learning resources, including tutorials, blogs, and videos.

React has become a popular choice for building modern web applications due to its flexibility, reusability, and performance. Its component-based approach and efficient virtual DOM make it an ideal tool for building complex and dynamic user interfaces that can scale to meet the demands of modern web development.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it show in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 6
class-name: "table-of-contents"
```

## What Is React Component

In React, a component is a reusable piece of code that encapsulates the functionality and appearance of a specific part of a user interface. Components can be combined together to create complex UIs, and can also be reused across different parts of an application.

### Create a React Component

```jsx
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello React.js</h1>
      <p>A library for building UI.</p>
    </div>
  );
}
```

### Create a Reusable Component

```jsx
// MyComponent.jsx
import React from "react";

function MyComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}
```

This component takes in two props, "`title`" and "`text`", and renders them inside a div.

To use this component in another component, you can import it and use it like this:

```jsx
import React from "react";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <MyComponent title="Hello React.js" text="Welcome to my app" />
    </div>
  );
}
```

This code imports the MyComponent component and uses it inside the App component, passing in the "`title`" and "`text`" props.

## What is React State

[React state](/react/reactjs-basics) is an object that holds the data that a component uses to render its UI. When the state changes, React automatically re-renders the component and updates the UI to reflect the new state.

```jsx
import React, { useState } from "react";

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

export default Counter;
```


## What is React Hooks

[React Hooks](/react/reactjs-hooks) are functions that allow you to use state and other React features in functional components. The most commonly used hook is the useState hook, which allows you to add state to a functional component.

```jsx
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  useEffect(() => {
    // set default state on component mount
    setName("Devs");
  }, []);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default App;
```

By using React Hooks, functional components can now have state, making them more flexible and powerful. Hooks can also be used to handle other React features such as lifecycle events, context, and more.

React is a powerful and flexible library that has become widely popular among developers. It allows you to create reusable UI components and manage state efficiently, while also minimizing DOM manipulations for improved performance.


# Notes


- Components: React is all about building reusable UI components. A component is a piece of code that represents a part of the UI, such as a button, a form, or a table.

- State: State refers to the data that a component stores internally. React allows you to update state and re-render the UI based on those changes.

- Props: Props are used to pass data from a parent component to a child component.

- Virtual DOM: The virtual DOM is a lightweight representation of the actual DOM. React uses it to minimize the number of DOM manipulations and improve performance.

