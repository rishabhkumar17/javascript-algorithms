// Depth First Search - PostOrder
/* 
                10
            6         15
        3       8          20

        [3, 8, 6, 20, 15, 10]
*/

/* Steps - Recursively
Create a variable to store the values of nodes visited
Store the root of the BST in a variable called current
Write a helper function which accepts a node
    If the node has a left property, call the helper function with left property on the node
    if the node has a right property, call the helper function with the right property on the node
    Push the value of the node to the varaible that stores the values
Invoke the helper function with the current value
Return the array of values
*/
