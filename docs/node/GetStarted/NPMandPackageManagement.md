---
tag: "node"
slug: "/node/npm-and-package-management"
date: "2023-03-09"
title: "NPM and Package Management"
description: "Node Package Manager (NPM) is a tool used for managing dependencies in Node.js applications."
category: "Get Started"
order: 4
prevPath: /node/core-modules
nextPath: /node/asynchronous-programming
githubPath: "/node/GetStarted/NPMandPackageManagement.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---

## Overview

Node Package Manager (NPM) is a tool used for managing dependencies in Node.js applications. With NPM, you can easily install, update, and remove packages from your project. In this guide, we will provide an overview of NPM and show you how to use it for managing packages in your Node.js projects.

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

## Installing NPM

NPM comes bundled with Node.js, so if you have Node.js installed on your system, you should also have NPM. To check if NPM is installed, run the following command in your terminal:

```batch
npm -v
```

This will display the version number of NPM that is currently installed on your system. If NPM is not installed, you can install it by following the instructions on the official NPM website.

## Package.json File

In order to use NPM for managing packages, you need to have a `package.json` file in your project directory. This file contains metadata about your project, as well as a list of all the packages that your project depends on. To create a `package.json` file, run the following command in your project directory:

```batch
npm init
```

This will prompt you for information about your project, such as the project name, version, description, author, and license. Once you have provided this information, NPM will create a `package.json` file in your project directory.

## Installing Packages

To install a package using NPM, you can use the `npm install` command followed by the name of the package. For example, to install the popular `lodash` package, run the following command:

```batch
npm install lodash
```

This will install the latest version of the `lodash` package in your project directory, and add it to the `dependencies` section of your `package.json` file.

## Updating Packages

To update a package to its latest version, you can use the `npm update` command followed by the name of the package. For example, to update the `lodash package`, run the following command:

```batch
npm update lodash
```

This will update the lodash package to the latest version, and update the dependencies section of your package.json file.

## Removing Packages

To remove a package from your project, you can use the `npm uninstall` command followed by the name of the package. For example, to remove the `lodash` package, run the following command:

```batch
npm uninstall lodash
```

This will remove the `lodash` package from your project directory, and remove it from the `dependencies` section of your `package.json` file.

## What we did in this section?

NPM is an essential tool for managing dependencies in Node.js applications. In this guide, we provided an overview of NPM and showed you how to use it for managing packages in your projects. By leveraging NPM, you can easily install, update, and remove packages from your projects, and ensure that your applications are always up-to-date with the latest versions of your dependencies.
