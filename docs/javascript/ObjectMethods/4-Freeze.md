---
tag: "javascript"
slug: "/javascript/object/object-freeze"
date: "2023-03-14"
title: Object.freeze()
description: "Object.freeze() is a method that freezes an object, making it immutable. This means that the properties of the object cannot be added, deleted, or modified."
category: "Object Methods"
order: 4
prevPath: /javascript/object/object-values
nextPath: /javascript/object/object-entries
githubPath: /javascript/ObjectMethods/4-Freeze.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [
    { name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }
  ]
---

**Object.freeze()** is a method that freezes an object, making it immutable. This means that the properties of the object cannot be added, deleted, or modified. All nested objects a is still mutable. 



## Syntax

```javascript
Object.freeze(obj)
```

### Parameter

- `obj`: The object to be frozen.

### Return Value

`Object.freeze()` returns the same object that was passed as a parameter after it has been frozen.

### Examples

**Example 1:**

```javascript
const obj = { x: 1, y: 2, z: 3 };
Object.freeze(obj);

obj.x = 5;
console.log(obj); // Output: { x: 1, y: 2, z: 3 }
```
In this example, `Object.freeze()` is used to freeze the `obj` object, making it immutable. When an attempt is made to modify the `x` property of the `obj` object, no changes are made to the object.

**Example 2:**

```js
const obj = { a: { b: 2 } };
Object.freeze(obj);

obj.a.b = 3;
console.log(obj); // Output: { a: { b: 3 } }
```

In this example, `Object.freeze()` is used to freeze the `obj` object, but the nested object `a` is still mutable. When an attempt is made to modify the `b` property of the `a` object, the object is modified successfully.


## Notes

- `Object.freeze()` makes an object read-only, but it does not make the properties of the object themselves read-only. If the properties of the object are objects, they can still be modified.

- If `Object.freeze()` is called on a non-object value, an error will be thrown.

- The `Object.isFrozen()` method can be used to determine whether an object is frozen or not.


## Exercises

1. Write a function that takes an object as an argument and returns a frozen version of the object.

2. Use `Object.freeze()` to create a constant object that cannot be modified.

3. Write a function that takes an array of objects as an argument and freezes all the objects in the array using `Object.freeze()`.


<details>

<summary>Solutions</summary>

**Exercise 1:**

```js
function freezeObject(obj) {
  return Object.freeze(obj);
}

const obj = { x: 1, y: 2, z: 3 };
const frozenObj = freezeObject(obj);

console.log(frozenObj); // Output: { x: 1, y: 2, z: 3 }
```

**Exercise 2:**

```js
const MY_CONSTANT = Object.freeze({ x: 1, y: 2, z: 3 });
```

**Exercise 3:**

```js
function freezeObjects(arr) {
  arr.forEach(obj => Object.freeze(obj));
}

const arr = [{ x: 1 }, { y: 2 }, { z: 3 }];
freezeObjects(arr);

arr[0].x = 5;
console.log(arr); // Output: [{ x: 1 }, { y: 2 }, { z: 3 }]
```

</details>
