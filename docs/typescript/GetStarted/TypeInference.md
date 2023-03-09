---
tag: "typescript"
slug: "/typescript/type-inference"
date: "2023-03-09"
title: "TypeScript Type Inference"
description: "Type inference is the process by which the TypeScript compiler deduces the type of a variable or expression based on its usage in the code."
category: "Get Started"
order: 6
prevPath: /typescript/functions
nextPath: /typescript/generics
githubPath: "/typescript/GetStarted/TypeInference.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

TypeScript provides a powerful type system that allows for static typing and type checking. However, it also includes a feature called "type inference", which can automatically infer the type of a variable or expression based on the context in which it is used. This allows developers to write code that is both safe and concise.


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


## What is Type Inference?

Type inference is the process by which the TypeScript compiler deduces the type of a variable or expression based on its usage in the code. This means that you don't always have to explicitly declare the type of a variable, as the compiler can infer it for you.

## How Does Type Inference Work?

Type inference in TypeScript is based on the usage context of a variable or expression. The compiler looks at how a variable or expression is used in the code and deduces its type based on that usage.


## Contextual Typing

Contextual typing is a feature of TypeScript's type inference system that allows the type of an expression to be inferred based on its context. For example:

```typescript
const names = ['Alice', 'Bob', 'Charlie'];

// TypeScript infers names to be of type string[]
```

Contextual typing can also be used to infer the types of function parameters and return values based on the context in which the function is used

## Basic Type Inference

In many cases, TypeScript can infer the type of a variable based on its initial value. For example:

```typescript
const x = 3; // TypeScript infers x to be of type number
const y = "hello"; // TypeScript infers y to be of type string
```

TypeScript infers that `x` is a number because it is initialized with the number `3` and `y` is a string because it is initialized with the string `'hello'`.

## Type Inference with Functions

TypeScript can also infer the types of function parameters and return values based on the types of the arguments passed to the function and the type of the value returned from the function. For example:

```typescript
function add(x: number, y: number) {
  return x + y;
}

const result = add(3, 4); // TypeScript infers result to be of type number
```
TypeScript infers that the `add` function takes two parameters of type `number` and returns a value of type number. When we call the add function with the arguments `3` and `4`, TypeScript infers that the result of the function is also of type `number`.

## Type Inference with Objects

TypeScript can also infer the type of an object based on the shape of the object literal used to initialize it. For example:

```typescript
const person = {
  name: 'John',
  age: 30
};

// TypeScript infers person to be of type { name: string; age: number; }
```

TypeScript infers that the `person` object has a `name` property of type `string` and an `age` property of type `number`. We don't need to explicitly define the type of the person object; TypeScript can infer it from the shape of the object literal used to initialize it.

## Type Inference with Arrays

TypeScript can also infer the type of an array based on the type of its elements. For example:

```typescript
const numbers = [1, 2, 3, 4, 5];

// TypeScript infers numbers to be of type number[]

```
TypeScript infers that the `numbers` array contains elements of type `number`. We don't need to explicitly define the type of the `numbers` array; TypeScript can infer it from the types of the elements in the array literal.

## Type Inference with Union Types

TypeScript can also infer the type of a variable to be a union type if it is initialized with a value that can be of multiple types. For example:

```typescript
const value = Math.random() < 0.5 ? 'hello' : 42;

// TypeScript infers value to be of type string | number
```
TypeScript infers that the `value` variable can be of either type `string` or `number`, depending on the result of the `Math.random()` expression.

## Type Inference with Generic Functions

TypeScript's type inference system also supports generic functions, which can infer the types of their type parameters based on the types of their arguments and return values. For example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity('hello');

// TypeScript infers result to be of type string
```

## Type Inference with Conditional Types

TypeScript's type inference system also supports conditional types, which can infer types based on a condition. For example:

```typescript
type MyType<T> = T extends number ? string : boolean;

const result1: MyType<1> = 'hello';
const result2: MyType<'a'> = false;

// TypeScript infers result1 to be of type string
// TypeScript infers result2 to be of type boolean
```


## Type Inference with Type Assertions

TypeScript's type inference system also allows developers to manually override the inferred type of a variable using a type assertion. For example:

```typescript
const x = 'hello';

const y = (x as unknown) as number;

// TypeScript infers y to be of type number
```



## Limitations of Type Inference

While type inference can be a powerful tool for reducing code verbosity, it has some limitations. In some cases, TypeScript may not be able to infer the type of a variable