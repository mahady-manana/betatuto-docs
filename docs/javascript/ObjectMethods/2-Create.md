---
tag: "javascript"
slug: "/javascript/object/object-create"
date: "2023-03-13"
title: Object.create()
description: "Object.create() is a method that allows you to create a new object with a specified prototype object and optionally, additional properties."
category: "Object Methods"
order: 2
prevPath: /javascript/object/object-assign
nextPath: /javascript/object/object-values
githubPath: /javascript/ObjectMethods/2-Create.md
breadcrumb:
  [
    { label: "JavaScript", slug: "/javascript" },
    { label: "Object", slug: "/javascript/js-object" },
  ]
contributor:
  [
    { name: "Mahady Manana", link: "https://twitter.com/MahadyManana" },
  ]
---

**`Object.create()`** is a method that allows you to create a new object with a specified prototype object and optionally, additional properties.


## Syntax

```javascript
Object.create(proto);
Object.create(proto, propertiesObject);
```

### Parameter

- `proto`: The object that will be the prototype of the newly created object.
- `propertiesObject` (optional): An object containing properties to be added to the newly created object. Each property descriptor is defined as a key-value pair. The key is the property name and the value is an object that describes the property.

If `proto` is `null` or `undefined`, `Object.create()` will create a new object with no prototype.
The `propertiesObject` argument is optional. If it is not provided, the newly created object will have no properties other than those inherited from its prototype.
`propertiesObject` can be used to define properties using property descriptors.

### Return Value

`Object.create()` returns a new object with the specified prototype object and properties.
### Examples

**Example 1: Creating an object with a specified prototype**

```javascript
const animal = {
  type: "animal",
  describe() {
    console.log(`I am a ${this.type}.`);
  },
};

const dog = Object.create(animal);
dog.type = "dog";

dog.describe(); // Output: I am a dog.
```

**Example 2: Creating an object with additional properties**

```js
const person = {
  firstName: "John",
  lastName: "Doe",
};

const employee = Object.create(person, {
  jobTitle: { value: "Software Developer" },
  salary: { value: 50000 },
});

console.log(employee.firstName); // Output: John
console.log(employee.jobTitle); // Output: Software Developer
```

**Example 3: Creating an object without a prototype**

```js
const emptyObj = Object.create(null);
console.log(emptyObj.toString); // Output: undefined
```

## Notes

- The prototype chain can be as long as you need it to be. You can create an object with a prototype, and then create another object with the first object as its prototype, and so on.

- The `Object.create()` method is often used in conjunction with the `Object.defineProperty()` method to create objects with specific properties and attributes.

- When using `Object.create()` to create an object with a prototype, any changes made to the properties of the prototype object will affect all objects that inherit from it.

- `Object.create()` is often used as an alternative to the new keyword and constructor functions for creating objects in JavaScript.

- `Object.create()` is more flexible than using the new keyword and constructor functions because it allows you to create objects with any prototype, not just those created by constructor functions.

## Exercises

1. Create an object `car` with the properties `make`, `model`, and `year` using `Object.create()`. The make and model properties should be inherited from an `vehicle` object, and the `year` property should be set to the current `year` using the Date object.

2. Create an object `person` with the properties `firstName`, `lastName`, and `age` using `Object.create()`. The `firstName` and `lastName` properties should be inherited from a `human` object, and the `age` property should be set to the `age` of the person using the Date object and the person's birthdate.

3. Create an object `student` with the properties `firstName`, `lastName`, `age`, `major`, and `gpa` using `Object.create()`. The `firstName`, `lastName`, and `age` properties should be inherited from a `person` object, and the `major` and `gpa` properties should be set using `propertiesObject`.

<details>

<summary>Solutions</summary>

**Exercise 1:**

```js
fconst vehicle = {
  make: 'Toyota',
  model: 'Camry'
};

const car = Object.create(vehicle, {
  year: { value: new Date().getFullYear() }
});

console.log(car.make); // Output: Toyota
console.log(car.year); // Output: 2023
```

**Exercise 2:**

```js
const human = {
  firstName: 'John',
  lastName: 'Doe'
};

const person = Object.create(human, {
  age: { value: () => {
    const birthdate = new Date('1990-01-01');
    const now = new Date();
    const diff = now - birthdate;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }}
});

console.log(person.firstName); // Output: John
console.log(person.age()); // Output: 33
```

**Exercise 3:**

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 33
};

const student = Object.create(person, {
  major: { value: 'Computer Science' },
  gpa: { value: 3.8 }
});

console.log(student.firstName); // Output: John
console.log(student.major); // Output: Computer Science
console.log(student.gpa); // Output: 3.8
```

</details>
