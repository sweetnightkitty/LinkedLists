function createNode() {
    return {
        value: null,
        next: null,
    };
}

function createLinkedList() {
    return {
        firstNode: null, //by default

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
myList.append("john");
myList.append("billy");
myList.append("susan");
myList.print();
