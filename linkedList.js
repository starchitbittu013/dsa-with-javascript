// Construct Single Node
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
};


// Create/Get/Remove Nodes From Linked List
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert first node
    insertNode(data) {
      this.head = new Node(data, this.head);
      this.size++;
    }
};

const linkedListObject = new LinkedList();
linkedListObject.insertNode(100);
linkedListObject.insertNode(200);
linkedListObject.insertNode(300);

console.log(JSON.stringify(linkedListObject));