---
tag: "typescript"
slug: "/typescript/classes"
date: "2023-03-09"
title: "TypeScript Classes"
description: "Classes in TypeScript provide a way to define a blueprint for creating objects with shared state and behavior."
category: "Get Started"
order: 8
prevPath: /typescript/generics
nextPath: /typescript/namespaces
githubPath: "/typescript/GetStarted/Classes.md"
contributor: [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }, { name: "Haja", link: "https://twitter.com/Haja261M" }]
---


TypeScript is a superset of JavaScript, and as such, it supports all of the object-oriented programming (OOP) features that are available in JavaScript, including classes. **Classes in TypeScript** provide a way to define a blueprint for creating objects with shared state and behavior.


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


## Defining a Class in TypeScript

Here's an example of how to define a simple class in TypeScript:

```typescript
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```
In this example, we define a class `Animal` with a private `name` property and a `move` method. The constructor takes a `name` argument and assigns it to the `name` property.


## Creating Objects

Once we have defined a class, we can create objects from it using the new keyword:

```typescript
const dog = new Animal('Dog');
dog.move(10); // output: "Dog moved 10m."
```
We create a new instance of `Animal` called `dog` with the name `'Dog'`, and then call the `move` method with a distance of `10` meters.

## Inheritance

One of the key features of object-oriented programming is inheritance, and TypeScript supports inheritance through the use of the `extends` keyword.

```typescript
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

```
We define a class `Snake` that extends `Animal`. The `Snake` class overrides the `move` method to add some additional behavior before calling the `move` method on the base class using the `super` keyword.


## Access Modifiers

TypeScript supports **access modifiers** that can be used to control the visibility of class members. There are three access modifiers in TypeScript:

- `public`: The default modifier. Public members can be accessed from anywhere.
- `private`: Private members can only be accessed within the class that defines them.
- `protected`: Protected members can be accessed within the class that defines them and within any subclasses.

```typescript
class Animal {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

We define a class `Animal` with a private `name` property, a protected `age` property, and a public `move` method. The `name` property can only be accessed within the `Animal` class, while the `age` property can be accessed within the `Animal` class and any subclasses that inherit from it.

## Readonly Properties

TypeScript also supports **readonly properties**, which can only be set during object creation.

```typescript
class Animal {
  readonly species: string;

  constructor(species: string) {
    this.species = species;
  }
}
```

We define a class Animal with a `readonly` species property that can only be set during object creation. Once the object is created, the species property cannot be modified.

## Static Properties and Methods

In addition to instance properties and methods, TypeScript also supports **static properties** and **methods**, which belong to the class itself rather than any individual instance of the class.

To define a static property or method in TypeScript, you use the `static` keyword:

```typescript
class Animal {
  static numOfAnimals: number = 0;

  constructor() {
    Animal.numOfAnimals++;
  }

  static displayNumOfAnimals() {
    console.log(`There are currently ${Animal.numOfAnimals} animals.`);
  }
}
```

We define a static property `numOfAnimals` that keeps track of the number of `Animal` instances that have been created. We also define a static method `displayNumOfAnimals` that logs the current number of animals.

To access a static property or method, you use the class name instead of an instance of the class:

```typescript
console.log(Animal.numOfAnimals); // output: 0

const dog = new Animal();
console.log(Animal.numOfAnimals); // output: 1

const cat = new Animal();
console.log(Animal.numOfAnimals); // output: 2

