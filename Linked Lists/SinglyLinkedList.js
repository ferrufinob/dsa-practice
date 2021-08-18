// 1 --> 10 -->  99 --> 5 --> 16
// constructor holding head with value and next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// tail and length of list

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // append... insert last node

  append(value) {
    const newNode = new Node(value);
    // check to see if there is a head, if not make new value the head
    let currentNode;
    if (this.head === null) {
      this.head = newNode;
    } else {
      currentNode = this.head;

      //   iterate to end of list
      //   check if there is a next value
      //   .next is available on all nodes because they all got instantiated by new Node()
      while (currentNode.next) {
        //   traverse through the list
        currentNode = currentNode.next;
      }
      //   add new node
      currentNode.next = newNode;
    }
    this.length++;
    return this;
  }
  // prepend... add to beginning of linked list(will become the head)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // printList... array displaying our current linked list
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // insert... given an index, access said index and insert new value
  insert(index, value) {
    // if index if larger than linkedList lenght add the end of list
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      // if empty make it the head
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  // traverseToIndex... access an index
  traverseToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    console.log("head", this.head);
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // remove... remove value of an index
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverseToIndex(index - 1);
      console.log(leader);
      // the node we want to delere
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
    }

    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.prepend(1);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(0, 99);
console.log(myLinkedList.printList());

console.log("remove", myLinkedList.remove(2));
console.log(myLinkedList.printList());
