---
tag: "javascript"
slug: "/javascript/array/constructors"
date: "2023-03-09"
title: Array Constructors
description: "Array() constructor is used to create a new array object. The Array() constructor can be used in two ways."
category: "Array Methods"
order: 2
prevPath: /javascript/array
nextPath: /javascript/array/concat
githubPath: /javascript/Array/ArrayConstructors.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" },{ label: "Array Methods", slug: "/javascript/array" }]
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


In JavaScript, the Array() constructor is used to create a new array object. The Array() constructor can be used in two ways:

**Array() with no arguments**

This creates an empty array with no elements.

```javascript
const arr = new Array();
```

**Array() with one or more arguments**

This creates an array with one or more elements. The elements can be of any data type, and they are separated by commas inside the parentheses.

```javascript
const arr = new Array(element1, element2, ..., elementN);
```


**Alternatives**

Alternatively, you can also create an array using array literal notation, which is a shorthand way of creating an array without using the Array() constructor.

```javascript
const arr = [element1, element2, ..., elementN];
```

> Both methods are valid and have the same result.

It's important to note that the Array() constructor can also be used to set the length of an array. For example, if you pass a single argument to the Array() constructor, that argument is treated as the length of the array.

```javascript
const arr = new Array(5); // creates an array with a length of 5, but no elements
```


> Array() constructor is a useful tool for creating and initializing arrays in JavaScript. However, the array literal notation is often preferred because it is shorter and easier to read.



## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Array/ArrayConstructors.md" target="_blank">Edit this page on Github</a>