Animal.displayNumOfAnimals(); // output: "There are currently 2 animals."
```
We create two instances of `Animal`, which increments the `numOfAnimals` static property. We then call the `displayNumOfAnimals` static method to log the current number of animals.

## Static vs. Instance Members

**Static members** and **instance members** serve different purposes, so it's important to understand the differences between them.

- Static members belong to the class itself, while instance members belong to each individual instance of the class.
- Static members can be accessed using the class name, while instance members can only be accessed using an instance of the class.
- Static members are shared among all instances of the class, while each instance of the class has its own set of instance members.


When deciding whether to use a static member or an instance member, consider whether the member belongs to the class itself or to each individual instance of the class. If the member belongs to the class itself, use a static member. If the member belongs to each individual instance of the class, use an instance member.



## Abstract Classes

An **abstract class** is a class that cannot be instantiated directly. Instead, you can only create instances of its subclasses. Abstract classes are useful for defining a common interface for a set of related classes, without providing a complete implementation.

To define an abstract class in TypeScript, you use the `abstract` keyword before the class name. You can also define abstract methods, which are methods that have no implementation in the abstract class, but must be implemented in any subclass.

Here's an example:

```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Hiss!");
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Neigh!");
  }

  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.makeSound();
tom.makeSound();
```

We define an `Animal` abstract class with a `name` property and an abstract `makeSound` method. The `makeSound` method has no implementation in the `Animal` class, but must be implemented in any subclass. We then define two subclasses, `Snake` and `Horse`, that implement the `makeSound` method in their own way. We also override the `move` method in the `Horse` class to add a galloping sound before calling the `move` method of the superclass.

When you define an abstract class, you can only create instances of its subclasses. In this example, we create an instance of the `Snake` class and an instance of the `Horse` class, both of which inherit from the `Animal` abstract class. We can call the `makeSound` method on both instances, even though it has no implementation in the `Animal` class, because it has been implemented in each subclass.


## Decorators

Decorators are a feature of TypeScript that allow you to add metadata to a class, method, or property. They are a way to annotate or modify classes and their members at design time.

To use a decorator, you add the decorator symbol `@` before the class, method, or property that you want to decorate. Decorators can be used to add functionality to a class or its members, such as logging, validation, caching, or authorization.

Here's an example of a simple decorator that logs the method name and its arguments:

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  }

  return descriptor;
}

class Calculator {
  @log
  add(x: number, y: number) {
    return x + y;
  }
}

const calc = new Calculator();

console.log(calc.add(2, 3));
```
We define a decorator `log` that takes three parameters: the class or object being decorated (`target`), the name of the property being decorated (`propertyKey`), and a property descriptor object (`descriptor`). The decorator modifies the method by logging the method name and its arguments before calling the original method.

We then apply the `@log` decorator to the `add` method of the `Calculator` class. When we call the add method on an instance of the `Calculator` class, the decorator logs the method name and its arguments before returning the result of the original method.

Note that decorators can also be used on classes and properties. Decorators can be chained together, so you can apply multiple decorators to the same class, method, or property.

Decorators are a powerful feature of TypeScript, but they should be used with caution, as they can add complexity to your code. It's important to understand how decorators work and to use them judiciously.

## Notes

- TypeScript classes support all the features of `ES6` classes, plus some additional features such as `public`, `private`, and `protected` access modifiers, `abstract` classes, and `static` properties and methods.

- In TypeScript, classes are primarily used for creating objects, whereas interfaces are used for defining types.

- Access modifiers can be used to restrict access to class members. Public members can be accessed from anywhere, private members can only be accessed within the class, and protected members can be accessed within the class and its subclasses.

- Constructors in TypeScript classes are defined using the `constructor` keyword. You can specify default values for parameters using the `=` operator.

- Inheritance is achieved using the `extends` keyword. You can also override methods and properties of the parent class in the child class using the super keyword.

- Abstract classes are useful for defining a common interface for a set of related classes, without providing a complete implementation. You can define abstract methods using the `abstract` keyword, which must be implemented in any subclass.
 - Static properties and methods belong to the class itself, rather than to its instances. You can define them using the `static` keyword.

- Decorators are a feature of TypeScript that allow you to add metadata to a class, method, or property. They are prefixed with the `@` symbol and are executed at runtime.

- Classes can also implement interfaces, which specify a set of methods and properties that the class must implement. This is useful for ensuring that a class conforms to a specific contract.