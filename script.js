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
                return "List is empty";
            } else {
                return this.firstNode.value;
            }
        },

        //Appends new value but no linking
        append: function(input) {
            let newNode = createNode();
            newNode.value = input;

            if(!this.firstNode) {
                this.firstNode = newNode;
                return;
            }

            let currentNode = this.firstNode;
            while(currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = newNode
        },

        prepend: function(input) {
            let newNode = createNode();
            newNode.value = input;

            if(!this.firstNode) {
                this.firstNode = newNode;
                return;
            }

            newNode.next = this.firstNode;
            this.firstNode = newNode;
        },

        tail: function() {
            let currentNode = this.firstNode;
            if(currentNode.next == null) {
                return currentNode.value;
            }

            while(currentNode) {
                if(currentNode.next == null) {
                    return currentNode.value;
                }
                currentNode = currentNode.next;
            }
        },

        size: function() {
            if(!this.firstNode) {
                return 0;
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

        find: function(value) {
            let currentNode = this.firstNode;
            const length = this.size();
            for(let i = 0; i < length; i++) {
                if(currentNode.value == value) {
                    return i;
                }
                currentNode = currentNode.next;
            }
            return null;
        },


        print: function() {
            let currentNode = this.firstNode;
            while(currentNode) {
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        },

        toString: function() {
            let currentNode = this.firstNode;
            let string = "";
            while(currentNode) {
                if(currentNode.next) {
                    const value = `( ${currentNode.value} ) -> `;
                    string += value;
                } else {
                    const value = `( ${currentNode.value} ) -> null`;
                    string += value;
                }
                currentNode = currentNode.next;
            }
            console.log(string);
        },

        insertAt: function(value, index) {
            let newNode = createNode();
            newNode.value = value;

            let currentNode = this.firstNode;
            const length = this.size();
            let leftNode;
            let rightNode;

            for(let i = 0; i < length; i++) {
                    if(i == (index - 1)) {
                        leftNode = currentNode;
                    } 
                    if(i == index) {
                        rightNode = currentNode;
                    }
                    currentNode = currentNode.next;
            }

            newNode.next = rightNode;
            leftNode.next = newNode;
        },

        removeAt: function(index) {
            let currentNode = this.firstNode;
            const length = this.size();

            let leftNode;
            let targetNode;

            for(let i = 0; i < length; i++) {
                if(i == (index - 1)) {
                    leftNode = currentNode;
                };
                if(i == index) {
                    targetNode = currentNode;
                }
                currentNode = currentNode.next;
            }

            leftNode.next = targetNode.next;
        }

    }
}

const myList = createLinkedList();


