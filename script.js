function createNode() {
    return {
        value: null,
        next: null,
    };
}

function createLinkedList() {
    return {
        firstNode: null, //by default

        lastNode: function() {
            let currentNode = this.firstNode;
            while(currentNode) {
                if(!currentNode.next) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        },

        head: function() {
            if(!this.firstNode) {
                console.log("List is empty");
            } else {
                console.log(this.firstNode.value);
            }
        },

        //Appends new value but no linking
        append: function(input) {
            let newNode = createNode();
            newNode.value = input;

            //If there is no value for head - this becomes the head/1st list item
            //Next remains null
            if(!this.firstNode) {
                this.firstNode = newNode;
                return;
            }

            //Otherwise if head is defined
            let currentNode = this.firstNode; //start with head
            while(currentNode.next) {
                //Essentially this will end on the last node with a next value
                //It will then define the currentNode as that final next value
                //Which is the final node (which has a next: null)
                //If only head is defined currentNode remains head
                currentNode = currentNode.next
            }
            //changes next value from null to the appended node
            //newNode already has a next:null value
            currentNode.next = newNode
        },

        tail: function() {
            let currentNode = this.firstNode;
            if(currentNode.next == null) {
                console.log(currentNode.value);
                return;
            }

            while(currentNode) {
                if(currentNode.next == null) {
                    console.log(currentNode.value);
                }
                currentNode = currentNode.next;
            }
        },

        size: function() {
            if(!this.firstNode) {
                console.log(0);
                return;
            }

            let currentNode = this.firstNode;
            let total = 0;
            while(currentNode) {
                total++;
                currentNode = currentNode.next;
            }
            return total;
        },

        pop: function() {
            const tail = this.lastNode();
            let currentNode = this.firstNode;
            while(currentNode) {
                if(currentNode.next == tail) {
                    currentNode.next = null;
                }
                currentNode = currentNode.next;
            }
        },

        contains: function(value) {
            let currentNode = this.firstNode;
            while(currentNode) {
                if(currentNode.value == value) {
                    return true;
                }
                currentNode = currentNode.next;
            }
            return false;
        },

        at: function(index) {
            let currentNode = this.firstNode;
            const length = this.size();

            for(let i = 0; i < length; i++) {
                if(i == index) {
                    return currentNode;
                }
                currentNode = currentNode.next;

            }
            return undefined;

        },


        print: function() {
            let currentNode = this.firstNode;
            while(currentNode) {
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        }


    }
}

const myList = createLinkedList();


