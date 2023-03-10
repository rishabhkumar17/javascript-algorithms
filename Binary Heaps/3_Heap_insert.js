/* Defining our class
Class Name:
    MaxBinaryHeap
Properties:
    values: []

INSERT 
    Push the value into the values property on the heap
    Bubble the value up to its correct spot
*/

/* INSERT in detail
Push the value into the values property on the heap
Bubble UP:
    Create a variable called index which is the lengthof the values property - 1
    Create a variable called parentIndex which is the floor of (index - 1)/2
    Keep looping as long as the values element at the parentIndex is less than the values element at the child index.
        Swap the values of the values element at the parentIndex with the value of the element property at the child index
        Set the index to be the parentIndex, and start over


*/

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
  }

  bubbleUp(element) {
    console.log(element);
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
