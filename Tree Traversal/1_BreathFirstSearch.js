// two ways to traverse a tree
// Breadth-first search
// Depth-first search
/* 
                10
            6         15
        3       8          20

        [10, 6, 15, 3, 8, 20]
*/

/*  Steps - iteratively
Create a queue and a variable to store the values of nodes visited
Place the root node in the queue
Loop as long as there is anything in the queue
    Dequeue a node from the queue and push the value of the node into the variable that stores
    the nodes
    If there is a left property on the node dequeued - add it to the queue
    If there is a right property on th node dequeued - add it to the queue
Return the variable that stores the values 
*/
