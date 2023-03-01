---
tag: "typescript"
slug: "/typescript/tooling-and-integration"
date: "2023-02-28"
title: "TypeScript Tooling and Integration"
description: "Learn about the tools and integrations available for TypeScript, including editors, linters, and build tools"
category: "Get Started"
order: 12
githubPath: "/typescript/GetStarted/ToolingandIntegration.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---


TypeScript is a popular language among developers, and as such, it is widely supported by tools and frameworks in the development ecosystem. In this section, we'll look at some of the most popular tools and frameworks that work well with TypeScript.

## TypeScript Compiler (tsc)

The TypeScript compiler (tsc) is the core tool for compiling TypeScript code into JavaScript. It can be installed globally using npm, and can be run from the command line or as part of a build process. The tsc compiler can output code in different formats, including ECMAScript 3 through 2021, and can also emit declaration files (.d.ts) that describe the shape of the code for use with type checking and editor tooling.

## TypeScript Language Service

The TypeScript language service provides rich language features and tooling for editors and IDEs. It can be integrated into editors like Visual Studio Code, Sublime Text, and Atom, and provides features like code completion, signature help, and diagnostics. The language service can also be used to create custom tooling, like code generators or refactoring tools.

## Webpack

Webpack is a popular module bundler that is widely used in modern web development. It can be configured to work with TypeScript using the `ts-loader` plugin, which allows you to import TypeScript modules directly into your JavaScript code. Webpack can also be used to bundle TypeScript code into a single file for deployment.

## Babel

Babel is a popular JavaScript transpiler that allows you to use the latest JavaScript features and syntax in your code. It can also be configured to work with TypeScript using the `@babel/preset-typescript` plugin. This plugin allows you to write TypeScript code that can be transpiled to JavaScript that is compatible with older browsers or environments that don't yet support the latest JavaScript features.

## Node.js

Node.js is a popular runtime environment for building server-side applications using JavaScript. Node.js has built-in support for TypeScript, and can be configured to run TypeScript code using the `ts-node` package. This package allows you to run TypeScript code directly in Node.js without the need to compile it first.

## Visual Studio Code

Visual Studio Code is a popular open-source editor that is widely used by developers. It has built-in support for TypeScript, including syntax highlighting, code completion, and debugging. Visual Studio Code also includes a built-in terminal and Git integration, making it a popular choice for TypeScript development.

## ESLint
ESLint is a popular JavaScript linter that can be configured to work with TypeScript using the `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` packages. These packages provide TypeScript-specific rules and configuration options that can help catch common mistakes and enforce best practices.


## Other Tools

There are many other tools and frameworks that work well with TypeScript, including Jest for testing, Angular and React for building web applications, and Nest.js for building server-side applications. With the popularity of TypeScript, new tools and frameworks are emerging all the time, making it an exciting language to work with.



