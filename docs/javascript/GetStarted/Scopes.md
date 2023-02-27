---
tag: "javascript"
slug: "/javascript/scopes"
date: "2023-02-27"
title: JavaScript Scopes
description: Scope in JavaScript refers to the accessibility and visibility of variables within a program."
category: "Get Started"
order: 5
githubPath: /javascript/GetStarted/Scopes.md
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


## Overview.

**Javascript scopes** refer to the visibility and accessibility of variables and functions within a program. Understanding scopes is crucial for writing efficient and maintainable code. 

Javascript has different type of scope including:

- Global scope
- Function scope
- Local scope
- Module scope.
- Block Scope

## Global Scope

Variables and functions declared outside of any block or function are considered to be in the **global scope**. Global variables are accessible from any part of the program

```javascript
let x = 10; // Global scope

function foo() {
  console.log(x); // 10
}

foo();
console.log(x); // 10

```

> Using Global variables can be convenient but also risky. Any part of the program can modify or overwrite global variables, which can lead to unexpected behavior.

> To avoid naming conflicts and unexpected behavior, it is generally recommended to limit the use of global variables.


## Function Scope


Variables declared inside a function are only accessible within that function. **Function scope** variables are helpful to prevent naming conflicts and make the code more modular and easier to maintain.

```javascript
function foo() {
  var x = 10; // Function scope
  console.log(x); // 10
}

foo();
console.log(x); // ReferenceError: x is not defined
```


## Module scope

**Module scope** refer to a variables declared in a module. Variables declared in a module is accessible only in that module.

To use a variable declared in a module must be exported with the keyword `export` and imported to the code that need that variable.

```javascript
// module-A.js

const randomNumber =  Math.floor(Math.random() * 10)


// module-B.js

console.log(randomNumber) // ReferenceError: randomNumber is not defined

```
To make `randomNumber` accessible in `module-B.js`. It must be exported first, then imported.

```javascript
// module-A.js

const  randomNumber =  Math.floor(Math.random() * 10)

export default randomNumber // default export
// or
export { randomNumber } // named export


// module-B.js
import randomNumber from "./module-A" // if default exported
// or
import { randomNumber } from "./module-A" // if named exported

console.log(randomNumber) // 5 // 6 // 7 or whatever random number
```


## Local scope


All variables declared inside a function become local to the function.

```javascript
function fooBar () {
    const foo = "Foo"
    console.log(foo) // "Foo"
}
console.log(foo) // // ReferenceError: foo is not defined

```


## Block scope


ES6 (ECMAScript2015) introduced two keyword to declare variable in JavaScript : `const` and `let`.

`const` and `let` have **Block scope**. Variable declared with these keywords inside a `{}` block is only accessible within that block.


```javascript
{
    const greet = "Hey!"
    let greet_2 = "Hey!"
}

// both greet and greet_2 cannot be used here

{
    var legancyHey = "Hey!"
}

// you can access legancyHey here

```


> <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/GetStarted/Scopes.md" target="_blank">Want to improve content & add missing information, open issue on Github</a>
