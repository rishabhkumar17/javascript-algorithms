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
