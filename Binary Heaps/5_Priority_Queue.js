/* 
WHAT IS A PRIORITY QUEUE
    A data structure where each element has a priority.
    Elements with higher priorities are served before elements with lower priorities.
*/

/* 
class Name:
    PriorityQueue
Properties:
    values = []

but also...

Class Name:
    Node
Properties:
    val
    priority

val doesn't matter.
Heap is constructed using priority
*/

/* PRIORITY QUEUE - PSEUDOCODE 
Write a MIN BINARY HEAP - lower number means higher priority.
Each Node has a val and a priority. Use the priority to build the heap.
Enqueue method accepts a value and priority, makes a new node, and puts
    it in the right spot based off of its priority.
Dequeue method removes root element, returns it, and 
    rearranges heap using priority.
*/

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }

  bubbleUp(element) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // sink down
      this.sinkDown();
    }
    return min;
  }
  // [33, 39, 41, 18, 27, 12]
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue('Common cold', 5);
ER.enqueue('Gunshot wound', 1);
ER.enqueue('High fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('Glass in foot', 3);

// O(log(n))
