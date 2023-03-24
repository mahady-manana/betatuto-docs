---
tag: "typescript"
slug: "/typescript/interfaces"
date: "2023-03-09"
title: "TypeScript Interfaces"
description: "Learn how to use interfaces in TypeScript to define object shapes and contract requirements"
category: "Get Started"
order: 4
prevPath: /typescript/basic-types
nextPath: /typescript/functions
githubPath: "/typescript/GetStarted/Interfaces.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


**TypeScript interfaces** define a contract that a variable or function must conform to. They allow you to define custom types that can be used throughout your codebase.

An interface can define a set of properties and their types, as well as optional properties, readonly properties, and index signatures.


Here's an example of an interface defining a simple Person type:

```ts
interface Person {
  name: string;
  age: number;
  address?: string;
  readonly id: number;
}
```
In this example, we define a `Person` interface with the following properties:

- `name`: a required string property
- `age`: a required number property
- `address`: an optional string property
- `id`: a required readonly number property


We can use this interface to define variables or parameters that must conform to this contract:

```ts
function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

let john: Person = { name: "John", age: 30, id: 1 };
let jane: Person = { name: "Jane", age: 25, address: "123 Main St", id: 2 };

console.log(greet(john)); // output: "Hello, John!"
console.log(greet(jane)); // output: "Hello, Jane!"
```

## Extends Interfaces

Interfaces can also be extended to create new interfaces that inherit the properties of existing interfaces:

```ts
interface Employee extends Person {
  jobTitle: string;
  salary: number;
}

let bob: Employee = { name: "Bob", age: 45, id: 3, jobTitle: "Manager", salary: 100000 };
```

## Nested Interfaces & Types With Interfaces

TypeScript allows you to use types with interfaces to define more complex data structures. You can also define interfaces within interfaces, known as nested interfaces.

Here's an example of using types with interfaces:

```ts
type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}
```

We can also define nested interfaces, like this:

```ts
interface Contact {
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
}
```

Using types with interfaces and defining nested interfaces can help you create more complex and organized data structures in your TypeScript code.



TypeScript interfaces provide a powerful way to define custom types that can be used throughout your codebase, and help ensure that your code is type-safe and free of errors.


## Notes

- Interfaces can be used to define the shape of objects, functions, classes, and more.
- Interface properties can be optional using the `?` modifier.
- Interface properties can be readonly using the `readonly` modifier.
- Interface properties can have index signatures, which allow you to define a pattern for additional properties that may be present on an object.
- Interface methods can be defined using function signatures.
- Interfaces can be extended using the `extends` keyword to create new interfaces that inherit properties and methods from existing interfaces.
- You can use types with interfaces to define more complex data structures, and define nested interfaces to create more organized and structured code.
- It's a good practice to use interfaces to define the shape of your data and functions, as it helps make your code more readable and easier to maintain.






