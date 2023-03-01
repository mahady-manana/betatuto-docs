---
tag: "typescript"
slug: "/typescript/"
date: "2022-11-24"
title: "Introduction To TypeScript"
description: TypeScript is a statically-typed superset of the JavaScript. TypeScript provides a more robust and scalable way to build large-scale applications.
category: "Get Started"
categoryOrder: 1
order: 0
githubPath: /typescript/GetStarted/Introduction.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview

**TypeScript** is a programming language built on top of JavaScript. It was developed and is maintained by Microsoft. TypeScript code is transpiled into JavaScript code that can run in any modern browser or JavaScript runtime.

The additional type checking and other features provided by TypeScript can help catch errors earlier in the development process and make code more maintainable and scalable. TypeScript also supports many of the features of the latest versions of JavaScript, including classes, arrow functions, and async/await syntax.

## JavaScript and TypeScript

As stated on the TypeScript official documentation :

> We frequently see the question “Should I learn JavaScript or TypeScript? - The answer is that you can’t learn TypeScript without learning JavaScript! TypeScript shares syntax and runtime behavior with JavaScript, so anything you learn about JavaScript is helping you learn TypeScript at the same time - <a href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html ">TypeScript Official Docs</a>, section *Learning JavaScript and TypeScript*

JavaScript is a dynamic scripting language, meaning that types are determined at runtime. TypeScript, on the other hand, is a static type-checking superset of JavaScript that allows developers to define types at compile time. TypeScript's type system helps catch errors at compile time rather than runtime, which can save time and prevent errors in large-scale projects.

TypeScript can be seen as an extension of JavaScript, with additional features such as interfaces, classes, and advanced types. These features can help improve code organization, maintainability, and scalability in large projects.

In conclusion, JavaScript and TypeScript have a close relationship, and learning one can help you learn the other. However, it's important to note that TypeScript is not a replacement for JavaScript, at least for now, but rather a tool that can help improve the quality and maintainability of JavaScript code.


## Quick examples of TypeScript codes

### Variables

```typescript
let message: string = "Hello, TypeScript!";
const MAX_NUM: number = 100;
```

### Function

```typescript
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(2, 3);
console.log(result); // Output: 5
```

### TypeScript Classes

```typescript
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("John");
console.log(person.sayHello()); // Output: Hello, my name is John
```

### TypeScript Interfaces

```typescript
interface User {
  username: string;
  email: string;
  age?: number;
}

function registerUser(user: User): void {
  console.log(`Registering user ${user.username} with email ${user.email}`);
}

const newUser = {
  username: "johndoe",
  email: "johndoe@example.com",
  age: 30,
};

registerUser(newUser); // Output: Registering user johndoe with email johndoe@example.com
```

### TypeSCript Types

```typescript
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const product: Product = {
  name: "Shoes",
  price: 50,
  inStock: true,
};

console.log(product.name); // Output: Shoes
```

## Why TypeScript?

TypeScript offers several advantages over traditional JavaScript development. One of the primary benefits of TypeScript is that it provides optional static typing, which helps catch errors at compile-time rather than runtime. Additionally, TypeScript supports class-based object-oriented programming, which can help developers build more robust and maintainable code.

### Advantages of TypeScript:

- **Type safety**: TypeScript allows developers to add optional static typing to their code, which helps catch errors before runtime. This can save time and prevent errors in large-scale projects.

- **Improved code organization**: With TypeScript, developers can use classes and modules to organize their code into reusable and maintainable structures. This can make it easier to collaborate on large-scale projects and improve code quality.

- **Enhanced developer experience**: TypeScript includes features such as IntelliSense, which provides real-time feedback and suggestions as developers write code. This can help developers write code faster and with fewer errors.

- **Strong community support**: TypeScript is widely used and has a strong community of developers who contribute to its ongoing development and maintenance. This can provide developers with access to a wealth of resources and tools to help them build better applications.

- **Seamless integration**: TypeScript can be seamlessly integrated into existing JavaScript projects, allowing developers to gradually adopt its features as needed. This makes it easy for developers to start using TypeScript without having to completely rewrite their codebase.
