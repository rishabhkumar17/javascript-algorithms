// There is an easy way of storing a binary heap
// A LIST or ARRAY

/*  
For any parent node index of an array - n 
    The left child is stored at 2n + 1
    The right child is stored at 2n + 2

For any child node at index - n
    Its parent is at index (n - 1)/2 
                            floored
*/
