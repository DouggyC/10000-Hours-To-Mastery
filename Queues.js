/** Queues */
// First in, First out
// eg waiting in line, or like print queue

// ES6+
class Queue {
  collection = [];
  // Print collection
  print = () => console.log(this.collection);

  // Add to end of queue
  enqueue = el => this.collection.push(el);

  // Remove from front of queue
  dequeue = () => this.collection.shift();

  // Return Front element
  front = () => this.collection[0];

  // Return length of queue
  size = () => this.collection.length;

  // Return boolean
  isEmpty = () => this.collection.length === 0;
}

// let q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

/** Priority Queue; receives element and priorities */
class PriorityQueue {
  collection = [];
  print = () => console.log(this.collection);

  //
  isEmpty = () => this.collection.length === 0;

  //
  enqueue = el => {
    if (this.isEmpty()) {
      this.collection.push(el);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (el[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, el);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(el);
      }
    }
  };

  //
  dequeue = () => {
    let val = this.collection.shift();
    return val;
  };

  //
  front = () => this.collection[0];

  //
  size = () => this.collection.length;
}

let pq = new PriorityQueue();
pq.enqueue(['Lunch', 1]);
pq.enqueue(['Meeting', 1]);
pq.enqueue(['Coffee', 2]);
pq.enqueue(['Gym', 3]);
pq.print();
pq.front();
console.log(pq.dequeue());
pq.print();
