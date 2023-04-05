---
tag: "howto-react"
slug: "/howto/react/recursive-component-react"
date: "2023-04-05"
# updatedAt: "2023-03-09"
title: Recursive Component in React.js
description: "In React, recursive components can be used to render a component within itself. This can be useful for creating nested or hierarchical components, such as a tree view or a list of items with sub-items."
category: "How-To"
# categoryOrder: 1
topic: Basic concepts
language: React.js
order: 20
githubPath: /react/20-RecursiveComponent.md
breadcrumb: [{ label: "React.js", slug: "/react" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

In React, **recursive components** can be used to render a component within itself. This can be useful for creating nested or hierarchical components, such as a tree view or a list of items with sub-items. To create a recursive component in React, you can simply render the component within itself with different props each time it is called.

## What is Recursive?

Recursion is a technique used in programming where a function calls itself within its own code block. This can be useful for tasks that require repetitive or iterative processes, such as traversing a tree-like data structure. A recursive function can continue to call itself until a certain condition is met, at which point it will return a value to the previous function call and continue executing.

Here is an example of Recursive function:

```js
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const fn5 = factorial(5);

console.log(fn5); // 120
```

## How Recursive Component Works

In React, a recursive component is a component that renders itself within its own definition. This allows the component to be called recursively, either by itself or by other components, to render nested data structures such as trees or lists. Here's the syntax for creating a recursive component in React:

```js
const RecursiveComponent = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title}
          {item.children && item.children.length > 0 && (
            <RecursiveComponent data={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};
```

In this example, the `RecursiveComponent` takes a `data` prop that contains an array of objects with `title` and `children` properties. If an object has `children`, the component recursively calls itself and passes in the child `data` as a prop.

Here's a breakdown of how the recursive component works:

- The RecursiveComponent is defined with an arrow function that takes a single prop, `data`.
- Within the function, a `<ul>` element is rendered.
- The data prop is mapped using the `map()` method to render an `<li>` element for each item in the array.
- For each item, its `title` is rendered.
- The component checks if the item has children by looking at the `children` property and ensuring it has a length greater than 0.
- If the item has children, a new instance of the `RecursiveComponent` is rendered and passed the child data as a prop.
- The rendered list of items is returned as the result of the component.
- By calling itself recursively, the `RecursiveComponent` is able to render nested data structures of arbitrary depth. The base case of the recursion is when an item has no children, at which point the component simply returns the rendered list without rendering any further instances of itself.

Note that when using recursive components, it's important to include a base case to avoid infinite recursion and stack overflow errors. In the example above, the base case is when an item has no children, at which point the component simply returns the rendered list without rendering any further instances of itself.

## Using map() vs Recursive Component

[map](/javascript/array/map/) and recursion are two different concepts in React that can be used in different ways to achieve similar results.

[map](/javascript/array/map/) is a higher-order function in JavaScript that is commonly used in React to render a list of items as a set of components. It iterates over an array and returns a new array with the results of calling a provided function on each element in the original array. This can be useful for rendering a list of components, where each component is based on an item in the original array.

On the other hand, recursion is a technique where a function calls itself within its own code block. This can be useful for tasks that require repetitive or iterative processes, such as traversing a tree-like data structure or rendering nested components.

Let's take an example of TODO List :

```js
const todos = [
  {
    id: 1,
    title: "Todo List",
    items: [
      {
        id: 2,
        title: "Create Todo Form",
      },
      {
        id: 3,
        title: "Create Tree View",
        items: [
          {
            id: 4,
            title: "Create recursive component",
          },
          {
            id: 5,
            title: "Import recursive component",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Testing",
    items: [
      {
        id: 2,
        title: "Test Todo Form",
      },
      {
        id: 3,
        title: "Test Tree View",
      },
    ],
  },
];
```

### Using map() method

Although `map()` is a powerful and commonly used method to render lists in React, it may not always be the best solution when dealing with deeply nested or hierarchical data structures. Using recursion in this case can be more appropriate and offer some benefits over using `map()`.

```js
<ul>
  {todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title}
        {todo.items && todo.items.length ? ( // check if todo has subtask items
          <ul className="pl-4">
            {todo.items.map((sub) => {
              // map subtask items
              return (
                <li key={sub.id}>
                  {sub.title}
                  {sub.items && sub.items.length ? ( // check if subtask has sub-subtask tod
                    <ul className="pl-4">
                      {sub.items.map((subsub) => {
                        // map sub-subtask
                        return <li key={subsub.id}>{subsub.title}</li>;
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        ) : null}
      </li>
    );
  })}
</ul>
```

Now, you have something like this :

![Todo List](../img/todo.png)

This example demonstrates a scenario where `map()` is used to render a todo list with sub-tasks and sub-sub-tasks. While this can work, it can quickly become complex and difficult to read and maintain as the level of nesting increases.

### Using Recursive Component

Using recursion in this case can simplify the code and make it more readable. Here's an example of how the same todo list could be rendered using a recursive component:

```js
const TodoListRecursive = ({ todos }) => {
  return (
    <ul className="pl-4">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title}
            {todo.items && todo.items.length ? (
              <TodoListRecursive todos={todo.items} />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};
```

Using recursive component in this example makes the code simpler and more maintainable by removing the need for nested `map()` functions and reducing the amount of conditional logic. It also allows for greater flexibility in how the todo list is structured and nested.

In summary, while `map()` is a powerful method for rendering lists in React, it may not always be the best solution for deeply nested or hierarchical data structures. Using recursion can simplify the code and make it more maintainable in these cases.
