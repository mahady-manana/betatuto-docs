---
tag: "react"
slug: "/react/reactjs-hooks"
date: "2023-02-28"
title: "React.js Hooks"
description: "React Hooks are a set of functions that allow you to use state and other React features in functional components."
category: "Get Started"
order: 4
githubPath: "/react/GetStarted/ReactJSHooks.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

React Hooks are a set of functions that allow you to use state and other React features in functional components.

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

## `useState`

The **useState** hook is used to add state to a functional component. It returns a stateful value and a function to update it. Use this hook when you need to store and update a value that affects the component's rendering.

```js
const [state, setState] = useState(initialState);
```

### Parameter

- `initialState`: The initial value of the state.

The useState hook takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update it.

The first element in the array, `state`, holds the current state value.

The second element in the array, `setState`, is a function that can be used to update the state value.

Example:

```html
import React, { useState } from "react"; function Counter() { const [count,
setCount] = useState(0); const increment = () => { setCount(count + 1); };
return (
<div>
  <p>Count: {count}</p>
  <button onClick="{increment}">Increment</button>
</div>
); }
```

## `useEffect`

The **useEffect** hook is used to perform side effects in a functional component. It runs after every render of the component.

```js
useEffect(callback, dependencies);
```

### Parameters

- `callback`: A function to be executed after every render of the component.
- `dependencies` (optional): An array of values that the effect depends on. The effect will only run if any of these values have changed since the last render.

The useEffect hook takes two arguments: a callback function and an optional array of dependencies.

The callback function is executed after every render of the component.
The dependencies array is used to specify values that the effect depends on. If any of these values have changed since the last render, the effect will run again.

If no dependencies are specified, the effect will run after every render of the component.

The callback function can return a cleanup function, which will be executed before the next render of the component.

Example:

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}
```

## `useContext`

**`useContext`** is a hook that allows you to access the values in a React context from a functional component.

```js
const value = useContext(context);
```

### Parameters:

- `context`: the context object.

Example:

```jsx
import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className={`header-${theme}`}>
      <h1>My App</h1>
    </header>
  );
}
```

## `useReducer`

**`useReducer`** is a hook that allows you to manage complex state logic in a functional component.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### Parameters:

- `reducer`: a function that takes the current state and an action, and returns the new state.
  `initialState`: the initial state value.

Example:

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleIncrementClick() {
    dispatch({ type: "increment" });
  }

  function handleDecrementClick() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  );
}
```

## `useCallback`

**useCallback** is a hook that returns a memoized callback function. It's used to optimize the performance of child components that rely on a function passed down from a parent component. By wrapping the function with useCallback, React will only re-render the child component when the dependencies of the function change, rather than on every render.

```js
const memoizedCallback = useCallback(callbackFunction, dependenciesArray);
```

### Parameters:

- `callbackFunction`: the function to be memoized
- `dependenciesArray` (optional): an array of values that the function depends on. If any of the values in this array change, the memoized function will be re-created.

Example:

```jsx
import React, { useState, useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

function Child({ onIncrement }) {
  console.log("Child component rendered");
  return <button onClick={onIncrement}>Increment</button>;
}
```

## `useMemo`

**useMemo** is a hook that returns a memoized value. It's used to optimize the performance of expensive computations in functional components. By wrapping the computation with `useMemo`, React will only recompute the value when the dependencies of the computation change, rather than on every render.

Syntax:

```js
const memoizedValue = useMemo(
  () => computeExpensiveValue(dependenciesArray),
  dependenciesArray
);
```

### Parameters:

- `computeExpensiveValue`: the function that computes the expensive value
- `dependenciesArray`: an array of values that the computation depends on. If any of the values in this array change, the memoized value will be re-computed.

example:

```jsx
import React, { useState, useMemo } from "react";

function Fibonacci({ n }) {
  const fib = useMemo(() => {
    console.log("computing fibonacci(", n, ")");
    if (n <= 1) {
      return n;
    }
    return Fibonacci({ n: n - 1 }) + Fibonacci({ n: n - 2 });
  }, [n]);

  return (
    <p>
      fibonacci({n}) = {fib}
    </p>
  );
}
```

## `useRef`

**useRef** is a hook that returns a mutable `ref` object that can be used to store a value that persists across renders. It's often used to access the DOM node of a component or to store values that don't trigger a re-render when they change.

Syntax:

```js
const refContainer = useRef(initialValue);
```

### Parameters:

- `initialValue` (optional): the initial value to store in the ref object. This is often null, but can be any value.

Example:

