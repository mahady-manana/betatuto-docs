---
tag: "typescript"
slug: "/typescript/functions"
date: "2023-03-09"
title: "TypeScript Functions"
description: "Learn how to write functions in TypeScript, including function signatures, overloading, and generics"
category: "Get Started"
order: 5
prevPath: /typescript/interfaces
nextPath: /typescript/type-inference
githubPath: "/typescript/GetStarted/Functions.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


**Functions** are an important part of any programming language, and TypeScript provides several features to help you write more robust and maintainable functions. In this guide, we'll cover the basics of TypeScript functions, including function signatures, parameter types, return types, optional parameters, default parameters, rest parameters, and more.



## Functions in TypeScript

Here's the basic syntax for defining a function in TypeScript:

```ts
function functionName(param1: type1, param2: type2, ...): returnType {
  // function body
  return returnValue;
}
```
## Function Signatures

In TypeScript, you can define the type of a function using a function signature. A function signature consists of the function name, a set of parameter names and types, and a return type. Here's an example:

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
```
You can also use function signatures with arrow functions, like this:

```typescript
const add = (a: number, b: number): number => {
  return a + b;
};
```

## Parameter Types

TypeScript allows you to specify the types of function parameters using type annotations. For example:

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
```
The name parameter has a type of `string`. This means that if you call the `greet` function with a value that isn't a string, TypeScript will raise a type error.

You can also specify optional parameters using the ? modifier:

```ts
function greet(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log(`Hello!`);
  }
}
```
You can call the `greet` function without passing any arguments. If you pass an argument, it must be a `string`.

## Return Types

You can also specify the return type of a function using a type annotation:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

The `add` function returns a value of type `number`. If the function doesn't return a value, you can use the `void` type:

```ts
function log(message: string): void {
  console.log(message);
}
```


## Optional Parameters

As we saw earlier, you can make function parameters optional using the ? modifier:

```ts
function greet(name?: string): void {
  // ...
}
```

The `name` parameter is optional, which means that you can call the `greet` function without passing any arguments. If you pass an argument, it must be a `string`.

## Default Parameters

You can also provide default values for function parameters:

```ts
function greet(name: string = 'World'): void {
  console.log(`Hello, ${name}!`);
}
```


## Notes

- TypeScript functions can have optional parameters, default parameters, and rest parameters just like JavaScript functions.

- When specifying the return type of a function, TypeScript ensures that the function returns a value of that type, or undefined if no return statement is present.

- TypeScript allows for function overloading, which means that a function can have multiple signatures that differ in the number or types of their parameters.

- Arrow functions in TypeScript behave similarly to their JavaScript counterparts, but they have some additional features like the ability to provide a concise syntax for one-liner functions and the ability to preserve the this context of the surrounding code.



