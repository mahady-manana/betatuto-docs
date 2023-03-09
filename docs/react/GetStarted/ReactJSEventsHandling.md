---
tag: "react"
slug: "/react/reactjs-events-handling"
date: "2023-03-09"
title: "React.js Events Handling"
description: "React events handling refers to the process of capturing and responding to user interactions within a React application."
category: "Get Started"
order: 4
prevPath: /react/reactjs-basics
nextPath: /react/reactjs-forms-and-validation
githubPath: "/react/GetStarted/ReactJSEventsHandling.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

React events handling refers to the process of capturing and responding to user interactions within a React application. These interactions can be anything from a mouse click or key press to a form submission or touch event. In this guide, we'll cover how to handle events in React, including the different types of events, how to bind event handlers, and how to pass data from events to our components.

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

## Types of Events in React

React supports a wide range of events, including:

- Mouse events (click, mouseover, mouseout, etc.)
- Keyboard events (keydown, keyup, etc.)
- Touch events (touchstart, touchend, etc.)
- Form events (submit, change, etc.)
- Focus events (focus, blur, etc.)
- Media events (play, pause, etc.)
- Scroll events (scroll, wheel, etc.)

Each event type has its own set of properties and methods that provide information about the event and allow you to control how your application responds to it.

## Handling Events in React

When **handling events** in React, it's important to keep in mind that React uses a synthetic event system, which means that event objects are pooled and reused for better performance. This means that event objects cannot be accessed asynchronously, so if you need to access event data outside of the event handler function, you should store it in a variable or state.

Let's take a look a some example on how to handle events in React :

### MouseEvents

`onClick`

The `onClick` event fires when the user clicks an element.

```jsx
function MyButton() {
  const handleClick = (event) => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

`onMouseOver` and `onMouseOut`

The `onMouseOver` event fires when the user moves the mouse over an element, and the `onMouseOut` event fires when the mouse leaves the element.

```jsx
function MyImage() {
  const handleMouseOver = (event) => {
    // logic here
  };

  const handleMouseOut = (event) => {
    // cool code here
  };

  return (
    <img
      src="my-image.jpg"
      alt="My Image"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
}
```

### Keyboard Events

The `onKeyDown` event fires when the user presses a key.

```jsx
function MyInput() {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed!");
    }
  };
  return <input type="text" onKeyDown={handleKeyDown} />;
}
```

### Touch Events

`onTouchStart`

The `onTouchStart` event fires when the user touches an element.

```jsx
function MyButton() {
  const handleTouchStart = (event) => {
    console.log("Button touched!");
  };

  return <button onTouchStart={handleTouchStart}>Touch Me</button>;
}
```

### Form Events

The `onSubmit` event fires when the user submits a form, and the `onChange` event fires when the user changes the value of a form element.

```jsx
function MyForm() {
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted with value: ${formValue}`);
  };

  const handleChange = (event) => {
    setFormValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Events handling almost have the same syntax.

## Passing arguments to an event handler

Passing arguments to an event handler function in React can be done in different ways depending on the situation.

### Method 1: Arrow Function

One way to pass arguments to an event handler is by using an arrow function that calls the actual event handler function with the arguments. This approach can be useful when you need to pass additional arguments that are not provided by the event object.

```jsx
function MyButton() {
  const handleClick = (arg1, arg2) => {
    console.log(`Button clicked with args: ${arg1}, ${arg2}`);
  };

  return <button onClick={() => handleClick("foo", "bar")}>Click Me</button>;
}
```

```jsx
function MyButton() {
  const handleClick = (event, arg2) => {
    console.log(`Button clicked with args: ${arg2}`);
  };

  return (
    <button onClick={(event) => handleClick(event, "bar")}>Click Me</button>
  );
}
```

### Method 2: Binding the Arguments

Another way to pass arguments to an event handler is by binding them to the function using the `bind` method. This approach can be useful when you want to pass arguments that are available at render time.

```jsx
function MyButton() {
  const [count, setCount] = useState(0);

  const handleClick = (arg1, arg2, event) => {
    console.log(`Button clicked with args: ${arg1}, ${arg2}`);
    console.log(`Event type: ${event.type}`);
  };

  return (
    <button onClick={handleClick.bind(this, "foo", "bar")}>
      Click Me ({count})
    </button>
  );
}
```

### Method 3: Passing the Event Object

If you only need to pass the event object to the event handler, you can simply include it as an argument in the function signature.

```jsx
function MyButton() {
  const handleClick = (event) => {
    console.log(`Button clicked! Event type: ${event.type}`);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Method 4: Passing props from list

If you need to pass a data to the function handler in list component, you can simply include the data as an argument in the function handler.

```jsx
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function MyButton() {
  const handleClick = (event, item) => {
    console.log(`Button ${item} clicked`);
  };

  return (
    <div>
      {items.map((item) => (
        <button key={item} onClick={(event) => handleClick(event, item)}>
          Click Me
        </button>
      ))}
    </div>
  );
}
```
