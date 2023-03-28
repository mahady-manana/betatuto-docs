---
tag: "howto"
slug: "/howto/javascript/linked-lists-in-javascript"
date: "2023-03-25"
# updatedAt: "2023-03-09"
title: "Linked Lists In JavaScript"
description: "A linked list is a linear data structure consisting of nodes that are connected to each other through pointers. Unlike arrays, linked lists do not have a fixed size and can be dynamically resized during runtime."
category: "How-To"
# categoryOrder: 1
topic: Data Structures
language: JavaScript
order: 11
githubPath: /javascript/09-FlattenArray.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

In JavaScript, a **linked list** is a linear data structure consisting of nodes that are connected to each other through pointers. Unlike arrays, linked lists do not have a fixed size and can be dynamically resized during runtime. Linked lists are commonly used to implement various abstract data types such as stacks, queues, and hash tables.

Common use cases for linked lists include implementing stacks and queues, representing sparse matrices, and storing data in memory-constrained environments.

Singly linked lists have nodes that only reference the next node in the sequence, while doubly linked lists have nodes that reference both the next and previous nodes.


To follow this How-To Guide for Linked Lists, you should have a basic understanding of JavaScript programming language, including [objects](/javascript/js-object/), [class](/javascript/classes/) and [functions](/javascript/function/). You should also have some knowledge of data structures and algorithms, particularly linked lists. It would be helpful if you have some experience working with other data structures such as arrays and objects.



## Singly Linked List

### Creating a singly linked list

To create a linked list in JavaScript, you can define a Node class with a value and next (and/or prev) property, and use it to create a linked list by creating a head node that points to the first node in the sequence.

```js
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);

// LinkedList {
//   head: Node { value: 1, next: Node { value: 2, next: [Node] } },
//   tail: Node { value: 3, next: null },
//   length: 3
// }
```

This example shows how to create a singly linked list in JavaScript by defining a `LinkedList` class and implementing methods to add nodes to the list.

### Traversing a singly linked list

Traversing a linked list involves iterating through the nodes in the sequence, starting from the head node and following the next (and/or prev) pointers until you reach the end of the list.

```js
class LinkedList {
  // ...
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.traverse(); // 1 2 3
```

This example demonstrates how to traverse a singly linked list in JavaScript by defining a `LinkedList` class and implementing a method to traverse the list and log each node's value.

### Inserting a node in a linked list

```js
class LinkedList {
  // ...
  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds');
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;
  }
}


const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insert(1, 4);
list.traverse(); // 1 4 2 3
```

This example shows how to insert nodes into a singly linked list in JavaScript by defining a `LinkedList` class and implementing methods to insert nodes at the beginning, end, and middle of the list.

### Deleting a node from a linked list

```js
class LinkedList {
  // ...
  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
      if (index === this.length - 1) {
        this.tail = current;
      }
    }
    this.length--;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.delete(1);
list.traverse(); // 1 3
```

This example demonstrates how to delete nodes from a singly linked list in JavaScript by defining a `LinkedList` class and implementing methods to delete nodes at the beginning, end, and middle of the list.


## Doubly Linked List in JavaScript

This implementation includes the necessary methods for inserting, removing, and traversing a doubly linked list. The `DoublyLinkedList` class has a head and tail property to keep track of the first and last nodes in the list, respectively. Each node has a prev and next property to reference the previous and next nodes in the list. The append, prepend, insert, and remove methods all take care of updating these properties as needed to maintain the integrity of the list.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    if (index === this.length) {
      this.append(data);
      return true;
    }

    const newNode = new Node(data);
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      let count = 0;

      while (count < index) {
        current = current.next;
        count++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length--;

    return current.data;
  }

  printList() {
    let current = this.head;
    let result = "";

    while (current) {
      result += `${current.data} -> `;
      current = current.next;
    }

    result += "null";

    console.log(result);
  }
}

const list = new DoublyLinkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.insert(2, 1.5);
list.remove(1);

list.printList(); // Output: 0 -> 1.5 -> 2 -> null
```
## Extends A Linked List

To extend a linked list, you can create a subclass that inherits from the original linked list class and add new methods or override existing ones. Here is an example of extending a singly linked list class to add a reverse method that reverses the order of the linked list:

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // other methods...

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

class SinglyLinkedListExtended extends SinglyLinkedList {
  constructor() {
    super();
  }

  // new methods...
}
```

In the example above, we create a new class `SinglyLinkedListExtended` that extends the `SinglyLinkedList` class. The `SinglyLinkedListExtended` class has access to all of the properties and methods of `SinglyLinkedList`, and can add new methods or override existing ones.

For instance, we could add a `filter` method to `SinglyLinkedListExtended` that returns a new linked list with only nodes that pass a given test:

```js
class SinglyLinkedListExtended extends SinglyLinkedList {
  constructor() {
    super();
  }

  filter(callback) {
    const filteredList = new SinglyLinkedListExtended();
    let node = this.head;
    while (node !== null) {
      if (callback(node.value)) {
        filteredList.push(node.value);
      }
      node = node.next;
    }
    return filteredList;
  }
}
```

In the example above, we add a `filter` method that creates a new linked list `filteredList`, iterates over the nodes in the original linked list, and pushes the value of nodes that pass the given test to `filteredList`.

By extending a linked list, you can add new functionality to it while still retaining the original functionality of the superclass.

## Singly vs Doubly Linked List

A linked list is a data structure that consists of a sequence of elements, where each element contains a reference to the next element in the sequence. In a singly linked list, each element contains a reference to the next element in the sequence, while in a doubly linked list, each element contains references to both the next and previous elements in the sequence.

Singly linked lists are simpler and more memory-efficient than doubly linked lists because they only store a single reference to the next element, while doubly linked lists need to store references to both the next and previous elements. However, this simplicity comes at a cost: singly linked lists can only be traversed in one direction, from the beginning to the end, while doubly linked lists can be traversed in both directions, from the beginning to the end and from the end to the beginning.

The choice between using a singly or doubly linked list depends on the specific needs of the application. If the application requires only forward traversal of the list, a singly linked list may be the best choice. If the application requires bidirectional traversal or frequent insertions and deletions at arbitrary positions in the list, a doubly linked list may be a better choice.