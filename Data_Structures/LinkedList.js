// constructor function

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev= prev;
}

// Reference head node
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null)
  // if LinkedList already exist, then reference the prev node next: to the newNode object
  if(this.head) {
    this.head.prev = newNode;
    console.log('head-prev');
  }

  // else if this.head does not exist then set tail node as newNode
  else this.tail = newNode;
  // assign newNode to assume this.head node
  this.head = newNode;
}

// Reference tail node
LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}


// Create new LinkedList
let ll = new LinkedList();

ll.addToHead(100)
