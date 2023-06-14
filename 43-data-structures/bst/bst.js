class BST {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // we should check if the tree is empty
        if (this.key === null) { //making a root node
            this.key = key;
            this.value = value;
        } else if (key < this.key) { //check if we need to go left
            //check if we can't go left
            if (!this.left) {
                //we need to set the new BST here
                this.left = new BST(key,value,this)
            } else {
                //there is a left child so make a recursive call
                this.left.insert(key, value)
            }
        } else { // check right
            if (this.right === null) {
                this.right = new BST(key,value,this)
            } else {
                this.right.insert(key, value)
            }
        }
        return this;
    }
}

let BTS = new BST(5,5)
BTS.insert(2,2).insert(1,1)
console.log(BTS);