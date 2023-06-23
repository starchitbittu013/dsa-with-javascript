class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    }

    appendNode(nodeValue) {
        const newNode = {
            value: nodeValue,
            next: null
        };

        this.tail.next = newNode;
        this.tail = newNode;

        this.size += 1;
    }

    traversing() {
        let i = 0;
        let current = this.head;
        while (i < this.size) {
            console.log(current);
           current = current.next;
            i++;
        }
    }

    removeNode(index) {
        let i = 1;
        let lead = this.head;
        if (index === 1) {
            this.head = this.head.next;
        } else {
            while (i < index - 1) {            
                lead = lead.next;  
                i++;              
            }
            // Next Node of the Node which needs to be deleted
            let nextNode = lead.next.next;
            lead.next = nextNode;
        }                
        console.log(lead);
    }

    appendNodeAtIndex(nodeValue, index) {
        let i = 1;
        let currentNode = this.head;
        
        // Check if index is out of bounds
        if (index < 0 || index > this.size) {
            console.log('Index is out of bounds.');
            return;
        }

        // If index is 1, update head directly
        if (index === 1) {
            const newNode = {
                value: nodeValue,
                next: this.head
            };
            this.head = newNode;
            this.size++;
            return;
        }

        while (i < index) {       
            currentNode = currentNode.next;
            i++;
        }
        let nextNode = currentNode.next;
        currentNode.next = {
            value: nodeValue,
            next: nextNode
        };
        
        console.log(currentNode);
    }

    searchNode(value) {
        let i = 1;
        let currentNode = this.head;
        while (i < this.size) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
            i++;
        }
        return undefined;
    }
};

const linkedList = new LinkedList(100);

// Add a Node to Linked List

linkedList.appendNode(200);
linkedList.appendNode(300);
linkedList.appendNode(400);
linkedList.appendNode(500);
linkedList.appendNode(600);
//console.log(linkedList);

// Traverse the Linked List

// linkedList.traversing();
// console.log(linkedList);

// Remove a Node in Linked List
// linkedList.removeNode(4);
// console.log(JSON.stringify(linkedList));

// Append Node at a Index in the Linked List

// linkedList.appendNodeAtIndex(150, 1);
// linkedList.appendNodeAtIndex(50, 3);
// console.log(JSON.stringify(linkedList));

// Search a Node in the Linked List

// Search by Value
//console.log(linkedList.searchNode(200));
//console.log(linkedList.searchNode(900));
// console.log(JSON.stringify(linkedList));