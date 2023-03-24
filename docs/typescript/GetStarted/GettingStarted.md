---
tag: "typescript"
slug: "/typescript/getting-started"
date: "2023-03-09"
title: "TypeScript Getting Started"
description: "Learn how to set up TypeScript in your project and start writing TypeScript code"
category: "Get Started"
order: 2
prevPath: /typescript/introduction
nextPath: /typescript/basic-types
githubPath: "/typescript/GetStarted/GettingStarted.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

Get Started with Typescript Today.




## Installation

To start using **TypeScript**, you'll need to install it on your machine. You can do this using a package manager like npm or yarn.

Before you can use npm or yarn, you need to install Node.js on your Machine.

Here are the steps to install TypeScript using npm (Node Package Manager) and yarn :

Open a command prompt or terminal window.

Run the following command to install TypeScript globally:

```js
// using npm
npm install -g typescript

// or using yarn
yarn add -g typescript
```

Verify that TypeScript has been installed by running the following command:

```
tsc --version
```

If everything is installed correctly, you should see the version of TypeScript that you just installed.

Now that TypeScript is installed, you can start writing TypeScript code.

## Write your first TypeScript code.

Open your editor and create a new file called `hello.ts` and add the following code:

```ts
function sayHello(name: string) {
  console.log(`Hello, ${name}!`);
}

let person = "World";
sayHello(person);
```

## Run your code

Open a command prompt or terminal window and navigate to the directory where you saved the hello.ts file.

Compile the TypeScript code into JavaScript by running the following command:

```js
tsc hello.ts
```

This will create a new file called `hello.js` in the same directory as the `hello.ts` file.

Run the `hello.js` file by running the following command:

```js
node hello.js
```

This will execute the JavaScript code and output the message "Hello, World!" to the console.

Congratulations, you've just written and executed your first TypeScript code! From here, you can explore more TypeScript features such as classes, interfaces, and advanced types. You can also use a TypeScript compiler like Webpack or Babel to integrate TypeScript into your web development workflow.

We recommand you to stared by [TypeScript Basic Types](/typescript/basic-types) before moving on to any topics.
