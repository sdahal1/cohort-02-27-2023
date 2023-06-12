// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(items) {
        this.head = null;

        items.forEach(item => this.push(item));
    }

    push(item) {
        if (this.head === null) {
            this.head = new Node(item, null);
            return;
        }

        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = new Node(item, null);
    }

    show() {
        let node = this.head;
        while (node !== null) {
            process.stdout.write(`${node.value}, `);
            node = node.next;
        }
        process.stdout.write("\n");
    }

    insertSorted(value) {
        const newNode = new Node(value, null);
        //check if linked list is empty
        if (this.head === null) {
            // this.head = new Node(value, null)
            this.head = newNode;
        }
        //do i need to put it in front
        if (value < this.head.value) {
            newNode.next = this.head;
            this.head = newNode;
        }

        let traversalNode = this.head;
        while (traversalNode.next && traversalNode.next.value < value ) {
            traversalNode = traversalNode.next;
        }
        //update the pointers 
        newNode.next = traversalNode.next;
        traversalNode.next = newNode;
    }
}
//                                  8
let l = new LinkedList([1, 3, 5, 6, 7, 9]);
l.insertSorted(8);
l.show(); // 1, 3, 5, 6, 7, 8, 9



// class Student {
//     constructor(inputName) {
//         this.name = inputName;
//         this.isCool = true;
//     }

//     askQ(this) {
//         console.log(`${this.name} asked a question`);
//         console.log(this);
//         return this;
//     }
// }

// let jessica = new Student("jessica");
// let jacob = new Student("jacob");
// let chad = new Student("Chad");

// //     chad.askQ()
// chad.askQ(chad).askQ()
// // chad.askQ()
