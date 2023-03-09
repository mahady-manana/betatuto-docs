---
tag: "react"
slug: "/react/installation-and-setup"
date: "2023-03-09"
title: "Installation and Setup"
description: "To get started with React, you'll need to set up a development environment. Learn how to install and setup React development environment."
category: "Get Started"
order: 2
prevPath: /react/introduction
nextPath: /react/reactjs-basics
githubPath: "/react/GetStarted/InstallationandSetup.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

To get started with React, you'll need to set up a development environment.

## Table of Contents

```toc
# This code block will gets replaced with the TOC
# Don't worry if it show in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 6
class-name: "table-of-contents"
```

## Install Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side. It also includes npm, which is a package manager that allows you to install and manage packages and libraries for your project.

You can download the latest version of Node.js from the <a href="https://nodejs.org/" target="_blank">Node.js Official website</a>
.

## Install a Code Editor

A code editor is an essential tool for writing and editing code. There are many code editors available, but some of the most popular ones for React development are Visual Studio Code, Atom, and Sublime Text.

You can download and install any of these code editors from their respective websites.

## Create a New React Project

In order to create a React project, there are many tools available to get Started.

### Using create-react-app

You can create a new React project using the <a href="https://create-react-app.dev/" target="_blank" rel="nofollow noopener noreferrer">create-react-app</a> tool. This tool sets up a basic React project with all the necessary dependencies and configurations.

To create a new project, open your command prompt or terminal and enter the following command:

```bash
npx create-react-app my-app
```

### Using TypeScript with create-react-app

```bash
npx create-react-app my-app --template typescript
```

Replace "`my-app`" with the name you want to give your project.

This command will create a new React project in a folder named "`my-app`". Once the project is created, navigate to the project folder by entering the following command:

```bash
cd my-app
```

Run the Development Server
To run the development server, enter the following command:

```bash
npm start
```

This command will start the development server and launch your project in the browser. You should see a basic React application with a header and some text.

### Alternatives

- <a href="https://www.gatsbyjs.com/" target="_blank" rel="nofollow noopener noreferrer">Gatsby</a>
- <a href="https://vitejs.dev/" target="_blank" rel="nofollow noopener noreferrer">Vite</a>
- <a href="https://parceljs.org" target="_blank" rel="nofollow noopener noreferrer">Parcel</a>
- <a href="https://nextjs.org/" target="_blank" rel="nofollow noopener noreferrer">Next.js</a>

Setting up a development environment for React can seem daunting at first, but it's actually a relatively simple process. By following the steps outlined in this documentation, you should be able to create a new React project and start developing your application in no time.

Once you have your development environment set up, you can start learning more about React and its many features and benefits. Happy coding!
