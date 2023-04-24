class Queue {
    constructor() {
     this.head=null;
     this.tail=null;
     this.count = 0;
    }
  
    /**
     * Adds an item to the back of the queue.
     * @param {*} item The item to be pushed onto the queue.
     * @return {number} The new length of the queue.
     */
    enqueue(item) {
      this.count++;
      if(this.head === null) {
        this.head = this.tail = new Node(item, null)
      } else {
        const temp = new Node(item, null);
        this.tail.next = temp;
        this.tail = this.tail.next;
      }
    }
  
    /**
     * Remove an item from the front of the queue.
     * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    dequeue() {
      this.count--;
      if(this.head !== null) {
            const val = this.head.val;
            this.head = this.head.next;
            return val;
  
      } else {
        return undefined;
      }
  
    }
  
    /**
     * Determines if the queue is empty.
     * @return {boolean} `true` if the queue has no items, `false` otherwise.
     */
    isEmpty() {
     return this.head == null;
    }
  
    /**
     * Returns the item at the front of the queue without removing it from the queue.
     * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
     */
    front() {
      return this.head ? this.head.val : undefined;
    }
  
    /**
     * Returns the item at the back of the queue without removing it from the queue it.
     * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
     */
    back() {
      return this.tail ? this.tail.val : undefined;
    }
  
    /**
     * Returns the number of items in the queue.
     * @return {number} The number of items in the queue.
     */
    length() {
      return this.count;
    }
  }
  
  class Node {
    constructor(val, next) {
      this.val= val;
      this.next=next;
    }
  }

  let q = new Queue();
  q.enqueue(5);
  q.enqueue(8);
  q.enqueue(1);
  console.log(q.length())