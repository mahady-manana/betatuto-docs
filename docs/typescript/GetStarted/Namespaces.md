---
tag: "typescript"
slug: "/typescript/namespaces"
date: "2023-02-28"
title: "TypeScript Namespaces"
description: "Namespaces provide a way to organize code into logical groups and avoid naming collisions."
category: "Get Started"
order: 10
githubPath: "/typescript/GetStarted/Namespaces.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

In TypeScript, **namespaces** provide a way to organize code into logical groups and avoid naming collisions. A namespace is simply a container for variables, functions, classes, and other types of code.

To define a namespace in TypeScript, use the namespace keyword followed by the name of the namespace, like this:

```typescript
namespace MyNamespace {
  export const myVariable = "hello";
  export function myFunction() {
    console.log("hello");
  }
}
```

In this example, we define a namespace called `MyNamespace` that contains a variable and a function. Note the use of the `export` keyword, which makes the members of the namespace visible outside of the namespace.

To use the members of a namespace from another part of your code, you can use the dot notation to access them, like this:

```typescript
console.log(MyNamespace.myVariable);
MyNamespace.myFunction();
```
You can also alias a namespace to a shorter name using the `import` statement, like this:

```typescript
import ns = MyNamespace;
console.log(ns.myVariable);
ns.myFunction();
```
Namespaces can be nested inside other namespaces to create a hierarchical structure, like this:

```typescript
namespace OuterNamespace {
  export namespace InnerNamespace {
    export const myVariable = "hello";
  }
}
```

In this example, we define a namespace called `OuterNamespace` that contains a nested namespace called `InnerNamespace`. Note that the `export` keyword must be used for both namespaces in order to make their members visible outside of the namespace.

Finally, it's worth noting that namespaces are often used in conjunction with modules in TypeScript. By defining namespaces inside modules, you can create a logical structure for your code that makes it easier to manage and avoid naming collisions.





