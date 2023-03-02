---
tag: "typescript"
slug: "/typescript/generics"
date: "2023-02-28"
title: "TypeScript Generics"
description: "Generics allow developers to create reusable code that can work with a variety of types, rather than a single specific type."
category: "Get Started"
order: 7
githubPath: "/typescript/GetStarted/Generics.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


TypeScript is a strongly-typed language that supports generics. **Generics** allow developers to create reusable code that can work with a variety of types, rather than a single specific type. This makes code more flexible and easier to maintain.


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


## Generic Functions

TypeScript supports the creation of generic functions, which can work with a variety of types. Here is an example of a generic identity function:

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```
`T` is a type parameter that can be replaced with any type at the time the function is called. The type parameter is specified between angle brackets `<>` immediately after the function name. The function takes a parameter `arg` of type `T`, and returns a value of type `T`.

We can call the identity function with any type:

```typescript
let output = identity<string>("myString");  // type of output will be 'string'
let output2 = identity<number>(123);  // type of output2 will be 'number'
```


## Generic Interfaces

TypeScript also supports the creation of generic interfaces. Here is an example of a generic interface:

```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}
```

We can create a variable of this interface type, and assign a function that matches the signature:

```typescript
let myIdentity: GenericIdentityFn<number> = identity;
```


## Generic Classes

TypeScript also supports the creation of generic classes. Here is an example of a generic class:

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
```
We can create an instance of this class with any type:

```typescript
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```


## Generic Constraints

TypeScript allows developers to impose constraints on the types that can be used with a generic type parameter. This can be done using the extends keyword. Here is an example:

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```
We define an interface `Lengthwise` with a single member `length` of type `number`. We then define a generic function `loggingIdentity` that takes a single argument of type `T`, which must extend `Lengthwise`. The function logs the length of the argument to the console, and returns the argument.

We can call this function with any argument that has a length property of type number:

```typescript
loggingIdentity("hello"); // logs "5"
loggingIdentity([1, 2, 3]); // logs "3"
loggingIdentity({ length: 10, value: 3 }); // logs "10"
```

### Using Type Parameters in Constraints

TypeScript also allows developers to use type parameters in generic constraints. Here is an example:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```
We can call this function with any object and property key:

```typescript
let x = { a: 1, b: 2, c: 3 };
getProperty(x, "a"); // returns 1
getProperty(x, "b"); // returns 2
getProperty(x, "c"); // returns 3
```

### Using Class Types in Constraints

TypeScript also allows developers to use class types in generic constraints. Here is an example:

```typescript
function create<T>(ctor: { new(): T }): T {
  return new ctor();
}
```

We can call this function with any constructor that has a zero-parameter constructor:

```typescript
class MyClass {
  constructor() {}
}

let myInstance = create(MyClass);
```