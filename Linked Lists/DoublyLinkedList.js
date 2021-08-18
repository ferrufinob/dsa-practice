class DoublyLinkedList {
  constructor(value) {
    // creating the very first linked list node
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // add at the beginning of head
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // check params

    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // check the params
    const leader = this.traverseToIndex(index - 1);

    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    const previous = leader.next;
    previous.prev = leader;
    console.log("HELLO", previous);

    this.length--;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.printList());

myLinkedList.remove(2);
// console.log(myLinkedList.printList());
