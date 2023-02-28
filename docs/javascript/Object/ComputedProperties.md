---
tag: "javascript"
slug: "/javascript/object/computed-properties"
date: "2022-11-24"
title: Computed Properties
description: Computed properties allow you to create object properties whose names are dynamically computed at runtime.
category: "Advanced Javascript Object"
order: 24
githubPath: /javascript/Object/ComputedProperties.md
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Overview.

**Computed properties in JavaScript** allow you to define object properties dynamically using expressions as the property key. The property key is computed at runtime, based on the result of the expression. Computed properties are a powerful feature that can be used to create flexible and dynamic objects.

## Syntax

The syntax for defining a computed property in JavaScript is as follows:

```javascript
const objectName = {
  [expression]: value,
};
```

In this syntax, `expression` is any JavaScript expression that evaluates to a string, and `value` is the value assigned to the computed property.

### Examples

```javascript
const fruit = {
  name: "apple",
  ["color" + Math.floor(Math.random() * 3)]: "red",
};

console.log(fruit.color0); // output: "red"
```

## Use cases

Computed properties are useful in many scenarios where you want to create flexible and dynamic objects. Here are a few examples:

### Dynamic Property Names

Computed properties can be used to create object properties with dynamic names. For example, you might use a computed property to create a property with a name based on user input:

```javascript
const propertyName = "foo";
const obj = {
  [propertyName]: "bar",
};

console.log(obj.foo); // output: "bar"
```

### Dynamically Computed Properties

Computed properties can be used to create object properties with values that are dynamically computed at runtime. For example, you might use a computed property to create a property with a value based on the result of a function:

```javascript
const obj = {
  [Math.random() > 0.5 ? "foo" : "bar"]: "value",
};

console.log(obj.foo || obj.bar); // output: "value"
```

### Complex Object Creation

Computed properties can be used to create complex objects with nested properties. For example, you might use a computed property to create an object with nested properties based on user input:

```javascript
const propertyName1 = "foo";
const propertyName2 = "bar";
const obj = {
  [propertyName1]: {
    [propertyName2]: "value",
  },
};

console.log(obj.foo.bar); // output: "value"
```

## Notes

- Computed properties allow you to create object properties with dynamic keys that are computed at runtime.
- Computed properties are useful for creating flexible and dynamic objects.
- Computed properties can be used to create object properties with dynamic names or values that are computed at runtime.
- Computed properties can be used to create complex objects with nested properties.

## <a href="https://github.com/mahady-manana/betatuto-docs/tree/main/docs/javascript/Object/ComputedProperties.md}" target="_blank">Edit this page on Github</a>
