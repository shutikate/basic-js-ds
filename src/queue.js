class Queue {
  constructor() {
    this.queue = {};
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueueRecursively (queue, value) {
    if (!queue.next) {
      queue.next = { value, next: null };
    } else {
      this.enqueueRecursively(queue.next, value);
    }
  }

  enqueue(value) {
    if (!Object.keys(this.queue).length) {
      this.queue = { value, next: null };
    } else {
      this.enqueueRecursively(this.queue, value);
    }
  }

  dequeue() {
    const el = this.queue.value;
    this.queue = this.queue.next;
    return el;
  }
}

module.exports = {
  Queue
};