```jsx
import React, { useState, useRef } from "react";

function TextInput({ initialText }) {
  const [text, setText] = useState(initialText);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## `useImperativeHandle`

**useImperativeHandle** is a hook that allows a parent component to access methods or properties of its child component. It's often used in conjunction with the `forwardRef` function to expose methods or properties of a child component to its parent.

Syntax:

```js
useImperativeHandle(ref, createHandle, [deps]);
```

### Parameters:

- `ref`: a reference to the child component created using the `useRef` hook or the `React.createRef()` function.
- `createHandle`: a function that creates an object with methods or properties to be exposed to the parent component.
- `deps` (optional): an array of dependencies that triggers a re-creation of the handle object when changed.

Example:

```jsx
import React, { forwardRef, useImperativeHandle } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    },
  }));

  return <input type="text" ref={inputRef} />;
});

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
```

## `useLayoutEffect`

**useLayoutEffect** is a hook that performs a side effect after the browser has painted all the changes to the screen. This hook is similar to the useEffect hook, but it's called synchronously after a render, before the browser has painted the updated screen. This makes it ideal for performing DOM measurements or animations that require accurate layout information.

Syntax:

```jsx
useLayoutEffect(effect, [deps]);
```

### Parameters:

- `effect`: a function that performs the side effect.
- `deps` (optional): an array of dependencies that triggers a re-run of the effect when changed.

Example:

```jsx
import React, { useState, useLayoutEffect } from "react";

function App() {
  const [width, setWidth] = useState(0);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window width: {width}px</p>
    </div>
  );
}
```

## `useDebugValue`

**useDebugValue** is a hook that can be used to display custom debug information for a custom hook in the React DevTools. It's intended to be used during development to provide additional information about a hook's internal state or behavior.

Syntax:

```js
useDebugValue(value);
```

### Parameters:

- `value`: the value to be displayed in the React DevTools.

Example:

```jsx
import React, { useState, useDebugValue } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  useDebugValue(`count: ${count}`);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return [count, increment];
}

function App() {
  const [count, increment] = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## `useDeferredValue`

**useDeferredValue** is a hook that allows you to defer updating a value until a later render. It can be used to optimize the performance of your application by reducing the number of unnecessary renders.

Syntax:

```js
const deferredValue = useDeferredValue(value, options);
```

### Parameters:

- `value`: the value to be deferred.
- `options` (optional): an object that contains the following optional properties:
  - `timeoutMs`: the number of milliseconds to wait before updating the value. The default value is 0.
  - `equals`: a function that determines whether two values are equal. If the function returns true, the update will be deferred. If it returns false, the update will be applied immediately. The default function uses the Object.is comparison.

Example:

```jsx
import React, { useState, useDeferredValue } from "react";

function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text, { timeoutMs: 1000 });

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Deferred text: {deferredText}</p>
    </div>
  );
}
```

## `useTransition`

**useTransition** is a hook that allows you to animate changes to a component's state or props. It can be used to create smooth and responsive UI transitions and animations.

Syntax:

```js
const [startTransition, isPending] = useTransition(options);
```

### Parameters:

- `options` (optional): an object that contains the following optional properties:
  - `timeoutMs`: the number of milliseconds to wait before transitioning to the new state or props. The default value is 0.
  - `busyDelayMs`: the number of milliseconds to wait before showing a loading indicator. The default value is 0.
  - `busyMinDurationMs`: the minimum number of milliseconds to show the loading indicator. The default value is 0.

### Return values:

- `startTransition`: a function that takes a callback that updates the state or props of a component. The callback is wrapped in a transition that allows it to be animated.
- `isPending`: a boolean that indicates whether a transition is currently in progress. This can be used to show a loading indicator or disable user input during the transition.

Example:

```jsx
import React, { useState, useTransition } from "react";

function App() {
  const [text, setText] = useState("");
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1000,
    busyDelayMs: 500,
    busyMinDurationMs: 1000,
  });

  function handleClick() {
    startTransition(() => {
      setText("Hello, World!");
    });
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Loading..." : "Click me!"}
      </button>
      <p>{text}</p>
    </div>
  );
}
```

## `useId`

The **useId** hook generates a unique identifier that can be used to associate a label with an input element. This can be helpful for accessibility purposes, as it helps screen readers understand which label corresponds to which input.

Syntax:

```js
const id = useId();
```

The `useId` hook does not take any parameters.

Example:

```jsx
import { useId } from "react";

function MyForm() {
  const inputId = useId();

  return (
    <form>
      <label htmlFor={inputId}>Name:</label>
      <input type="text" id={inputId} />
    </form>
  );
}
```
