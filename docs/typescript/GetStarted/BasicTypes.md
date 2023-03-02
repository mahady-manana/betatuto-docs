---
tag: "typescript"
slug: "/typescript/basic-types"
date: "2023-02-28"
title: "TypeScript Basic Types"
description: "Learn about the basic data types in TypeScript"
category: "Get Started"
order: 3
githubPath: "/typescript/GetStarted/BasicTypes.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview

TypeScript provides several **basic types** that you can use to define variables, function parameters, and return values.



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


## `boolean`

The **`boolean`** type represents a boolean value, which can be either `true` or `false`.

Here's an example:

```ts
let isDone: boolean = false;
const isFinished: boolean = true;
```

## `number`

The **`number`** type represents a numeric value, which can be an integer or a floating-point number.

Here's an example:

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## `string`

The **`string`** type represents a string of characters, such as a word or sentence.

Here's an example:

```typescript
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
```

## `array`

The **`array`** type represents a list of values, all of the same type. You can define an array in TypeScript using the square bracket syntax (`[]`), or using the `Array` keyword.

Here's an example:

```typescript
let list: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "orange"];
```

## `tuple`

The `tuple` type represents an array with a fixed number of elements, where each element may have a different type.

Here's an example:

```typescript
let x: [string, number];
x = ["hello", 10];
```

## `enum`

The **`enum`** type represents a set of named constants.

Here's an example:

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

## `any`

The **`any`** type represents any type, and can be used when you don't know or don't care about the type of a value.

Here's an example:

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## `void`

The **`void`** type represents the absence of a value, and is typically used as the return type of a function that doesn't return anything.

Here's an example:

```ts
function warnUser(): void {
  console.log("This is a warning message");
}
```

## `null` and `undefined`

The **`null`** and **`undefined`** types represent null and undefined values, respectively.

Here's an example:

```ts
let u: undefined = undefined;
let n: null = null;
```

These are some of the most commonly used basic types in TypeScript. By using these types, you can add type annotations to your variables, function parameters, and return values, and ensure that your code is type-safe and free of errors.

## Notes

- TypeScript has several built-in basic types, including `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `any`, `unknown`.
- You can use the `any` type to indicate that a variable or function can have any type.
- You can use the `unknown` type to represent values whose type is unknown at compile-time, and use type guards or type assertions to narrow down the type to a more specific type.
- You can use type annotations to specify the type of a variable, function parameter, or return value.
- You can use type inference to let TypeScript automatically infer the type of a variable or function parameter based on its value.
- You can use union types and intersection types to combine multiple types into a single type.
- You can use type aliases and type literals to create named or anonymous types that can be reused throughout your code.
- It's important to use types correctly and consistently in your code to avoid type errors and make your code more maintainable and robust.
