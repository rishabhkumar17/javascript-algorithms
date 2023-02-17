// What is a binary heap?

/* 
Very similar to a binary search tree, but with some different rules!

In a MaxBinaryHeap, parent nodes are always larger than child nodes. 

In a MinBinaryHeap, parent nodes are always smaller than child nodes
*/

/* 
MAX BINARY HEAP

                    100
                19         36 
            17      3    25    1
        2      7

    Each parent has at most two child nodes.
    The value of each parent node is always greater than its child nodes
    In a max binary heap the parent is greater than the children, but there is no guarantees between sibling nodes.
    A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

Why do we need to know this?
    Binary Heaps are used to implement priority queues,
    which are very commonly used data structures.

    They are also used quite a bit, with graph traversal algorithms.
*/
